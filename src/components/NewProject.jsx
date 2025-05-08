import { useRef } from 'react';

import Input from './Inputs';

const NewProject = ({onStartAddProject, onAdd}) => {
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  const inputsConfig = [
    {
      label: 'Title',
      ref: title,
    },
    {
      label: 'Description',
      type: 'textarea',
      ref: description,
    },
    {
      label: 'Due Date',
      type: 'date',
      ref: dueDate,
    }
  ];
  
  const handleSave = () => {
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDueDate = dueDate.current.value;

    // ... validation
    onAdd({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate,
    });

    title.current.value = '';
    description.current.value = '';
    dueDate.current.value = '';
  };

  return (
    <div className="w-[35rem] mt-16">
      <menu className="flex items-center justify-end gap-4 my-4">
        <li>
          <button onClick={onStartAddProject} className="text-stone-800 hover:text-stone-950">Cancel</button>
        </li>
        <li>
          <button onClick={handleSave} className="bg-stone-800 text-stone-50 hover:bg-stone-950 px-6 py-2 rounded-md">Save</button>
        </li>
      </menu>
      <div>
        {inputsConfig.map((inputConfig, index) => {
          return (
            <Input key={index} ref={inputConfig.ref} inputType={inputConfig?.type} label={inputConfig.label} />
          )
        })}
      </div>
    </div>
  )
}

export default NewProject;