function App() {
  const projects = [
    {
      id: 1,
      title: 'First Project',
      description: 'Description text for first project',
      dueDate: '1496275200000',
      tasks: [
        {
          id: 1,
          completed: true,
          text: 'Learn the basics'
        },
        {
          id: 2,
          completed: false,
          text: 'Create project app'
        }
      ]
    },
    {
      id: 2,
      title: 'Second Project',
      description: 'A more complex project with multiple tasks',
      dueDate: '1496361600000',
      tasks: [
        {
          id: 1,
          completed: false,
          text: 'Design database schema'
        },
        {
          id: 2,
          completed: false,
          text: 'Implement API endpoints'
        },
        {
          id: 3,
          completed: false,
          text: 'Write documentation'
        }
      ]
    },
    {
      id: 3,
      title: 'Empty Project',
      description: 'A project with no tasks yet',
      dueDate: '1496448000000',
      tasks: []
    },
  ]

  return (
    <>
      <h1 className="my-8 text-center text-5xl font-bold">Hello World</h1>

    </>
  );
}

export default App;
