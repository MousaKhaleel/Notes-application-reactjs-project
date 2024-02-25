import { MdDelete } from 'react-icons/md';
import { FaClock } from "react-icons/fa";
import { useState } from 'react';

function Note({ note, onDelete, onReminder, setReminders }) {
    const [s, setS] = useState(note.title);
    const [selectedColor, setSelectedColor] = useState('white');


  
    function handleShowBody() {
      if (s === note.title) {
        setS(note.body);
      } else {
        setS(note.title);
      }
    }
  
    function handleColorChange(e) {
      setSelectedColor(e.target.value);
    }
  
    function handleDelete() {
      onDelete(note.id);
    }

    function handleSetReminder(){
      onReminder(note.id);
    }
  
    return (
      <div className='note' style={{ backgroundColor: selectedColor }}>
        <div className='noteText' onClick={handleShowBody}>
          <h4>{s}</h4>
        </div>
        <div className='controles'>
          <p>
            <small>{note.date}</small>
          </p>
          <select value={selectedColor} onChange={handleColorChange}>
            <option value='white'>White</option>
            <option value='rgb(243, 159, 118)'>Peach</option>
            <option value='rgb(255, 248, 184)'>Sand</option>
            <option value='rgb(226, 246, 211)'>Mint</option>
          </select>
          <button onClick={handleSetReminder}>
          <FaClock />
        </button>
          <button onClick={handleDelete}>
            <MdDelete />
          </button>
        </div>
      </div>
    );
  }

  export default Note;