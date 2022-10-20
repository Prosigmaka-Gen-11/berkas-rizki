import React from "react";

export default function Message() {
    const [text, setText] = React.useState("");

    function changeMessage() {
        setText("Thank you for Subscribing");
    };

    return (
        <div className="container my-2 mx-auto p-4 rounded-lg bg-teal-700 text-center">
            <h1 className="text-white font-bold text-3xl mb-2">{text}</h1>
            <button className="p-2 bg-teal-500 hover:opacity-80 rounded-lg font-bold" onClick={changeMessage}>Subscribe</button>

        </div>
    );
}