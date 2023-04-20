import React from "react"

export default function Patient({name, id, deceased, sideEffects}){
    return(
        <tr>
            <td>{deceased ? "NO" : "YES"}</td>
            <td>{id}</td>
            <td>{name}</td>
            <td>{sideEffects}</td>
        </tr>
    )
}