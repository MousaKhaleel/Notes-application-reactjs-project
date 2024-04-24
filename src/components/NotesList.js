import Note from "./Note";
import AddNewNote from "./AddNewNote";

function NotesList({ notes, onDelete, onAdd, onReminder, setReminders }) {
  return (
    <div className='noteGroup'>
      {notes.map((note) => (
        <Note key={note.id} note={note} onDelete={onDelete} onReminder={onReminder} setReminders={setReminders} />
      ))}
      <AddNewNote onAdd={onAdd} />
    </div>
  );
}

export default NotesList;