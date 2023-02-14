import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Maincontainer } from "@/Components/MainContainer/MainContainer";
import { Sidebar } from "@/Components/Sidebar/Sidebar";

export default function Dashboard(props) {
    return (
        <AuthenticatedLayout auth={props.auth} errors={props.errors}>
            <div className="flex h-max">
                <Sidebar />
                <Maincontainer />
            </div>
        </AuthenticatedLayout>
    );
}
