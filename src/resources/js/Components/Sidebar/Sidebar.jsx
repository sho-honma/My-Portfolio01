import classes from "./Sidebar.module.css";
import { useState } from "react";
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
                <h2>Power Frame</h2>
                <h3>ホーム</h3>
                <h3>ログアウト</h3>
                <h3>お問い合わせ</h3>
            </Drawer>
        </div>
    );
}
