import classes from "./Hachinosu.module.css";
import { useState, useEffect, useCallback } from "react";
import RegisterForm from "../RegisterForm/RegisterForm";
import { Button } from "@mantine/core";
export function Hachinosu(props) {
    const [count, setCount] = useState(0);
    const [isEditing, setEditing] = useState(true);
    const starthandler = useCallback(() => {
        setEditing(!isEditing);
    }, [isEditing]);
    useEffect(() => {
        axios
            .post("/dashboard/edit", {
                work_id: props.data,
            })
            .then(function (response) {
                setlist(response.data);
            })
            .catch((error) => console.log(error));
    }, [isEditing]);

    const [lists, setlist] = useState(props.details);
    const [opened, setOpened] = useState(false);
    const [newcolor, setNewcolor] = useState("#ffff");

    return (
        <div className={classes.Hachinosu}>
            <div className={classes.header}>
                <div className={classes.headerleft}>はちのすノート</div>
                <div className={classes.headertitle}>{props.title}</div>
                <div className={classes.headerright}>
                    <Button
                        className={classes.finishbutton}
                        color="indigo"
                        size="lg"
                        onClick={props.Onstop}
                    >
                        完成
                    </Button>
                </div>
            </div>
            <div className={classes.maincontainer}>
                <div className={classes.grid}>
                    {lists.map((list) => {
                        const past = list.color;
                        const word = { backgroundColor: past };
                        return (
                            <div className={classes.grid__item} key={list.id}>
                                <div className={classes.grid__gutter}>
                                    <button
                                        className={classes.hexagon}
                                        onClick={() => setOpened(true)}
                                    >
                                        <div
                                            className={classes.hexagon__inner_1}
                                        >
                                            <div
                                                className={
                                                    classes.hexagon__inner_2
                                                }
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
                                                        style={word}
                                                    >
                                                        <RegisterForm
                                                            opened={opened}
                                                            setCount={setCount}
                                                            Onstart={
                                                                starthandler
                                                            }
                                                            setNewcolor={
                                                                setNewcolor
                                                            }
                                                            className={
                                                                classes.hexagon__title
                                                            }
                                                            id={list.id}
                                                            work_id={
                                                                list.work_id
                                                            }
                                                            section_id={
                                                                list.section_id
                                                            }
                                                            detail_title={
                                                                list.detail_title
                                                            }
                                                            color={list.color}
                                                            date={list.date}
                                                            important={
                                                                list.important
                                                            }
                                                            description={
                                                                list.description
                                                            }
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
        </div>
    );
}
