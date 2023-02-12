import classes from "./Library.module.css";
import { useEffect, useState, useMemo, memo } from "react";

import {
    Button,
    Card,
    Image,
    Text,
    Badge,
    Group,
    Modal,
    useMantineTheme,
} from "@mantine/core";

export function Library(props) {
    const [opened, SetOpened] = useState(false);
    const [status, Setstatus] = useState(props.status);

    console.log(status);
    const theme = useMantineTheme();
    const cards = [
        {
            id: 1,
            img: "https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80",
            title: "今日のご飯",
            template: "はちのす",
        },
        {
            id: 2,
            img: "https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80",
            title: "今日のご飯",
            template: "はちのす",
        },
    ];
    const templates = [
        {
            title: "はちのすノート",
            img: "https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80",
            description:
                "With Fjord Tours you can explore more of the magical fjordlandscapes with tours and activities on and around the fjords ofNorway",
            sale: "on sale",
            color: "indigo",
            status: true,
        },
        {
            title: "マンダラート",
            img: "https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80",
            description:
                "With Fjord Tours you can explore more of the magical fjordlandscapes with tours and activities on and around the fjords ofNorway",
            sale: "coming soon",
            color: "red",
            status: false,
        },
    ];
    const [lists, setLists] = useState([]);
    const [datas, setDatas] = useState([]);
    const [updates, setUpdate] = useState([]);
    const [deletenum, setDeletenum] = useState(0);
    const [responses, setResponse] = useState([]); // console.log(responses);
    useEffect(() => {
        axios
            .post("/dashboard/read", {
                user_id: props.auth.user.id,
            })
            .then(function (response) {
                setLists(response.data);
                console.log(lists);
            })
            .catch((error) => console.log(error));
    }, [datas]);
    // #削除
    const work_delete = (num) => {
        axios
            .post("/dashboard/delete", {
                id: num,
            })
            .then(function (response) {
                setDatas(response.data);
                console.log(datas);
            })
            .catch((error) => console.log(error));
    };
    // #新規作成
    const work_create = () => {
        axios
            .post("/dashboard/create", {
                user_id: props.auth.user.id,
                item_title: "新作",
            })
            .then(function (response) {
                setResponse(response.data);
                console.log(responses);
            })
            .catch((error) => console.log(error));
    };
    // #編集
    const work_edit = (num) => {
        axios
            .post("/dashboard/edit", {
                work_id: num,
            })
            .then(function (response) {
                setResponse(response.data);
                console.log(responses);
            })
            .catch((error) => console.log(error));
    };
    return (
        <div className={classes.Library}>
            <div className={classes.header}>
                <div className={classes.headerleft}>過去の作品一覧</div>
                <button onClick={work_create}>新規作成</button>
                <button onClick={work_delete}>削除</button>
                <button onClick={detail_update}>更新</button>
                <div className={classes.headerright}>
                    <button
                        color="indigo"
                        size="lg"
                        onClick={() => SetOpened(true)}
                    >
                        新規作成
                    </button>
                </div>
            </div>
            <div className={classes.cardcontainer}>
                {cards.map((card) => {
                    return (
                        <Card
                            className={classes.card}
                            shadow="sm"
                            p="lg"
                            radius="md"
                            withBorder
                            key={card.id}
                        >
                            <Card.Section>
                                <Image
                                    src={card.img}
                                    height={100}
                                    alt="Norway"
                                    classNames={classes.cardimage}
                                />
                            </Card.Section>
                            <Group position="apart" mt="md" mb="xs">
                                <Text classNames={classes.cardtitle}>
                                    {card.title}
                                </Text>
                                <Badge color="pink" variant="light">
                                    {card.template}
                                </Badge>
                            </Group>
                            <Button
                                className={classes.editbutton}
                                variant="light"
                                color="blue"
                                fullWidth
                                mt="md"
                                radius="md"
                                onClick={props.Onstart}
                            >
                                編集する
                            </Button>
                            <Button
                                className={classes.editbutton}
                                variant="light"
                                color="red"
                                fullWidth
                                mt="md"
                                radius="md"
                                onClick={props.Onstart}
                            >
                                削除する
                            </Button>
                        </Card>
                    );
                })}
            </div>
            <Modal
                centered
                size="70%"
                opened={opened}
                onClose={() => SetOpened(false)}
                title="テンプレートを選択してください"
                overlayColor={
                    theme.colorScheme === "dark"
                        ? theme.colors.dark[9]
                        : theme.colors.gray[2]
                }
                overlayOpacity={0.55}
                overlayBlur={3}
            >
                <div className={classes.templatecontainer}>
                    {templates.map((template) => {
                        return (
                            <div
                                className={classes.templatecard}
                                key={template.title}
                            >
                                <Card shadow="sm" p="lg" radius="md" withBorder>
                                    <Card.Section>
                                        <Image
                                            src={template.img}
                                            height={160}
                                            alt="Norway"
                                        />
                                    </Card.Section>
                                    <Group position="apart" mt="md" mb="xs">
                                        <Text weight={500}>
                                            {template.title}
                                        </Text>
                                        <Badge
                                            color={template.color}
                                            variant="light"
                                        >
                                            {template.sale}
                                        </Badge>
                                    </Group>
                                    <Text size="sm" color="dimmed">
                                        {template.description}
                                    </Text>
                                    {template.status ? (
                                        <Button
                                            variant="light"
                                            color="blue"
                                            fullWidth
                                            mt="md"
                                            radius="md"
                                            onClick={props.Onstart}
                                        >
                                            はじめる
                                        </Button>
                                    ) : (
                                        <div></div>
                                    )}
                                </Card>
                            </div>
                        );
                    })}
                </div>
            </Modal>
        </div>
    );
}
