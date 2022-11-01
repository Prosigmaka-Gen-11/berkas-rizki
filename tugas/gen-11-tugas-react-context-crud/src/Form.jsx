import { useState, useEffect, useContext } from "react"
import { BarangContext } from "./BarangProvider"
import { useNavigate } from "react-router-dom";
import axios from "axios"

const initialForm = {
    namaBarang: '', //text
    jumlah: '', //text
    satuan: '', //select
}

export default function Form() {
    const navigate = useNavigate();

    const Barang = useContext(BarangContext)

    function handleFormInput(event, propertyName) {
        Barang.setInput({
            ...Barang.input,
            [propertyName]: event.target.value,
        });
        // setInput({ ...input, [propertyName]: event.target.value });
    }

    async function handleSubmit(event) {
        // event.preventDefault();
        await axios.post("http://localhost:3000/barang", Barang.input);
        Barang.setInput({ ...initialForm });

        // navigate("/");
    }

    return (
        <div className="container my-2 mx-auto p-4 rounded-lg text-center border-2 border-teal-500 ">
            <form onSubmit={(event) => handleSubmit(event)} className="max-w-md mx-auto">
                <div>
                    <h1 className="font-bold text-3xl mb-6">Form Input</h1>
                </div>
                <label className="flex justify-between max-w-md mx-auto items-center">
                    <div className="w-[30%] text-left">Nama</div>
                    <div className="w-[5%]">:</div>
                    <input onChange={event => handleFormInput(event, 'namaBarang')}
                        type="text"
                        name="namaBarang"
                        placeholder="Nama Barang"
                        value={Barang.input.namaBarang}
                        className="w-[65%] p-2 rounded-md mb-2 border-2 border-slate-500 focus:outline-teal-500"
                    />
                </label>

                <label className="flex justify-between max-w-md mx-auto items-center">
                    <div className="w-[30%] text-left">Jumlah</div>
                    <div className="w-[5%]">:</div>
                    <input onChange={event => handleFormInput(event, 'jumlah')}
                        type="number"
                        name="jumlah"
                        placeholder="Jumlah Barang"
                        value={Barang.input.jumlah}
                        className="w-[65%] p-2 rounded-md mb-2 border-2 border-slate-500 focus:outline-teal-500"
                    />
                </label>

                <label className="flex justify-between max-w-md mx-auto items-center">
                    <div className="w-[30%] text-left">Satuan</div>
                    <div className="w-[5%]">:</div>
                    <div className="w-[65%] flex justify-between">
                        <select
                            value={Barang.input.satuan}
                            onChange={event => handleFormInput(event, 'satuan')}>
                            <option value="" defaultChecked>- Pilih Satuan-</option>
                            <option value="pcs">PCS</option>
                            <option value="pack">Pack</option>
                            <option value="lusin">Lusin</option>
                        </select>
                    </div>
                </label>

                <button className="p-2 mt-4 bg-teal-500 hover:opacity-80 rounded-lg font-bold">Submit</button>
            </form>

        </div >
    );
}