import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_NOTES, QUERY_TASKS } from "../utils/queries";

const Home = () => {
  const {
    loading: loadingTasks,
    error: errorTasks,
    data: dataTasks,
  } = useQuery(QUERY_TASKS);
  const {
    loading: loadingNotes,
    error: errorNotes,
    data: dataNotes,
  } = useQuery(QUERY_NOTES);

  if (loadingTasks || loadingNotes) return <p>Loading...</p>;
  if (errorTasks) return <p>Error fetching tasks: {errorTasks.message}</p>;
  if (errorNotes) return <p>Error fetching notes: {errorNotes.message}</p>;

  const tasks = dataTasks?.tasks || [];
  const notes = dataNotes?.notes || [];

  return (
    <div className="container">
      <h6>Let's Get To Work!</h6>
      <div className="calendar-container">
        <iframe
          className="embedded-calendar"
          src="https://calendar.google.com/calendar/embed?src=en.usa%23holiday%40group.v.calendar.google.com&ctz=America%2FLos_Angeles"
          style={{border: '1px solid black',
            borderRadius: '5px',
            boxShadow: '2px 3px 5px #000000'}}
        ></iframe>
      </div>
      <div className="calc">
      <iframe width="219" height="302" 
      src="https://calculator-1.com/outdoor/?f=666666&r=666666" 
 
      ></iframe><br />
      </div>

      <div className="google-search">
        <form
          action="https://www.google.com/search"
          method="get"
          target="_blank"
        >
          <input
            type="text"
            name="q"
            placeholder="Search Google..."
            style={{
              width: "218px",
              padding: "1px",
              borderRadius: "5px",
              border: "1px solid #ccc",
              marginBottom: "10px",
            }}
          />
          <input
            type="submit"
            value="Search"
            style={{
              padding: "1px",
              borderRadius: "5px",
              border: "1px solid #ccc",
              background: "#5a7d50",
              color: "white",
            }}
          />
        </form>
      </div>

      <div className="container-items">
        <div className="task-section">
          <h5>Your Tasks</h5>
          {tasks.length ? (
            tasks.map((task) => (
              <div key={task._id} className="card mb-2">
                <h4 className="card-header bg-primary text-light p-1 m-0">
                  <Link className="text-light" to={`/task/${task._id}`}>
                    {task.taskAuthor} <br />
                    <span style={{ fontSize: "1rem" }}>
                      task created on {task.createdAt}
                    </span>
                  </Link>
                </h4>
                <div className="card-body bg-light p-2">
                  <p>{task.taskText}</p>
                </div>
                <Link
                  className="btn btn-primary btn-block btn-squared"
                  to={`/task/${task._id}`}
                >
                  Comments
                </Link>
              </div>
            ))
          ) : (
            <h5>No Tasks Yet</h5>
          )}
        </div>
      </div>

      <div className="notes-section">
        <div>
          <h5>Your Notes</h5>
          {notes.length ? (
            notes.map((note) => (
              <div key={note._id} className="card mb-3">
                <h4 className="card-header bg-primary text-light p-1 m-0">
                  <Link
                    className="text-light"
                    to={`/profiles/${note.noteAuthor}`}
                  >
                    {note.noteAuthor} <br />
                    <span style={{ fontSize: "1rem" }}>
                      note created on {note.createdAt}
                    </span>
                  </Link>
                </h4>
                <div className="card-body bg-light p-2">
                  <p>{note.noteContent}</p>
                </div>
              </div>
            ))
          ) : (
            <h5>No Notes Yet</h5>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;