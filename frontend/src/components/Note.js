import { MdDelete } from 'react-icons/md';
import { useState } from 'react';

function Note({ note, onDelete }) {
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
            <option value='red'>Red</option>
            <option value='green'>Green</option>
            <option value='blue'>Blue</option>
          </select>
          <button onClick={handleDelete}>
            <MdDelete />
          </button>
        </div>
      </div>
    );
  }

  export default Note;