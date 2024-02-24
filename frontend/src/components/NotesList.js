import Note from "./Note";
import AddNewNote from "./AddNewNote";

function NotesList({ notes, onDelete, onAdd }) {
  return (
    <div className='noteGroup'>
      {notes.map((note) => (
        <Note key={note.id} note={note} onDelete={onDelete} />
      ))}
      <AddNewNote onAdd={onAdd} />
    </div>
  );
}

export default NotesList;