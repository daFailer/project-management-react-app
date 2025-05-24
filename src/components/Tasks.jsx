import NewTask from './NewTask';

const Tasks = ({ onAdd, onDelete, tasks }) => {
  console.log(tasks)
  
  return (
    <section>
      <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
      <NewTask onAdd={onAdd} />

      {tasks.length > 0 ? <ul>
        {tasks.map((task) => {
          console.log(task)
          return (
            <li key={`task-${task.id}`}>
              {task.text}
            </li>
          )
        })}
      </ul> : <p className="text-stone-800 my-4">This project does not have any tasks.</p>
      }
      
    </section>
  )
}

export default Tasks;