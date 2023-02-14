import React, { useEffect, useState } from "react";
import { DatePicker } from "@mantine/dates";
import classes from "./RegisterForm.module.css";
import {
    Drawer,
    TextInput,
    Textarea,
    ColorPicker,
    Stack,
    Slider,
    Button,
    Group,
} from "@mantine/core";

export default React.memo(function RegisterForm(props) {
    const [opened, setOpened] = useState(props.opened);
    const [title, setTitle] = useState(props.detail_title);
    const [description, setDescription] = useState("");
    const [slider, setSlider] = useState(props.important);
    const [color, setColor] = useState(props.color);
    const [date, setDate] = useState(props.date);
    const [count, setCount] = useState(true);
    useEffect(() => {
        setTitle(props.detail_title);
        setDescription(props.description);
        setSlider(props.important);
        setDate(props.date);
    }, []);
    const detail_update = () => {
        axios
            .patch("/dashboard/update", {
                work_id: props.work_id,
                section_id: props.section_id,
                color: color,
                date: date,
                important: slider,
                detail_title: title,
                description: description,
            })
            .then(function (response) {})
            .catch((error) => console.log(error));
    };

    return (
        <div className={classes.RegisterForm}>
            <div className={classes.button} onClick={() => setOpened(true)}>
                <h2 onClick={props.onColor}>{title}</h2>
            </div>

            <Drawer
                opened={opened}
                onClose={() => setOpened(false)}
                title=""
                padding="xl"
                size="xl"
                position="right"
                overlayOpacity={0}
            >
                <p className={classes.important}>タイトル</p>

                <TextInput
                    placeholder={title}
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <p className={classes.important}>詳細</p>
                <Textarea
                    placeholder={description}
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <p className={classes.important}>重要度</p>
                <Slider
                    // mt="1rem"
                    size="lg"
                    radius="md"
                    value={slider}
                    onChange={setSlider}
                    marks={[
                        { value: 20, label: "20%" },
                        { value: 50, label: "50%" },
                        { value: 80, label: "80%" },
                    ]}
                />
                <p className={classes.important}>日付</p>
                <DatePicker
                    dropdownType="modal"
                    firstDayOfWeek="sunday"
                    placeholder="Pick date"
                    value={date}
                    onChange={setDate}
                />
                <p className={classes.important}>セクションカラー</p>

                <Stack align="center" mt="1rem">
                    <ColorPicker
                        format="rgba"
                        value={color}
                        onChange={setColor}
                        swatches={[
                            "#25262b",
                            "#868e96",
                            "#fa5252",
                            "#e64980",
                            "#be4bdb",
                            "#7950f2",
                            "#4c6ef5",
                            "#228be6",
                            "#15aabf",
                            "#12b886",
                            "#40c057",
                            "#82c91e",
                            "#fab005",
                            "#fd7e14",
                        ]}
                    />
                </Stack>

                <Group p="1rem">
                    <Button
                        size="xl"
                        className={classes.save}
                        onClick={() => {
                            // props.onColor(value);
                            props.Onstart();
                            detail_update();
                            setOpened(false);
                            props.setCount(opened);
                            setCount(!count);
                            // props.setNewcolor(color);
                        }}
                    >
                        保存
                    </Button>
                </Group>
            </Drawer>
        </div>
    );
});
