import { useRef } from 'react';

import Modal from './Modal';
import Input from './Inputs';
import H2 from './H2';
import Paragraph from './Paragraph';

const NewProject = ({onStartAddProject, onAdd}) => {
  const modal = useRef();

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

    if (
      enteredTitle.trim() === '' ||
      enteredDescription.trim() === '' ||
      enteredDueDate.trim() === ''
    ) {
      modal.current.open();

      return;
    }

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
    <>
      <Modal ref={modal}>
        <H2>Invalid input</H2>
        <Paragraph>Oops ... looks like you forgot to enter a value.</Paragraph>
        <Paragraph>Please make sure you proide a valid value for every input field.</Paragraph>
      </Modal>
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
    </>
  )
}

export default NewProject;