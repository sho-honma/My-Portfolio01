import classes from "./Library.module.css";
import { useEffect, useState } from "react";

import {
    Button,
    Card,
    Image,
    Text,
    Badge,
    Group,
    Modal,
    useMantineTheme,
    TextInput,
} from "@mantine/core";

export function Library(props) {
    const [opened, SetOpened] = useState(false);
    const [status, Setstatus] = useState(props.status);
    const [next, setNext] = useState(false);
    const [title, setTitle] = useState("");
    const theme = useMantineTheme();
    const templates = [
        {
            title: "はちのすノート",
            img: "../../sample4.png",
            description:
                "マンダラートとマインドマップを組み合わせた新しいアイデア発掘ツール。",
            sale: "on sale",
            color: "indigo",
            status: true,
        },
        {
            title: "マンダラート",
            img: "../../sample5.png",
            description:
                "正方形のマス目の中に目標やテーマを書き込んでアイデアや思考を発展させていく思考ツールです。",
            sale: "coming soon",
            color: "red",
            status: false,
        },
    ];
    const img = "../../sample4.png";
    const [lists, setLists] = useState([]);
    const [user, setUser] = useState(0);
    const [datas, setDatas] = useState([]);
    const [news, setNews] = useState([]);
    const [id, setId] = useState(0);
    const [updates, setUpdate] = useState([]);
    const [deletenum, setDeletenum] = useState("");
    const [details, setDetails] = useState([]);
    const [window, setWindow] = useState(true);

    useEffect(() => {
        axios
            .get("/dashboard/read")
            .then(function (response) {
                setLists(response.data[1]);
                setUser(response.data[0].id);
            })
            .catch((error) => console.log(error));
    }, [datas, news]);
    const work_delete = (num) => {
        axios
            .post("/dashboard/delete", {
                id: num,
            })
            .then(function (response) {
                setDatas(response.data);
            })
            .catch((error) => console.log(error));
    };
    const work_create = () => {
        axios
            .post("/dashboard/create", {
                user_id: user,
                item_title: "not ",
            })
            .then(function (response) {
                setNews(response.data);
                props.setData(response.data);
            })
            .catch((error) => console.log(error));
    };

    const work_edit = (num) => {
        props.setData(num);
    };
    const title_update = () => {
        axios
            .patch("/dashboard/title", {
                work_id: news,
                item_title: title,
            })
            .then(function (response) {});
    };
    return (
        <div className={classes.Library}>
            <div className={classes.header}>
                <div className={classes.headerleft}>過去の作品一覧</div>
                <div className={classes.headerright}>
                    <Button
                        className={classes.headerbutton}
                        color="indigo"
                        size="lg"
                        onClick={() => {
                            SetOpened(true);
                            work_create();
                        }}
                    >
                        新規作成
                    </Button>
                </div>
            </div>
            <div className={classes.cardcontainer}>
                {lists.map((list) => {
                    return (
                        <Card
                            className={classes.card}
                            shadow="sm"
                            p="lg"
                            radius="md"
                            withBorder
                            key={list.id}
                        >
                            <Card.Section>
                                <Image
                                    src={img}
                                    height={130}
                                    alt="Norway"
                                    classNames={classes.cardimage}
                                />
                            </Card.Section>
                            <Badge color="yellow" size="lg" mt="0.5rem">
                                はちのす
                            </Badge>
                            <Group position="apart" mt="md" mb="xs">
                                <Text classNames={classes.cardtitle}>
                                    {list.item_title}
                                </Text>
                            </Group>
                            <Button
                                className={classes.editbutton}
                                fullWidth
                                color="indigo"
                                radius="md"
                                onClick={() => {
                                    props.Onstart();
                                    props.setTitle(list.item_title);
                                    work_edit(list.id);
                                }}
                            >
                                編集する
                            </Button>
                            <Button
                                className={classes.deletebutton}
                                fullWidth
                                radius="md"
                                color="red"
                                onClick={() => {
                                    work_delete(list.id);
                                }}
                            >
                                削除する
                            </Button>
                        </Card>
                    );
                })}
            </div>
            <div>
                <div>
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
                                        <Card
                                            shadow="sm"
                                            p="lg"
                                            radius="md"
                                            withBorder
                                        >
                                            <Card.Section>
                                                <Image
                                                    src={template.img}
                                                    height={160}
                                                    alt="Norway"
                                                />
                                            </Card.Section>
                                            <Group
                                                position="apart"
                                                mt="md"
                                                mb="xs"
                                            >
                                                <Text
                                                    weight={500}
                                                    className={
                                                        classes.templatetitle
                                                    }
                                                >
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
                                                    className={
                                                        classes.startbutton
                                                    }
                                                    color="indigo"
                                                    fullWidth
                                                    mt="md"
                                                    radius="md"
                                                    onClick={() => {
                                                        // props.Onstart();
                                                        setWindow(false);
                                                        SetOpened(false);
                                                        setNext(true);
                                                    }}
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

                <div>
                    <Modal
                        centered
                        title="題名を記入してください"
                        opened={next}
                        size="40%"
                        onClose={() => setNext(false)}
                        overlayColor={
                            theme.colorScheme === "dark"
                                ? theme.colors.dark[9]
                                : theme.colors.gray[2]
                        }
                        overlayOpacity={0.55}
                        overlayBlur={3}
                    >
                        <TextInput
                            placeholder={title}
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                        <Button
                            className={classes.setbutton}
                            onClick={() => {
                                props.Onstart();
                                setWindow(true);
                                props.setTitle(title);
                                title_update();
                                // work_edit(list.id);
                            }}
                        >
                            はじめる
                        </Button>
                    </Modal>
                </div>
            </div>
        </div>
    );
}
