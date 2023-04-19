import React from "react"

export default function Header({search, setSearch}) {

    function handleChange(event){
        setSearch(event.target.value)
    }
    
    return(
        <header>
            <div>
                <img
                    src="./images/hypnocil-logo.png"
                />
                <h1>Clinical Trials</h1>
            </div>
            <input
                id="search"
                type="text"
                placeholder="Search..."
                value={search}
                onChange={handleChange}
            />
        </header>
    )
}