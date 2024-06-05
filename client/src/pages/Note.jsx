import { useQuery } from '@apollo/client';

import NoteList from '../components/NoteList';
import NoteForm from '../components/NoteForm';

import { QUERY_NOTES } from '../utils/queries'; 

const Notes = () => {
  const { loading, data } = useQuery(QUERY_NOTES);
  const notes = data?.notes || [];

  return (
    <main>
      <div className="flex-row justify-center">
        <div
          className="notes-form col-12 col-md-10 mb-3 p-3"
    
        >
          <NoteForm />
        </div>
        <div className="col-12 col-md-8 mb-3">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <NoteList
              notes={notes}
              title="YOUR NOTES"
            />
          )}
        </div>
      </div>
    </main>
  );
};

export default Notes;