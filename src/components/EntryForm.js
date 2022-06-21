import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const EntryForm = ({addEntryToJournal, category}) => {
    const navigate = useNavigate()
    const [entry, setEntry] = useState("")

  const onTextChange = (event) => {
    setEntry(event.target.value)
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (entry && entry.length > 0) {
        console.log("category", category)
        addEntryToJournal({category, entry})
        navigate('/')
    }


    
  };
  return (
    <div>
      <form onSubmit={handleSubmit} >
        <div>
          <textarea
            name="content"
            id="content"
            cols="30"
            rows="10"
            onChange={onTextChange}
          ></textarea>
        </div>
        <div>
          <input type="submit" value="post" />
        </div>
      </form>
    </div>
  );
};

export default EntryForm;
