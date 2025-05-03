import Input from './Inputs';

const NewProject = () => {
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
    <div>
      <menu>
        <li><button>Cancel</button></li>
        <li><button>Save</button></li>
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