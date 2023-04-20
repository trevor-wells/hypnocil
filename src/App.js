import './App.css'
import Header from './components/Header'
import NewPatientForm from './components/NewPatientForm'
import PatientList from './components/PatientList'
import React, {useState, useEffect} from "react"

//3. You should be able to the table by typing the search box.
//The filter should work on both the name and the side effects.

//4. Clicking the delete button should remove the patient from the page.
//This should also remove the patient from the backend.

export default function App() {

  const [search, setSearch] = useState("")
  const [patients, setPatients] = useState([])

  useEffect(() => {
    fetch("http://localhost:3000/patients")
    .then(response => response.json())
    .then(data => setPatients(data))
    }, []
  )

  const patientsToDisplay = patients.filter(patient => 
    patient.name.toLowerCase().includes(search.toLowerCase()) ||
    patient.side_effects.find(effect => effect.toLowerCase().includes(search.toLowerCase()))
  )

  return (
    <div className="root">
      <Header
        search={search}
        setSearch={setSearch}
      />
      <div className="content">
        <NewPatientForm setPatients={setPatients}/>
        <PatientList patients={patientsToDisplay}/>
      </div>
    </div>
  )
}