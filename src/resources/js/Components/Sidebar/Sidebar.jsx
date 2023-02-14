import classes from "./Sidebar.module.css";
import { useState } from "react";
import Dropdown from "@/Components/Dropdown";
import { Drawer, Group, Burger, useMantineTheme } from "@mantine/core";
export function Sidebar() {
    const [opened, setOpened] = useState(false);
    const title = opened ? "Close navigation" : "Open navigation";
    const theme = useMantineTheme();

    return (
        <div className={classes.sidebar}>
            <Group position="center" mt="2rem" className={classes.group}>
                <Burger
                    opened={opened}
                    onClick={() => setOpened((o) => !o)}
                    title={title}
                    className={classes.burger}
                />
            </Group>
            <Drawer
                className={classes.drawer}
                opened={opened}
                onClose={() => setOpened(false)}
                title=""
                padding="xl"
                size="17%"
                overlayColor={
                    theme.colorScheme === "dark"
                        ? theme.colors.dark[9]
                        : theme.colors.gray[2]
                }
                overlayOpacity={0.55}
                overlayBlur={3}
            >
                <div className={classes.title}>Power Frame</div>
                <Dropdown.Link href={route("home")} method="get" as="button">
                    <h2 className={classes.link}>ホーム</h2>
                </Dropdown.Link>
                <Dropdown.Link href={route("logout")} method="post" as="button">
                    <h2 className={classes.link}>ログアウト</h2>
                </Dropdown.Link>
            </Drawer>
        </div>
    );
}
