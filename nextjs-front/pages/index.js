import { useState, useContext, useEffect } from "react";
import Layout from "../components/Layout";
import { get, post, put } from "../utils/utils";
import { StateContext } from "../context/Context";

const Index = (props) => {
  const { state, dispatch } = useContext(StateContext);
  const [task, setTask] = useState("");
  const [editToggle, setEdit] = useState(false);
  const [selected, setSelected] = useState(null);
  useEffect(() => {
    dispatch({ type: "INITIAL_STATE", payload: props.tasks });
  }, []);
  const submit = (e) => {
    e.preventDefault();
    if (editToggle) {
      put(`/task/${selected.id}`, {
        task_name: task,
        task_status: selected.task_status,
      }).then((res) => {
        dispatch({ type: "UPDATE_TODO", payload: res.data });
        setTask("");
        setSelected("");
        setEdit(false);
      });
    } else {
      post("/tasks", { task_name: task, task_status: false }).then((res) => {
        dispatch({ type: "ADD_TODO", payload: res.data });
        setTask("");
      });
    }
  };
  const rowClass = (task) => {
    return selected && task.id === selected.id
      ? "table-info"
      : task.task_status
      ? "table-success"
      : "table-secondary";
  };
  const textStyle = (task) => {
    return task.task_status ? "strike" : "basic";
  };
  const editTask = (task) => {
    setTask(task.task_name);
    setSelected(task);
    setEdit(true);
  };
  const editOff = () => {
    setTask("");
    setSelected(null);
    setEdit(false);
  };
  const deleteTask = (task) => {
    dispatch({ type: "DELETE_TODO", payload: task });
    editOff();
  };
  return (
    <Layout>
      <style jsx>
        {`
          .input-container {
            display: grid;
            grid-template-columns: 1fr 100px;
            width: 485px;
            margin-right: 1%;
            grid-gap: 15px;
            padding: 15px 0px 30px;
          }
          .strike {
            text-decoration: line-through;
          }
          .basic {
            text-decoration: none;
          }
          .center {
            text-align: center;
          }
          .btn-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
          }
          .wdth {
            width: 75px;
          }
        `}
      </style>
      <div>
        <form className="input-container" onSubmit={submit}>
          <input
            width="485px"
            onChange={(e) => setTask(e.target.value)}
            value={task}
            className="form-control"
            placeholder="Enter a task for today"
          />
          <button
            disabled={task.length === 0}
            className="btn btn-primary"
            type="submit"
          >
            {editToggle ? "Update" : "Add Task"}
          </button>
        </form>
      </div>
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col">Description</th>
            <th scope="col" className="center">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {state.tasks.length > 0 &&
            state.tasks.map((task) => (
              <tr key={task.id} className={rowClass(task)}>
                <th scope="row">
                  <input
                    type="checkbox"
                    checked={task.task_status}
                    onChange={() =>
                      dispatch({ type: "DONE_TODO", payload: task })
                    }
                  />
                </th>
                <td className={textStyle(task)}>{task.task_name}</td>
                <td className="center">
                  <div className="btn-grid">
                    {editToggle && selected.id === task.id ? (
                      <button
                        className="btn btn-warning wdth"
                        onClick={() => editOff()}
                      >
                        Cancel{" "}
                      </button>
                    ) : (
                      <button
                        className="btn btn-warning wdth"
                        onClick={() => editTask(task)}
                      >
                        Edit{" "}
                      </button>
                    )}

                    <button
                      className="btn btn-danger wdth"
                      onClick={() => deleteTask(task)}
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </Layout>
  );
};

Index.getInitialProps = async () => {
  const response = await get("/tasks");
  const tasks = await response.data;
  return { tasks };
};

export default Index;
