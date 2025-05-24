import { useState } from 'react';

const NewTask = ({ onAdd }) => {
  // const taskTitle = useRef();

  // const handleTaskSave = () => {
  //   console.log(taskTitle.current.value)
  // }

  const [enteredTask, setEnteredTask] = useState();

  const handleChange = (e) => {
    setEnteredTask(e.target.value)
  }

  const handleClick = () => {
    onAdd(enteredTask);
    setEnteredTask('');
  }

  return (
    <div className="flex item-center gap-4">
      <input type="text" className="w-64 px-2 py-1 rounded-sm bg-stone-200" onChange={handleChange} value={enteredTask} />
      <button className="text-stone-700 hover:text-stone-950" onClick={handleClick}>Add Task</button>
    </div>
  )
}

export default NewTask;