import React from "react";

export default function Form() {
    const [contactInfo, setContactInfo] = React.useState({
        name: "",
        email: "",
        phonenumber: "",
    });

    const handleChange = (event) => {
        setContactInfo({ ...contactInfo, [event.target.name]: event.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(contactInfo);
        setContactInfo({ name: "", email: "", phonenumber: "" });
        alert(`Nama : ${contactInfo.name}, Email : ${contactInfo.email}, Phone : ${contactInfo.phonenumber}`);
    };

    return (
        <div className="container my-2 mx-auto p-4 rounded-lg text-center border-2 border-teal-500">
            <form onSubmit={handleSubmit}>
                <div>
                    <h1 className="font-bold text-3xl mb-4">Contact Form</h1>
                </div>
                <div>
                    <input onChange={handleChange}
                        type="text"
                        name="name"
                        placeholder="Name"
                        value={contactInfo.name}
                        className="p-2 rounded-md mb-2 border-2 border-slate-500 focus:outline-teal-500"
                    />
                </div>
                <div>
                    <input onChange={handleChange}
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={contactInfo.email}
                        className="p-2 rounded-md mb-2 border-2 border-slate-500 focus:outline-teal-500"
                    />
                </div>
                <div>
                    <input onChange={handleChange}
                        type="number"
                        name="phonenumber"
                        placeholder="Phone Number"
                        value={contactInfo.phonenumber}
                        className="p-2 rounded-md mb-2 border-2 border-slate-500 focus:outline-teal-500"
                    />
                </div>
                <div>
                    <button className="p-2 bg-teal-500 hover:opacity-80 rounded-lg font-bold">Submit Contact</button>
                </div>
            </form>
        </div>
    );
}