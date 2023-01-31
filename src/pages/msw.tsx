import React, { useState } from "react";

function Msw() {
    const [userName, setUserName] = useState("");
    const isLogin = () => {
        fetch("/login", { method: "POST" });
    };

    const getUserName = async () => {
        const name = await (await fetch("/user")).json();
        setUserName(name.userName);
    };

    return (
        <div>
            <h1>MSW TEST</h1>
            <button onClick={isLogin}>isLogin</button>
            <button onClick={getUserName}>get User Name</button>

            <p>{userName}</p>
        </div>
    );
}

export default Msw;
