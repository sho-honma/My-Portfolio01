import classes from "./Maincontainer.module.css";
import { useEffect, useState, memo } from "react";
import { Library } from "../Library/Library";
import Hachinosu from "../Hachinosu/Hachinosu";

export function Maincontainer() {
    const [isEditing, setEditing] = useState(true);

    const starthandler = () => {
        setEditing(false);
    };
    const stophandler = () => {
        setEditing(true);
    };

    return (
        <div className={classes.Maincontainer}>
            {isEditing ? (
                <Library Onstart={starthandler} status={isEditing} />
            ) : (
                <Hachinosu Onstop={stophandler} status={isEditing} />
            )}
        </div>
    );
}
