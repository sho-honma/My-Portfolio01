import classes from "./Home.module.css";

export function Home() {
    return (
        <div className={classes.Home}>
            <div className={classes.top}>
                <h1 className={classes.main_title}>Power Frame</h1>
                <h2 className={classes.sub_title}>for thinking effectively</h2>
                <h1 className={classes.main_message}>PowerFrameとは</h1>
                <p className={classes.sub_message}>
                    ああああああああああああああああああ
                    <br />
                    ああああああああああああああああああああああああああああああ
                </p>

                <div className={classes.explain}>
                    <div className={classes.topic1}>
                        <div className={classes.topic1_text_container}>
                            <h1 className={classes.topic1_title}>
                                フレームを使ってアイデアを
                                <br />
                                活性化させよう
                            </h1>
                            <p className={classes.topic1_passsege}>
                                ああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああ
                            </p>
                        </div>
                        <div className={classes.topic1_image}></div>
                    </div>
                    <div className={classes.topic2}>
                        <div className={classes.topic2_text_container}>
                            <h1 className={classes.topic2_title}>
                                みんなの「あったらいいな」を知ろう
                            </h1>
                            <p className={classes.topic2_passsege}>
                                ああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああ
                            </p>
                        </div>

                        <div className={classes.topic2_image}></div>
                    </div>
                </div>
                <div className={classes.bottom}>
                    <h1 className={classes.bottom_message}>
                        さぁ、今こそアイデア活性化への一歩をともに踏み出しませんか。
                    </h1>
                    <button className={classes.bottom_button}>ログイン</button>
                </div>
            </div>
        </div>
    );
}
