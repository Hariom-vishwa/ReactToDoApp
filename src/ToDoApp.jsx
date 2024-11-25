// import { useState } from "react";

// export function ToDoApp() {
//   var [task, setTask] = useState("");
//   var [dum, setDum] = useState([]);

//   const inpVal = (event) => {
//     setTask(event.target.value);
//   };

//   const addTask = () => {
//     // setDum(dum + task);
//     console.log(dum);
//     setTask("");
//   };

//   return (
//     <>
//       <h1>To Do App using ReactJS...</h1>
//       <div className="whole">
//         <div className="cont">
//           <input
//             type="text"
//             value={task}
//             placeholder="Enter your task here..."
//             onChange={inpVal}
//           />
//           <button onClick={addTask}>
//             <i className="ri-sticky-note-add-fill"></i>
//           </button>
//         </div>
//         <div className="taskCont">{dum}</div>
//       </div>
//     </>
//   );
// }



import { useEffect, useState } from "react";

export function ToDoApp() {
    const [task, setTask] = useState("");
    const [list, setList] = useState([]);
    const [msg, setMsg] = useState("");
    const [msg1, setMsg1] = useState("List Is Empty!");

    const addTask = () => {
        if (task === "") {
            setMsg("Task cannot be empty!");
        } else {
            setList([...list, task]);
            setTask("");
            setMsg(""); // Clear the error message after successfully adding a task
        }
    };

    useEffect(() => {
        if (list.length > 0) {
            setMsg1("");
        } else {
            setMsg1("List Is Empty!");
        }
    }, [list]); // Runs only when the list changes

    const delTask = (data) => {
        const new_list = list.filter((val) => val !== data);
        setList(new_list);
        console.log(new_list);
    };

    return (
        <>
            <h3>To Do App using ReactJS...</h3>
            <hr />
            <div className="whole">
                <div className="message">
                    {msg} {msg1}
                </div>
                <div className="cont">
                    <input
                        type="text"
                        value={task}
                        placeholder="Enter your task here..."
                        onChange={(e) => setTask(e.target.value)}
                    />
                    <button onClick={addTask}>
                        <i className="ri-sticky-note-add-fill"></i>
                    </button>
                </div>
                <div>
                    {list.map((data, index) => (
                        <div className="taskCont" key={index}>
                            <div className="task">
                                {data}
                            </div>
                            <button className="delBtn" onClick={() => delTask(data)}>
                                <i className="ri-delete-back-2-fill"></i>
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}