import classes from "./Hachinosu.module.css";
import { useState, useEffect } from "react";
import { RegisterForm } from "../Registerform/Registerform";
import { Button } from "@mantine/core";
// import datas from "../../data.json";
export default function Hachinosu(props) {
    const [opened, setOpened] = useState(false);
    // const [color, setColor] = useState("#ffff");
    // const colorhandler = (value) => {
    //   setColor((color) => value);
    // };
    const datas = [
        {
            id: 1,
            title: "wsasawwwwwqssasasasasasasasasasw",
            description: "llllllllllll",
            color: "red",
        },
        {
            id: 2,
            title: "wwwfefewwww",
            description: "llllllllllll",
            color: "red",
        },
        {
            id: 3,
            title: "wwwdwdwwwww",
            description: "llllllllllll",
            color: "red",
        },
        {
            id: 4,
            title: "wwwwdwdwwww",
            description: "llllllllllll",
            color: "red",
        },
        {
            id: 5,
            title: "wwwqqqwwww",
            description: "llllllllllll",
            color: "red",
        },
        {
            id: 6,
            title: "wwwwwdwww",
            description: "llllllllllll",
            color: "red",
        },
        {
            id: 7,
            title: "wwwwwdefwww",
            description: "llllllllllll",
            color: "red",
        },
        {
            id: 8,
            title: "wwwcwwww",
            description: "llllllllllll",
            color: "red",
        },
        {
            id: 9,
            title: "wwwfewwwww",
            description: "llllllllllll",
            color: "red",
        },
        {
            id: 10,
            title: "wwwwwfwefww",
            description: "llllllllllll",
            color: "red",
        },
        {
            id: 11,
            title: "wwwwwwww",
            description: "llllllllllll",
            color: "red",
        },
        {
            id: 12,
            title: "wwwwwww",
            description: "llllllllllll",
            color: "red",
        },
        {
            id: 13,
            title: "wwwcwewwww",
            description: "llllllllllll",
            color: "red",
        },
        {
            id: 14,
            title: "wwwcwweswww",
            description: "llllllllllll",
            color: "red",
        },
    ];

    const [lists, Setlist] = useState(datas);
    // console.log(lists);
    // useEffect(() => {
    //   console.log(opened);
    // }, [opened]);

    return (
        <div className={classes.Hachinosu}>
            <div className={classes.header}>
                <div className={classes.headerleft}>はちのすノート</div>
                <div className={classes.headerright}>
                    <Button color="indigo" size="lg" onClick={props.Onstop}>
                        完成
                    </Button>
                </div>
            </div>
            <div></div>

            <div className={classes.grid}>
                {lists.map((list) => {
                    return (
                        <div className={classes.grid__item} key={list.id}>
                            <div className={classes.grid__gutter}>
                                <button
                                    className={classes.hexagon}
                                    onClick={() => setOpened(true)}
                                >
                                    <div className={classes.hexagon__inner_1}>
                                        <div
                                            className={classes.hexagon__inner_2}
                                        >
                                            <div
                                                className={
                                                    classes.hexagon__inner_3
                                                }
                                            >
                                                <div
                                                    className={
                                                        classes.hexagon__inner_image
                                                    }
                                                    // style={{ backgroundColor: { color } }}
                                                >
                                                    <RegisterForm
                                                        opened={opened}
                                                        className={
                                                            classes.hexagon__title
                                                        }
                                                        id={list.id}
                                                        title={list.title}
                                                        description={
                                                            list.description
                                                        }
                                                        // color={colorhandler}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </button>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
