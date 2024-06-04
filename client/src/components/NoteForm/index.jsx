import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';

import { ADD_NOTE } from '../../utils/mutations';
import { QUERY_NOTES, QUERY_ME } from '../../utils/queries';

import Auth from '../../utils/auth';

const NoteForm = () => {
  const [noteText, setNoteText] = useState('');
  const [characterCount, setCharacterCount] = useState(0);
  const [addNote, { error }] = useMutation(ADD_NOTE, {
    refetchQueries: [
      { query: QUERY_NOTES },
      { query: QUERY_ME }
    ]
  });

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      await addNote({
        variables: {
          noteContent: noteText,
        },
      });
      setNoteText('');
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (event) => {
    const { value } = event.target;
    setNoteText(value);
    setCharacterCount(value.length);
  };

  return (
    <div>
      <h3>YOUR NOTES</h3>
      {Auth.loggedIn() ? (
        <>
          <p className={`m-0 ${characterCount === 10000 || error ? 'text-danger' : ''}`}>
          </p>
          <form onSubmit={handleFormSubmit}>
            <textarea
              name="noteText"
              placeholder="Here's a new note..."
              value={noteText}
              onChange={handleChange}
              style={{ lineHeight: '1.5', resize: 'vertical' }}
            />
            <button type="submit">Save</button>
            {error && (
              <div className="bg-danger text-white p-3">{error.message}</div>
            )}
          </form>
        </>
      ) : (
        <p>
          You need to be logged in to create a note. Please{' '}
          <Link to="/login">login</Link> or <Link to="/signup">signup.</Link>
        </p>
      )}
    </div>
  );
};

export default NoteForm;









