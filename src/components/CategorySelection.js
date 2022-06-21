import React from 'react'
import { Link } from 'react-router-dom'

const CategorySelection = ({categories}) => {
    return (
        <>
        <h2>categories:</h2>
        <ul>
        {categories.map((category, index) => {
            return (<li key={index}>
            <Link to={`/entry/new/${index}`}>{category}</Link>
            </li>)
        })}
        </ul>
    </>
    )
}

export default CategorySelection