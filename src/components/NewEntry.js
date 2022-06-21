import React, { useState, useEffect } from 'react'
import {useParams} from 'react-router-dom'
import EntryForm from './EntryForm'

const NewEntry = ({categories, addEntryToJournal}) => {
    const params = useParams()
    const id = params.id
    const category = categories[id]
    const [errorMsg, setErrorMsg] = useState(null)

    useEffect(() => {
        category ? setErrorMsg(null) : setErrorMsg("Category not found.") 
    },[category, categories])

    return (
        <>
        <h1>New {category} Entry </h1>
        {errorMsg ? <p>{errorMsg}</p> : <EntryForm category={category} addEntryToJournal={addEntryToJournal}/>}
 
        </>

    )
}

export default NewEntry