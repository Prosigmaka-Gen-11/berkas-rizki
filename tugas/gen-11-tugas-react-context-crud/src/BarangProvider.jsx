import { createContext, useState } from "react";

export const BarangContext = createContext()

export default function BarangProvider(props) {
    const [input, setInput] = useState({
        namaBarang: '', //text
        jumlah: '', //text
        satuan: '', //select
    });
    const [allData, setAllData] = useState([]);

    return <BarangContext.Provider value={
        { input, setInput, allData, setAllData }
    }>
        {props.children}
    </BarangContext.Provider>
}