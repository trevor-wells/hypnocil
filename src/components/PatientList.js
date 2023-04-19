import React from "react"
import Patient from "./Patient"

export default function PatientList({patients}) {

    const myPatientList = patients.map(patient =>
    <Patient
      key={patient.id}
      id={patient.id}
      name={patient.name}
      deceased={patient.deceased}
      sideEffects={patient.side_effects}
    />)

    return(
      <table>
          <tbody>
            <tr>
                <th>Alive</th>
                <th>Patient ID</th>
                <th>Patient Name</th>
                <th>Noted Side Effects</th>
            </tr>
            {myPatientList}
          </tbody>
      </table>  
    )
}