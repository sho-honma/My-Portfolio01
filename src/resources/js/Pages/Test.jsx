import { useEffect, useState } from "react";
import axios from "axios";
export default function () {
    const [daas, setDatas] = useState([]);
    const [responses, setResponse] = useState([]);
    // #Getメソッド
    // useEffect(() => {
    //     axios
    //         .get("https://jsonplaceholder.typicode.com/users")
    //         .then((response) => setDatas(response.data))
    //         .catch((error) => console.log(error));
    // }, []);
    const setData = () => {
        axios
            .get("/book")
            .then((response) => {
                console.log(response.data);
                setResponse(response.data);
                // console.log(responses[0]);
            })

            .catch((error) => console.log(error));
    };

    // #Updatメソッド
    const updatework = () => {
        axios
            .patch("/update", {
                work_id: 1,
                section_id: 38,
                color: 443,
                description: "ewewewewew",
            })
            .then(function (response) {
                setResponse(response.data);
                console.log(responses);
            })
            .catch((error) => console.log(error));
    };
    const makework = () => {
        axios
            .post("/make", {
                user_id: 2,
                item_title: "新作",
                work_id: 2,
            })
            .then(function (response) {
                setResponse(response.data);
                console.log(responses);
            })
            .catch((error) => console.log(error));
    };
    return (
        <div>
            <h1>リスト</h1>
            {/* {daas.map((data) => {
                return <p>{data.name}</p>;
            })} */}
            <button onClick={setData}>botann</button>
            <button onClick={makework}>新規作成</button>
            <button onClick={updatework}>こうしん</button>
            {/* {responses.map((res) => {
                return (
                    <h1 key={res.id}>
                        <p>{res.item_title}</p>
                    </h1>
                );
            })} */}
        </div>
    );
}
// {datas.map((data)=> {
//     return(
//         <P></
//     )
//         })}
