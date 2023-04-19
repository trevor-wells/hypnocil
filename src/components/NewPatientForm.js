import React, {useState} from "react"
import (v4 as uuid) from "uuid"

export default function NewPatientForm({setPatients}) {

    const [formData, setFormData] = useState({
        id: uuid(),
        name: "",
        sideEffects: ""
    })
    return(
        <>
            <form id="new-patient-form">
                <input
                    id="patient-name"
                    type="text"
                    placeholder="Patient Name"
                    value={formData.name}
                    onChange={handleChange}
                />
                <select
                    name="sideEffects"
                    id="side-effects"
                    form="new-patient-form"
                    value={formData.sideEffects}
                    onChange={handleChange}
                >
                    <option value="dizziness">Dizziness</option>
                    <option value="nausea">Nausea</option>
                    <option value="somnambulism">Somnambulism</option>
                    <option value="memory">Memory</option>
                    <option value="allergy">Severe Allergic Reaction</option>
                    <option value="headache">Headache</option>
                </select>
                <input
                    type="submit"
                    value="Add Patient"
                />
            </form>
        </>
    )
}