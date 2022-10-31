import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";

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

export default function MahasiswaEdit() {
    const navigate = useNavigate();
    const params = useParams();

    const [input, setInput] = useState({
        ...initialForm,
    });

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
        await axios.put(`http://localhost:3000/mahasiswa/${input.id}`, input);
        navigate("/mahasiswa");
    }

    async function getMahasiswaDetail() {
        const mahasiswa = await axios.get("http://localhost:3000/mahasiswa/" + params.mahasiswaId);
        setInput(mahasiswa.data)
    }

    useEffect(() => {
        getMahasiswaDetail()
    }, []);

    return (
        <div className="container my-2 mx-auto p-4 rounded-lg border-2 border-teal-500 ">
            <Link to={`/mahasiswa`}>
                <button
                    className="ml-0 mr-auto text-white bg-blue-700 hover:opacity-80 font-medium rounded-lg text-xs px-3 py-2"
                > - Kembali
                </button>
            </Link>
            <form onSubmit={(event) => handleSubmit(event)} className="max-w-md mx-auto">
                <div>
                    <h1 className="font-bold text-3xl mb-6 text-center">Form Mahasiswa</h1>
                </div>
                <label className="flex justify-between max-w-md mx-auto items-center">
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
                <label className="flex justify-between max-w-md mx-auto items-center">
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
                <label className="flex justify-between max-w-md mx-auto items-center">
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
                <label className="flex justify-between max-w-md mx-auto items-center">
                    <div className="w-[30%] text-left">Alamat</div>
                    <div className="w-[5%]">:</div>
                    <textarea onChange={event => handleFormInput(event, 'alamat')}
                        name="alamat"
                        placeholder="Alamat Lengkap"
                        value={input.alamat}
                        className="w-[65%] p-2 rounded-md mb-2 border-2 border-slate-500 focus:outline-teal-500"
                    />
                </label>

                <label className="flex justify-between max-w-md mx-auto items-center">
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

                <label className="flex justify-between max-w-md mx-auto items-center">
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

                <label className="flex justify-between max-w-md mx-auto items-center">
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


                <button className="p-2 mt-4 bg-teal-500 hover:opacity-80 rounded-lg font-bold">Submit</button>
            </form>

        </div >
    );
}