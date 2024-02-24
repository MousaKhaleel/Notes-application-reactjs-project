import React, { useState, useEffect } from 'react';
import './App.css';
import noteStyle from './components/noteStyle.css';
import NotesList from './components/NotesList'

function App() {
  const [notes, setNotes] = useState(null);

  useEffect(() => {
    const savedNotesData = localStorage.getItem('notesData');
    if (savedNotesData) {
      const data = JSON.parse(savedNotesData);
      setNotes(data.notes);
    } else {
      const initialNotesData = {
        notes: [
          {
            title: 'test',
            body:
              'fsawfinessp rhiq rveeh ie fwheiiiiiiiiiiiiiiiii iiiiiiiiiiiiiiiiiiiiii iiiiiiiiiiiiiiiiiiiiiiiiii iiiiiiiiiipohfieeeeeeee eeeeeeeeeeeeee eeeeeeeeeeeeeeeeee eeeeeeeeeeeeeeee eeeeeeeeeeehwi hewthe eih',
            date: '11/12/2020',
            id: '1',
          },
          {
            title: 'test2',
            body: 'dhpidihihdsivi i i f ihf hfi fhiih f f hfj',
            date: '2/5/2021',
            id: '2',
          },
        ],
      };
      localStorage.setItem('notesData', JSON.stringify(initialNotesData));
      setNotes(initialNotesData.notes);
    }
  }, []);

  function handleDelete(id) {
    const updatedNotes = notes.filter((n) => n.id !== id);
    setNotes(updatedNotes);
    const updatedNotesData = {
      notes: updatedNotes,
    };
    localStorage.setItem('notesData', JSON.stringify(updatedNotesData));
  }

  function handleAdd(newNote) {
    const updatedNotes = notes ? [...notes, newNote] : [newNote];
    setNotes(updatedNotes);
    const updatedNotesData = {
      notes: updatedNotes,
    };
    localStorage.setItem('notesData', JSON.stringify(updatedNotesData));
  }

  return <div className='App'>{notes && <NotesList notes={notes} onDelete={handleDelete} onAdd={handleAdd} />}</div>;
}

export default App;