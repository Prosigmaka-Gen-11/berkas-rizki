import useFormInput from "./useFormInput";

export default function FormFunction() {
    const genderList = [
        { value: 'L', label: 'Laki - laki' },
        { value: 'P', label: 'Perempuan' },
    ]

    const beasiswaList = [
        'Bidikmisi', 'KSE', 'LPDP',
    ]

    const { formInput, setFormInput, handleFormInput, handleCheckbox } = useFormInput({
        nama: '', //text
        tempatLahir: '', //text
        tanggalLahir: '', //date
        alamat: '', //textarea
        jenisKelamin: '', //radio
        fakultas: '', //select
        beasiswa: [], //checkboxes
    })


    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(formInput)
        setFormInput({
            nama: '', //text
            tempatLahir: '', //text
            tanggalLahir: '', //date
            alamat: '', //textarea
            jenisKelamin: '', //radio
            fakultas: '', //select
            beasiswa: [], //checkboxes
        })
    }

    return (
        <div className="container my-2 mx-auto p-4 rounded-lg text-center border-2 border-teal-500">
            <form onSubmit={(event) => handleSubmit(event)} className="max-w-md mx-auto">
                <div>
                    <h1 className="font-bold text-3xl mb-6">Form Input Function</h1>
                    {/* <div className="my-2">{JSON.stringify(contactInfo)}</div> */}
                </div>
                <label className="flex justify-between max-w-md mx-auto items-center">
                    <div className="w-[30%] text-left">Nama</div>
                    <div className="w-[5%]">:</div>
                    <input onChange={event => handleFormInput(event, 'nama')}
                        type="text"
                        name="nama"
                        placeholder="Nama"
                        value={formInput.nama}
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
                        value={formInput.tempatLahir}
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
                        value={formInput.tanggalLahir}
                        className="w-[65%] p-2 rounded-md mb-2 border-2 border-slate-500 focus:outline-teal-500"
                    />
                </label>
                <label className="flex justify-between max-w-md mx-auto items-center">
                    <div className="w-[30%] text-left">Alamat</div>
                    <div className="w-[5%]">:</div>
                    <textarea onChange={event => handleFormInput(event, 'alamat')}
                        name="alamat"
                        placeholder="Alamat Lengkap"
                        value={formInput.alamat}
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
                        <select onChange={event => handleFormInput(event, 'fakultas')}>
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
                                        onChange={event => handleCheckbox(event, 'beasiswa', 'checkbox')}
                                    />
                                    {item}
                                </label>
                            )
                        }
                    </div>
                </label>

                <div className="right-0">
                    <button className="p-2 mt-4 bg-teal-500 hover:opacity-80 rounded-lg font-bold">Submit Contact</button>
                </div>
            </form>

            <div className="mt-8 text-left max-w-md mx-auto">
                <div>Nama : {formInput.nama}</div>
                <div>Tempat Lahir : {formInput.tempatLahir}</div>
                <div>Tanggal Lahir : {formInput.tanggalLahir}</div>
                <div>Alamat : {formInput.alamat}</div>
                <div>Jenis Kelamin: {formInput.jenisKelamin}</div>
                <div>Fakultas: {formInput.fakultas}</div>
                <div>Beasiswa: {formInput.beasiswa.toString() + ","}</div>
            </div>
        </div>
    );
}