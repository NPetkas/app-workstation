import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_NOTES, QUERY_TASKS } from "../utils/queries";
import Calendar from "../components/Calendar";
import Weather from "../components/Weather";

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
      <h1>Let's Get To Work!</h1>

      <div className="components">
        <Calendar />
        <Weather />
      </div>
      <div>
        <h3>Your Tasks</h3>
        {tasks.length ? (
          tasks.map((task) => (
            <div key={task._id} className="card mb-3">
              <h4 className="card-header bg-primary text-light p-2 m-0">
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
          <h3>No Tasks Yet</h3>
        )}
      </div>

      <div>
        <h3>Your Notes</h3>
        {notes.length ? (
          notes.map((note) => (
            <div key={note._id} className="card mb-3">
              <h4 className="card-header bg-primary text-light p-2 m-0">
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
          <h3>No Notes Yet</h3>
        )}
      </div>
    </div>
  );
};

export default Home;