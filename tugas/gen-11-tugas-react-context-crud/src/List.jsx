import { useState, useEffect, useContext } from "react"
import { BarangContext } from "./BarangProvider"
import axios from "axios"

export default function List() {
    const Barang = useContext(BarangContext)
    // const [allData, setAllData] = useState([]);

    async function getData() {
        const dataBarang = await axios.get("http://localhost:3000/barang");
        Barang.setAllData(dataBarang.data);
    }

    useEffect(() => {
        getData();
    }, []);

    return (
        <div className="container my-2 mx-auto p-4 rounded-lg text-center border-2 border-teal-500 ">
            <div className="mt-12 max-w-screen-xl mx-auto">
                <table className="mx-auto text-sm text-gray-500">
                    <thead className="text-center text-xs text-gray-700 uppercase bg-teal-500">
                        <tr>
                            <th className="py-3 px-4">Nama Barang</th>
                            <th className="py-3 px-4">Jumlah Barang</th>
                            <th className="py-3 px-4">Satuan</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Barang.allData.map((item) => (
                            <tr key={item.id} className="odd:bg-white even:bg-gray-100 border-b">
                                <td className="text-left px-2">{item.namaBarang}</td>
                                <td className="text-center">{item.jumlah}</td>
                                <td className="text-center">{item.satuan}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

        </div >
    );
}