import React from "react";

export default class FormClass extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            nama: '', //text
            tempatLahir: '', //text
            tanggalLahir: '', //date
            alamat: '', //textarea
            jenisKelamin: '', //radio
            fakultas: '', //select
            beasiswa: [], //checkboxes
        }

        this.handleFormInput = this.handleFormInput.bind(this);
        this.handleCheckbox = this.handleCheckbox.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.genderList = [
            { value: 'L', label: 'Laki - laki' },
            { value: 'P', label: 'Perempuan' },
        ]

        this.beasiswaList = [
            'Bidikmisi', 'KSE', 'LPDP',
        ]
    }

    handleFormInput = (event, propName) => {
        this.setState({ ...this.state, [propName]: event.target.value })
    }

    handleCheckbox = (event, propName) => {
        if (event.target.checked) {
            let array = this.state.beasiswa
            array.push(event.target.value)
            this.setState({ ...this.state, [propName]: array })
        } else {
            let array = this.state.beasiswa
            let index = array.indexOf(event.target.value);
            if (index !== -1) {
                array.splice(index, 1);
            }
            this.setState({ ...this.state, [propName]: array })
        }
    }

    handleSubmit = (event) => {
        event.preventDefault()
        console.log(this.state)
        this.setState({
            nama: '', //text
            tempatLahir: '', //text
            tanggalLahir: '', //date
            alamat: '', //textarea
            jenisKelamin: '', //radio
            fakultas: '', //select
            beasiswa: [], //checkboxes
        })
    }

    render() {
        return (
            <div className="container my-2 mx-auto p-4 rounded-lg text-center border-2 border-teal-500" >
                <form onSubmit={(event) => this.handleSubmit(event)} className="max-w-md mx-auto">
                    <div>
                        <h1 className="font-bold text-3xl mb-6">Form Input Class</h1>
                        {/* <div className="my-2">{JSON.stringify(contactInfo)}</div> */}
                    </div>
                    <label className="flex justify-between max-w-md mx-auto items-center">
                        <div className="w-[30%] text-left">Nama</div>
                        <div className="w-[5%]">:</div>
                        <input onChange={event => this.handleFormInput(event, 'nama')}
                            type="text"
                            name="nama"
                            placeholder="Nama"
                            value={this.state.nama}
                            className="w-[65%] p-2 rounded-md mb-2 border-2 border-slate-500 focus:outline-teal-500"
                        />
                    </label>
                    <label className="flex justify-between max-w-md mx-auto items-center">
                        <div className="w-[30%] text-left">Tempat Lahir</div>
                        <div className="w-[5%]">:</div>
                        <input onChange={event => this.handleFormInput(event, 'tempatLahir')}
                            type="text"
                            name="tempatLahir"
                            placeholder="Tempat Lahir"
                            value={this.state.tempatLahir}
                            className="w-[65%] p-2 rounded-md mb-2 border-2 border-slate-500 focus:outline-teal-500"
                        />
                    </label>
                    <label className="flex justify-between max-w-md mx-auto items-center">
                        <div className="w-[30%] text-left">Tanggal Lahir</div>
                        <div className="w-[5%]">:</div>
                        <input onChange={event => this.handleFormInput(event, 'tanggalLahir')}
                            type="date"
                            name="tanggalLahir"
                            placeholder="Tanggal Lahir"
                            value={this.state.tanggalLahir}
                            className="w-[65%] p-2 rounded-md mb-2 border-2 border-slate-500 focus:outline-teal-500"
                        />
                    </label>
                    <label className="flex justify-between max-w-md mx-auto items-center">
                        <div className="w-[30%] text-left">Alamat</div>
                        <div className="w-[5%]">:</div>
                        <textarea onChange={event => this.handleFormInput(event, 'alamat')}
                            name="alamat"
                            placeholder="Alamat Lengkap"
                            value={this.state.alamat}
                            className="w-[65%] p-2 rounded-md mb-2 border-2 border-slate-500 focus:outline-teal-500"
                        />
                    </label>

                    <label className="flex justify-between max-w-md mx-auto items-center">
                        <div className="w-[30%] text-left">Jenis Kelamin</div>
                        <div className="w-[5%]">:</div>
                        <div className="w-[65%] flex justify-between">
                            {this.genderList.map((item) =>
                                <label key={item.value}>
                                    <input
                                        type="radio"
                                        name="jenisKelamin"
                                        value={item.value}
                                        onChange={event => this.handleFormInput(event, 'jenisKelamin')}
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
                            <select onChange={event => this.handleFormInput(event, 'fakultas')}>
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
                                this.beasiswaList.map((item) =>
                                    <label key={item}>
                                        <input
                                            type="checkbox"
                                            name="beasiswa"
                                            value={item}
                                            onChange={event => this.handleCheckbox(event, 'beasiswa', 'checkbox')}
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
                    <div>Nama : {this.state.nama}</div>
                    <div>Tempat Lahir : {this.state.tempatLahir}</div>
                    <div>Tanggal Lahir : {this.state.tanggalLahir}</div>
                    <div>Alamat : {this.state.alamat}</div>
                    <div>Jenis Kelamin: {this.state.jenisKelamin}</div>
                    <div>Fakultas: {this.state.fakultas}</div>
                    <div>Beasiswa: {this.state.beasiswa.toString() + ","}</div>
                </div>
            </div>
        );
    }
}