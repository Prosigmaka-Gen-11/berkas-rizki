import { useState } from "react";

export default function useFormInput(data) {
    const [formInput, setFormInput] = useState(data)

    function handleFormInput(event, propName) {
        setFormInput({ ...formInput, [propName]: event.target.value })
    }

    const handleCheckbox = (event, propName) => {
        if (event.target.checked) {
            let array = formInput.beasiswa
            array.push(event.target.value)
            setFormInput({ ...formInput, [propName]: array })
        } else {
            let array = formInput.beasiswa
            let index = array.indexOf(event.target.value);
            if (index !== -1) {
                array.splice(index, 1);
            }
            setFormInput({ ...formInput, [propName]: array })
        }
    }

    return {
        formInput,
        setFormInput,
        handleFormInput,
        handleCheckbox
    }
}