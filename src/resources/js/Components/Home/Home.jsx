import classes from "./Home.module.css";
import { Link } from "@inertiajs/react";

export function Home() {
    return (
        <div className={classes.Home}>
            <div className={classes.top}>
                <h1 className={classes.main_title}>Power Frame</h1>
                <h2 className={classes.sub_title}>for thinking effectively</h2>
                <h1 className={classes.main_message}>PowerFrameとは</h1>
                <p className={classes.sub_message}>
                    PowerFrame(パワーフレーム)とはWeb上で
                    <br />
                    アイデアフレームを使用することができるアプリです。
                    <br />
                    あらかじめアイデアフレームのテンプレートが <br />
                    用意されているので 手軽に作業することができ、 <br />
                    再び編集することもできます。
                    <br />
                    現在、用意されえているアイデアフレームのテンプレートは
                    <br />
                    <span className={classes.span}>「はちのすのーと」</span>
                    のみですが、 <br />
                    これから新しいアイデアフレームが増えていく予定です。
                    <br />
                    思考を整理したい方やアイデアを発掘したい方はぜひ使ってみてください。
                </p>

                <div className={classes.explain}>
                    <div className={classes.explain_header}>
                        使い方（はちのすのーとver）
                    </div>
                    <div className={classes.topic1}>
                        <div className={classes.topic1_text_container}>
                            <h1 className={classes.topic1_title}>
                                1.ログインまたは新規登録する。
                            </h1>
                            <p className={classes.topic1_passsege}>
                                右上の新規登録ボタンを押してアカウント登録をしてください。
                                <br />
                                ログイン後はマイページに移動します。
                            </p>
                            <h1 className={classes.topic1_title}>
                                2.新規作成ボタンを押し作業を開始する。
                            </h1>
                            <p className={classes.topic1_passsege}>
                                マイページにて右上の新規作成ボタンを押し <br />
                                テンプレートを選択してください。
                                <br />
                                始めるボタンを押すとワークスペースに移動します。
                            </p>
                            <h1 className={classes.topic1_title}>
                                3.セクションをクリックし詳細を記入する。
                            </h1>
                            <p className={classes.topic1_passsege}>
                                セクションをクリックすると詳細を記入できるウインドウが開きます。
                                <br />
                                ここではあなたの状況に合わせてご自由にご記入ください。
                                <br />
                                セクションカラーでは選択した色がはちのすに反映されます。
                                <br />
                                記入した後は
                                <span className={classes.span}>保存ボタン</span>
                                を忘れずに押してください。
                            </p>
                            <h1 className={classes.topic1_title}>
                                4.完了ボタンを押しマイページに戻る。
                            </h1>
                            <p className={classes.topic1_passsege}>
                                右上の完了ボタンを押すとマイページに戻ります。
                                <br />
                                マイページでは過去の作品の編集や削除を
                                行うことが できます。
                                <br />
                            </p>
                        </div>
                        <div className={classes.imagecontainer}>
                            <div className={classes.topic0_image}></div>
                            <div className={classes.topic1_image}></div>
                            <div className={classes.topic2_image}></div>
                        </div>
                    </div>
                    <div className={classes.bottom}>
                        <h1 className={classes.bottom_message}>
                            さぁ、今こそアイデア活性化への一歩をともに踏み出しませんか。
                        </h1>

                        <button className="text-2xl text-white dark:text-gray-500 rounded bg-indigo-900 px-8 py-4  ">
                            <Link href={route("register")}>新規登録</Link>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
