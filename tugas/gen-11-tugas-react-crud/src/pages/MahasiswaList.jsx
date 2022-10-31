import { useState, useEffect } from "react"
import { Link } from "react-router-dom";
import axios from "axios"

export default function MahasiswaList() {
    const [allData, setAllData] = useState([]);

    useEffect(() => {
        getData();
    }, []);

    async function getData() {
        const pokemonData = await axios.get("http://localhost:3000/mahasiswa");
        setAllData(pokemonData.data);
    }

    async function handleDelete(id) {
        await axios.delete(`http://localhost:3000/mahasiswa/${id}`);
        getData();
    }

    return (
        <div className="container my-2 mx-auto p-4 rounded-lg border-2 border-teal-500 ">
            <div className="max-w-screen-xl mx-auto">
                <div>
                    <h1 className="font-bold text-3xl mb-6 text-center">Daftar Mahasiswa</h1>
                </div>
                <Link to={`/mahasiswa/tambah`}>
                    <button
                        className="ml-0 mr-auto text-white bg-blue-700 hover:opacity-80 font-medium rounded-lg text-xs px-3 py-2 mb-2"
                    > + Tambah Mahasiswa
                    </button>
                </Link>
                <table className="mx-auto text-sm text-gray-500 w-full">
                    <thead className="text-center text-xs text-gray-700 uppercase bg-teal-500">
                        <tr>
                            <th className="py-3 px-4">Nama</th>
                            <th className="py-3 px-4">Tempat Lahir</th>
                            <th className="py-3 px-4">Tanggal Lahir</th>
                            <th className="py-3 px-4">Alamat</th>
                            <th className="py-3 px-4">Jenis Kelamin</th>
                            <th className="py-3 px-4">Fakultas</th>
                            <th className="py-3 px-4">Beasiswa</th>
                            <th className="py-3 px-4">Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        {allData.map((item) => (
                            <tr key={item.id} className="odd:bg-white even:bg-gray-100 border-b">
                                <td className="text-left px-2">{item.nama}</td>
                                <td className="text-center">{item.tempatLahir}</td>
                                <td className="text-center">{item.tanggalLahir}</td>
                                <td>{item.alamat}</td>
                                <td className="text-center">{item.jenisKelamin}</td>
                                <td className="text-center">{item.fakultas}</td>
                                <td className="text-center">{item.beasiswa.join(", ")}</td>
                                <td className="text-center mx-auto flex justify-center gap-x-2 px-2">
                                    <Link to={"/mahasiswa/" + item.id}>
                                        <button
                                            className="text-white bg-green-700 hover:opacity-80 font-medium rounded-lg text-xs px-3 py-2"
                                        >Details
                                        </button>
                                    </Link>
                                    <Link to={`/mahasiswa/edit/${item.id}`}>
                                        <button
                                            className="text-white bg-blue-700 hover:opacity-80 font-medium rounded-lg text-xs px-3 py-2"
                                        >Edit
                                        </button>
                                    </Link>
                                    <button
                                        onClick={() => handleDelete(item.id)}
                                        className="text-white bg-red-700 hover:opacity-80 font-medium rounded-lg text-xs px-3 py-2"
                                    >Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

        </div >
    );
}