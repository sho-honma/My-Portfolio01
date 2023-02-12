import classes from "./Sidebar.module.css";
import { useState } from "react";
import { Link } from "@inertiajs/react";
import Dropdown from "@/Components/Dropdown";

import {
    Drawer,
    Button,
    Group,
    Portal,
    Burger,
    Modal,
    useMantineTheme,
} from "@mantine/core";
import { useFocusTrap } from "@mantine/hooks";
export function Sidebar() {
    const [opened, setOpened] = useState(false);
    const title = opened ? "Close navigation" : "Open navigation";
    const theme = useMantineTheme();

    return (
        <div className={classes.sidebar}>
            <Group position="center">
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
                // overlayOpacity={0}
                overlayColor={
                    theme.colorScheme === "dark"
                        ? theme.colors.dark[9]
                        : theme.colors.gray[2]
                }
                overlayOpacity={0.55}
                overlayBlur={3}
            >
                <Link href="/">ホーム</Link>
                <Dropdown.Link href={route("logout")} method="post" as="button">
                    ログアウト
                </Dropdown.Link>
            </Drawer>
        </div>
    );
}
