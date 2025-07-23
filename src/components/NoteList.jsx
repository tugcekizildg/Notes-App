const NoteList = ({ notes }) => {
  if (notes.length === 0) {
    return <p className='text-center text-gray-500'>No Notes Yet</p>;
  }
  return (
    <div className='space-y-4'>
      {notes.map((note) => (
        <div
          key={note.id}
          className='bg-white p-4 rounded-lg shadow-md border-l-4'>
          <h3 className='text-lg font-bold'>{note.title}</h3>
          <p className='text-sm text-gray-600'>
            <strong>Category:</strong>
            {note.category}
          </p>
          <p className='text-sm text-gray-600'>
            <strong>Priority:</strong>
            {note.priority}
          </p>
          <p className='mt-2'>{note.description}</p>
        </div>
      ))}
    </div>
  );
};

export default NoteList;
