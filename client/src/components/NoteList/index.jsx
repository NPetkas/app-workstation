import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { REMOVE_NOTE } from '../../utils/mutations';
import { QUERY_NOTES } from '../../utils/queries';
import Auth from '../../utils/auth';

const NoteList = ({
  notes,
  title,
  showTitle = true,
  showUsername = true,
}) => {
  const [removeNote] = useMutation(REMOVE_NOTE);

  const handleRemoveNote = async (noteId) => {
    try {
      await removeNote({
        variables: { noteId },
        
        refetchQueries: [{ query: QUERY_NOTES }],
        context: {
          headers: {
            authorization: Auth.loggedIn() ? `Bearer ${Auth.getToken()}` : '',
          },
        },
      });
    } catch (error) {
      console.error('Error removing note:', error);
    }
  };

  if (!notes.length) {
    return <h3>No Notes Yet</h3>;
  }

  return (
    <div>
      {showTitle && <h3>{title}</h3>}
      {notes.map((note) => (
        <div key={note._id} className="card mb-3">
          <h4 className="card-header bg-primary text-light p-2 m-0">
            {showUsername ? (
              <Link
                className="text-light"
                to={`/profiles/${note.noteAuthor}`}
              >
                {note.noteAuthor} <br />
                <span style={{ fontSize: '1rem' }}>
                  note created on {note.createdAt}
                </span>
              </Link>
            ) : (
              <>
                <span style={{ fontSize: '1rem' }}>
                  note created on {note.createdAt}
                </span>
              </>
            )}
          </h4>
          <div className="card-body bg-light p-2">
            <p>{note.noteContent}</p>
          </div>
          <button onClick={() => handleRemoveNote(note._id)}>
            Remove Note
          </button>
        </div>
      ))}
    </div>
  );
};

export default NoteList;