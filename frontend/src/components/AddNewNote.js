import { useState } from "react";
import { IoMdAdd } from 'react-icons/io';

function AddNewNote({ onAdd }) {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
  
    function handleTitleChange(e) {
      setTitle(e.target.value);
    }
  
    function handleBodyChange(e) {
      setBody(e.target.value);
    }
  
    function handleAdd(e) {
      e.preventDefault();
      const newNoteObject = {
        title: title,
        body: body,
        date: new Date().toLocaleDateString(),
        id: Date.now().toString(),
      };
      onAdd(newNoteObject);
      setTitle('');
      setBody('');
    }
  
    return (
      <div className='addNote'>
        <div className='addHere'>
          <form>
            <input type='text' placeholder='title' value={title} onChange={handleTitleChange} />
            <textarea rows={8} placeholder='type your note..' value={body} onChange={handleBodyChange}></textarea>
          </form>
        </div>
        <button onClick={handleAdd}>
          <IoMdAdd />
        </button>
      </div>
    );
  }

  export default AddNewNote;