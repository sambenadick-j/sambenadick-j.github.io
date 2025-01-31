import React, { useState } from "react";

export function Parent() {
    const [sharedData, setSharedData] = useState("");

    const handleDataFromSibling1 = (data) => {
        setSharedData(data);
    };

    return (
        <div>
        </div>
    );
}

export function Sibling1({ sendData }) {
    const [inputValue, setInputValue] = useState("");

    const handleSend = () => {
        sendData(inputValue);
    };

    return (
        <div>
        </div>
    );
}

export function Sibling2({ receivedData }) {
    return (
        <div>
        </div>
    );
}