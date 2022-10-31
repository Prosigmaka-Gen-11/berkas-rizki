import { useState, useEffect } from "react"
import { useParams, useNavigate, Link } from "react-router-dom"
import axios from "axios";

export default function MahassiwaDetail() {
    const navigate = useNavigate();
    const params = useParams()
    const [mahasiswa, setMahasiswa] = useState({})

    async function getMahasiswaDetail() {
        const mahasiswa = await axios.get("http://localhost:3000/mahasiswa/" + params.mahasiswaId);
        setMahasiswa(mahasiswa.data)
    }

    useEffect(() => {
        getMahasiswaDetail()
    }, [])

    return <>
        <div className="container my-2 mx-auto p-4 rounded-lg border-2 border-teal-500 ">
            <Link to={`/mahasiswa`}>
                <button
                    className="ml-0 mr-auto text-white bg-blue-700 hover:opacity-80 font-medium rounded-lg text-xs px-3 py-2"
                > - Kembali
                </button>
            </Link>

            <div>
                <h1 className="mt-4 text-center font-bold text-3xl mb-6">Detail Mahasiswa</h1>
            </div>

            <div className="flex justify-between max-w-md mx-auto items-center">
                <div className="w-[30%] text-left">Nama</div>
                <div className="w-[5%]">:</div>
                <div className="w-[65%] text-left">{mahasiswa.nama}</div>
            </div>
            <div className="flex justify-between max-w-md mx-auto items-center">
                <div className="w-[30%] text-left">Tempat Lahir</div>
                <div className="w-[5%]">:</div>
                <div className="w-[65%] text-left">{mahasiswa.tempatLahir}</div>
            </div>
            <div className="flex justify-between max-w-md mx-auto items-center">
                <div className="w-[30%] text-left">Tanggal Lahir</div>
                <div className="w-[5%]">:</div>
                <div className="w-[65%] text-left">{mahasiswa.tanggalLahir}</div>
            </div>
            <div className="flex justify-between max-w-md mx-auto items-center">
                <div className="w-[30%] text-left">Alamat</div>
                <div className="w-[5%]">:</div>
                <div className="w-[65%] text-left">{mahasiswa.alamat}</div>
            </div>
            <div className="flex justify-between max-w-md mx-auto items-center">
                <div className="w-[30%] text-left">Jenis Kelamin</div>
                <div className="w-[5%]">:</div>
                <div className="w-[65%] text-left">{mahasiswa.jenisKelamin}</div>
            </div>
            <div className="flex justify-between max-w-md mx-auto items-center">
                <div className="w-[30%] text-left">Fakultas</div>
                <div className="w-[5%]">:</div>
                <div className="w-[65%] text-left">{mahasiswa.fakultas}</div>
            </div>
            <div className="flex justify-between max-w-md mx-auto items-center">
                <div className="w-[30%] text-left">Beasiswa</div>
                <div className="w-[5%]">:</div>
                <div className="w-[65%] text-left">{mahasiswa.beasiswa + ', '}</div>
            </div>
        </div>
    </>
}