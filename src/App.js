import './App.css'
import Header from './components/Header'
import NewPatientForm from './components/NewPatientForm'
import PatientList from './components/PatientList'
import React, {useState, useEffect} from "react"

//2. Create a new patient with a given side effect. This patient should persist in your backend.

//3. You should be able to the table by typing the search box.
//The filter should work on both the name and the side effects.

//4. Clicking the delete button should remove the patient from the page.
//This should also remove the patient from the backend.

//5. Create some visual indicator of whether a patient is alive or deceased.

export default function App() {

  const [search, setSearch] = useState("")
  const [patients, setPatients] = useState([])

  useEffect(() => {
    fetch("http://localhost:3000/patients")
    .then(response => response.json())
    .then(data => setPatients(data))
    }, []
  )

  return (
    <div className="root">
      <Header
        search={search}
        setSearch={setSearch}
      />
      <div className="content">
        <NewPatientForm setPatients={setPatients}/>
        <PatientList patients={patients}/>
      </div>
    </div>
  )
}