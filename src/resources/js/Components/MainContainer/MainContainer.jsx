import classes from "./MainContainer.module.css";
import { useEffect, useState, useCallback } from "react";
import { Library } from "../Library/Library";
import { Hachinosu } from "../Hachinosu/Hachinosu";

export function Maincontainer() {
    const [isEditing, setEditing] = useState(true);
    const [data, setData] = useState(0);
    const [details, setDetails] = useState([]);
    const [title, setTitle] = useState("");

    const starthandler = useCallback(() => {
        setEditing(false);
    }, []);
    const stophandler = useCallback(() => {
        setEditing(true);
    }, []);
    useEffect(() => {
        if (data === 0) {
            return;
        } else {
            axios
                .post("/dashboard/edit", {
                    work_id: data,
                })
                .then(function (response) {
                    setDetails(response.data);
                });
        }
    }, [data]);

    return (
        <div className={classes.Maincontainer}>
            {isEditing ? (
                <Library
                    Onstart={starthandler}
                    status={isEditing}
                    setData={setData}
                    setTitle={setTitle}
                />
            ) : (
                <Hachinosu
                    Onstop={stophandler}
                    details={details}
                    status={isEditing}
                    title={title}
                    data={data}
                />
            )}
        </div>
    );
}
