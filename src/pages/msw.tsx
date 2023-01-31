import React, { useState } from "react";

function Msw() {
    const [userName, setUserName] = useState({
        userId: "",
        userName: "",
        email: "",
        registeredAt: "",
    });
    const isLogin = () => {
        fetch("/login", { method: "POST" });
    };

    const getUserName = async () => {
        const name = await (await fetch("/user")).json();
        console.log(name);
        setUserName(name);
    };

    return (
        <div>
            <h1>MSW TEST</h1>
            <button onClick={isLogin}>isLogin</button>
            <button onClick={getUserName}>get User Name</button>

            <p>{userName.userName}</p>
            <p>{userName.registeredAt}</p>
            <p>{userName.email}</p>
        </div>
    );
}

export default Msw;
