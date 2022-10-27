import { useState, useEffect } from "react"
import axios from "axios"

const initialForm = {
    nama: '', //text
    tempatLahir: '', //text
    tanggalLahir: '', //date
    alamat: '', //textarea
    jenisKelamin: '', //radio
    fakultas: '', //select
    beasiswa: [], //checkboxes
}

const genderList = [
    { value: 'L', label: 'Laki - laki' },
    { value: 'P', label: 'Perempuan' },
]

const beasiswaList = [
    'Bidikmisi', 'KSE', 'LPDP',
]

export default function Mahasiswa() {

    const [input, setInput] = useState({
        ...initialForm,
    });

    const [allData, setAllData] = useState([]);

    useEffect(() => {
        getData();
    }, []);

    async function getData() {
        const dataMahasiswa = await axios.get("http://localhost:3000/mahasiswa");
        setAllData(dataMahasiswa.data);
    }

    async function handleDelete(id) {
        await axios.delete(`http://localhost:3000/mahasiswa/${id}`);
        getData();
    }

    async function handleEdit(item) {
        setInput(item);
    }

    function handleFormInput(event, propertyName, inputType) {
        if (inputType != "checkbox") {
            setInput({ ...input, [propertyName]: event.target.value });
        } else {
            if (event.target.checked) {
                let array = input.beasiswa;
                array.push(event.target.value);
                setInput({ ...input, [propertyName]: array });
            } else {
                let array = input.beasiswa;
                let index = array.indexOf(event.target.value);
                if (index !== -1) {
                    array.splice(index, 1);
                }
                setInput({ ...input, [propertyName]: array });
            }
        }
    }

    async function handleSubmit(event) {
        event.preventDefault();

        if (input.id != null) {
            await axios.put(`http://localhost:3000/mahasiswa/${input.id}`, input);
        } else {
            await axios.post("http://localhost:3000/mahasiswa", input);
        }

        getData();
        setInput({ ...initialForm });
    }

    return (
        <div className="container p-4 mx-auto my-2 text-center border-2 border-teal-500 rounded-lg ">
            <form onSubmit={(event) => handleSubmit(event)} className="max-w-md mx-auto">
                <div>
                    <h1 className="mb-6 text-3xl font-bold">Form Mahasiswa</h1>
                </div>
                <label className="flex items-center justify-between max-w-md mx-auto">
                    <div className="w-[30%] text-left">Nama</div>
                    <div className="w-[5%]">:</div>
                    <input onChange={event => handleFormInput(event, 'nama')}
                        type="text"
                        name="nama"
                        placeholder="Nama"
                        value={input.nama}
                        className="w-[65%] p-2 rounded-md mb-2 border-2 border-slate-500 focus:outline-teal-500"
                    />
                </label>
                <label className="flex items-center justify-between max-w-md mx-auto">
                    <div className="w-[30%] text-left">Tempat Lahir</div>
                    <div className="w-[5%]">:</div>
                    <input onChange={event => handleFormInput(event, 'tempatLahir')}
                        type="text"
                        name="tempatLahir"
                        placeholder="Tempat Lahir"
                        value={input.tempatLahir}
                        className="w-[65%] p-2 rounded-md mb-2 border-2 border-slate-500 focus:outline-teal-500"
                    />
                </label>
                <label className="flex items-center justify-between max-w-md mx-auto">
                    <div className="w-[30%] text-left">Tanggal Lahir</div>
                    <div className="w-[5%]">:</div>
                    <input onChange={event => handleFormInput(event, 'tanggalLahir')}
                        type="date"
                        name="tanggalLahir"
                        placeholder="Tanggal Lahir"
                        value={input.tanggalLahir}
                        className="w-[65%] p-2 rounded-md mb-2 border-2 border-slate-500 focus:outline-teal-500"
                    />
                </label>
                <label className="flex items-center justify-between max-w-md mx-auto">
                    <div className="w-[30%] text-left">Alamat</div>
                    <div className="w-[5%]">:</div>
                    <textarea onChange={event => handleFormInput(event, 'alamat')}
                        name="alamat"
                        placeholder="Alamat Lengkap"
                        value={input.alamat}
                        className="w-[65%] p-2 rounded-md mb-2 border-2 border-slate-500 focus:outline-teal-500"
                    />
                </label>

                <label className="flex items-center justify-between max-w-md mx-auto">
                    <div className="w-[30%] text-left">Jenis Kelamin</div>
                    <div className="w-[5%]">:</div>
                    <div className="w-[65%] flex justify-between">
                        {genderList.map((item) =>
                            <label key={item.value}>
                                <input
                                    type="radio"
                                    name="jenisKelamin"
                                    value={item.value}
                                    checked={input.jenisKelamin == item.value}
                                    onChange={event => handleFormInput(event, 'jenisKelamin')}
                                />
                                {item.label}
                            </label>
                        )}
                    </div>
                </label>

                <label className="flex items-center justify-between max-w-md mx-auto">
                    <div className="w-[30%] text-left">Fakultas</div>
                    <div className="w-[5%]">:</div>
                    <div className="w-[65%] flex justify-between">
                        <select
                            value={input.fakultas}
                            onChange={event => handleFormInput(event, 'fakultas')}>
                            <option value="" defaultChecked>- Pilih Fakultas-</option>
                            <option value="Teknik">Teknik</option>
                            <option value="Ekonomi">Ekonomi</option>
                            <option value="MIPA">MIPA</option>
                        </select>
                    </div>
                </label>

                <label className="flex items-center justify-between max-w-md mx-auto">
                    <div className="w-[30%] text-left">Beasiswa</div>
                    <div className="w-[5%]">:</div>
                    <div className="w-[65%] flex justify-between">
                        {
                            beasiswaList.map((item) =>
                                <label key={item}>
                                    <input
                                        type="checkbox"
                                        name="beasiswa"
                                        value={item}
                                        checked={input.beasiswa.indexOf(item) !== -1}
                                        onChange={event => handleFormInput(event, 'beasiswa', 'checkbox')}
                                    />
                                    {item}
                                </label>
                            )
                        }
                    </div>
                </label>


                <button className="p-2 mt-4 font-bold bg-teal-500 rounded-lg hover:opacity-80">Submit</button>
            </form>

            <div className="max-w-screen-xl mx-auto mt-12">
                <table className="mx-auto text-sm text-gray-500">
                    <thead className="text-xs text-center text-gray-700 uppercase bg-teal-500">
                        <tr>
                            <th className="px-4 py-3">Nama</th>
                            <th className="px-4 py-3">Tempat Lahir</th>
                            <th className="px-4 py-3">Tanggal Lahir</th>
                            <th className="px-4 py-3">Alamat</th>
                            <th className="px-4 py-3">Jenis Kelamin</th>
                            <th className="px-4 py-3">Fakultas</th>
                            <th className="px-4 py-3">Beasiswa</th>
                            <th className="px-4 py-3">Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        {allData.map((item) => (
                            <tr key={item.id} className="border-b odd:bg-white even:bg-gray-100">
                                <td className="px-2 text-left">{item.nama}</td>
                                <td className="text-center">{item.tempatLahir}</td>
                                <td className="text-center">{item.tanggalLahir}</td>
                                <td>{item.alamat}</td>
                                <td className="text-center">{item.jenisKelamin}</td>
                                <td className="text-center">{item.fakultas}</td>
                                <td className="text-center">{item.beasiswa.join(", ")}</td>
                                <td className="flex justify-center px-2 mx-auto text-center gap-x-2">
                                    <button
                                        onClick={() => handleEdit(item)}
                                        className="px-3 py-2 text-xs font-medium text-white bg-blue-700 rounded-lg hover:opacity-80"
                                    >Edit
                                    </button>
                                    <button
                                        onClick={() => handleDelete(item.id)}
                                        className="px-3 py-2 text-xs font-medium text-white bg-red-700 rounded-lg hover:opacity-80"
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