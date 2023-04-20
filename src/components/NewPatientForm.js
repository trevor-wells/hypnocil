import React, {useState} from "react"

export default function NewPatientForm({setPatients}) {

    const [formData, setFormData] = useState({
        name: "",
        side_effects: ""
    })

    function handleChange(event){
        const {name, value} = event.target

        setFormData(prevData => ({
                ...prevData,
                [name]: value
            })
        )
    }

    console.log(formData)

    function handleSubmit(event){
        event.preventDefault()

        fetch("http://localhost:3000/patients" , {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(formData)
        })
        .then(response => response.json())
        .then(data => setPatients(prevPatients => (
            [
                ...prevPatients,
                data
            ]
        )))
    }

    return(
        <>
            <form
                id="new-patient-form"
                onSubmit={handleSubmit}
            >
                <input
                    id="patient-name"
                    type="text"
                    placeholder="Patient Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                />
                <select
                    name="side_effects"
                    id="side-effects"
                    form="new-patient-form"
                    value={formData.side_effects}
                    onChange={handleChange}
                >
                    <option value="Dizziness">Dizziness</option>
                    <option value="Nausea">Nausea</option>
                    <option value="Somnambulism">Somnambulism</option>
                    <option value="Loss of Memory">Loss of Memory</option>
                    <option value="Severe Allergic Reaction">Severe Allergic Reaction</option>
                    <option value="Headache">Headache</option>
                </select>
                <input
                    type="submit"
                    value="Add Patient"
                />
            </form>
        </>
    )
}