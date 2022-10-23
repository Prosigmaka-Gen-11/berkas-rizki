import React, { useEffect, useState } from 'react' // hook

export default function CycleFunction() {
    const [formTitle, setFormTitle] = React.useState('Contact Form');
    const [contactInfo, setContactInfo] = React.useState({
        name: "",
        email: "",
        phonenumber: "",
    });

    useEffect(() => {
        // Sebelum Efek samping selanjutnya jalan
        return () => {
            setTimeout(() => {
                setFormTitle("Contact Form Function");
            }, 3000)
        }
    });

    useEffect(() => {
        // Pertama Kali Render
        const dataFromDb = {
            name: 'function',
            email: 'function@gmail.com',
            phonenumber: '085223445566'
        }

        setContactInfo({
            name: dataFromDb.name,
            email: dataFromDb.email,
            phonenumber: dataFromDb.phonenumber
        })

        return () => {
            // Sebelum Komponen Hilang
            setTimeout(() => {
                setContactInfo({
                    name: '',
                    email: '',
                    phonenumber: ''
                });
            }, 3000)
        }
    }, [])

    useEffect(() => {
        // Update ketika ada perubahan
        console.log(`Perubahan Input : ${JSON.stringify(contactInfo)}`);

        return () => {
            console.log('sebelum contactInfo hilang')
        }
    }, [contactInfo])

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
                    <h1 className="font-bold text-3xl mb-4">{formTitle}</h1>
                    <div className="my-2">{JSON.stringify(contactInfo)}</div>
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