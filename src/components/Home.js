import React from 'react'
import { Link } from 'react-router-dom'

const Home = ({entries}) => {
    console.log('entries', entries)
    return (
        <>
            <h1>Home</h1>
            <Link to='/category'>choose a category</Link>

            {entries && entries.map((entry, index) => {
                return (
                    <div key={index}>
                        <p>{entry.category}</p>
                        <p>{entry.entry}</p>
                    </div>
                )
            })}
        </>
    )
}

export default Home