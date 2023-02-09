import { useEffect, useState } from "react";
import { DatePicker } from "@mantine/dates";
import classes from "./Registerform.module.css";
import { useForm } from "@mantine/form";
import { HueSlider, Text, RangeSlider } from "@mantine/core";

import {
    Drawer,
    Button,
    Group,
    TextInput,
    Textarea,
    ColorPicker,
    Stack,
    Slider,
} from "@mantine/core";

export function RegisterForm(props) {
    const setdata = () => {};
    const [opened, setOpened] = useState(props.opened);
    const [title, setTitle] = useState(props.title);
    const [description, setDescription] = useState(props.description);
    const [slider, setSlider] = useState(50);
    const [color, setColor] = useState("#25262b");
    const [date, setDate] = useState(new Date());
    // const [data, Setdata] = useState(props.list);
    // useEffect(() => {
    //   console.log(title);
    // }, [title]);
    // useEffect(() => {
    //   console.log(opened);
    // }, [opened]);
    console.log(props.color);

    return (
        <div className={classes.RegisterForm}>
            <div className={classes.button} onClick={() => setOpened(true)}>
                <h2>{props.title}</h2>
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
                <TextInput
                    placeholder={title}
                    label="タイトル"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <Textarea
                    placeholder={description}
                    label="詳細"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <p>重要度</p>
                <Slider
                    size="lg"
                    radius="md"
                    label="重要度"
                    value={slider}
                    onChange={setSlider}
                    marks={[
                        { value: 20, label: "20%" },
                        { value: 50, label: "50%" },
                        { value: 80, label: "80%" },
                    ]}
                />
                <DatePicker
                    dropdownType="modal"
                    firstDayOfWeek="sunday"
                    placeholder="Pick date"
                    label="Event date"
                    value={date}
                    onChange={setDate}
                />
                <Stack align="center">
                    <ColorPicker
                        format="hex"
                        value={color}
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
                    <Text>{color}</Text>
                </Stack>
                <button>保存</button>
            </Drawer>
        </div>
    );
}
