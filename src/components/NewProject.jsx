import Input from './Inputs';

const NewProject = ({toggleAddProjectView}) => {
  const inputsConfig = [
    {
      label: 'Title',
    },
    {
      label: 'Description',
      type: 'textarea',
    },
    {
      label: 'Due Date',
      type: 'date',
    }
  ]
  return (
    <div className="w-[35rem] mt-16">
      <menu className="flex items-center justify-end gap-4 my-4">
        <li>
          <button onClick={() => toggleAddProjectView(false)} className="text-stone-800 hover:text-stone-950">Cancel</button>
        </li>
        <li>
          <button className="bg-stone-800 text-stone-50 hover:bg-stone-950 px-6 py-2 rounded-md">Save</button>
        </li>
      </menu>
      <div>
        {inputsConfig.map((inputConfig, index) => {
          return (
            <Input key={index} inputType={inputConfig?.type} label={inputConfig.label} />
          )
        })}
      </div>
    </div>
  )
}

export default NewProject;