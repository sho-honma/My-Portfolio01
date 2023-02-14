import { Link, Head } from "@inertiajs/react";
import { Home } from "../Components/Home/Home";

export default function Welcome(props) {
    return (
        <>
            <Head title="Power Frame" />
            <Home />

            <div className="relative flex items-top justify-center  bg-gray-100 dark:bg-gray-900 sm:items-center sm:pt-0">
                <div className="fixed top-1 right-0 px-6 py-4 sm:block">
                    {props.auth.user ? (
                        <Link
                            href={route("dashboard")}
                            className="text-2xl text-white dark:text-gray-500 rounded bg-indigo-900 px-6 py-1 mr-3"
                        >
                            マイページ
                        </Link>
                    ) : (
                        <>
                            <Link
                                href={route("login")}
                                className="text-2xl text-white dark:text-gray-500 rounded bg-indigo-900 px-6 py-1 mr-3"
                            >
                                ログイン
                            </Link>

                            <Link
                                href={route("register")}
                                className="text-2xl text-white dark:text-gray-500 rounded bg-indigo-900 px-6 py-1 "
                            >
                                新規登録
                            </Link>
                        </>
                    )}
                </div>
            </div>
        </>
    );
}
