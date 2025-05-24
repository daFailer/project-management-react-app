import { useState } from "react";
import ProjectsSidebar from './components/ProjectsSidebar';
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import SelectedProject from "./components/SelectedProject";

function App() {
  const [taskIdCounter, setTaskIdCounter] = useState(0);
  const [projectIdCounter, setProjectIdCounter] = useState(0);
  const [projectState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: [
      {
        "title": "Hello World",
        "description": "First Project",
        "dueDate": "2005-01-01",
        "id": 0
      },
      {
        "title": "Lorem ipsum",
        "description": "Commodo tempor ullamco dolor in consequat cillum dolor. Veniam velit exercitation aliquip ex magna aliqua nulla reprehenderit tempor amet fugiat. Ea qui eiusmod irure dolor ad ut velit magna voluptate qui aliquip. Et elit dolore et officia cillum do ullamco aliquip commodo magna aute aliquip. Eu non qui dolore cupidatat adipisicing veniam minim velit minim voluptate in eiusmod incididunt ea aliquip.\n\nOccaecat Lorem qui adipisicing fugiat deserunt duis Lorem voluptate quis nostrud in sit sint. Amet do nisi esse qui do. Commodo sit eiusmod laboris Lorem adipisicing velit in laboris in. Eu dolore cupidatat ipsum pariatur et proident esse elit.\n\nLorem minim excepteur est commodo irure. Do adipisicing deserunt deserunt occaecat mollit ipsum occaecat veniam. Cillum irure officia velit consequat id ea dolor nulla anim excepteur ipsum. Eiusmod enim est fugiat voluptate cupidatat elit mollit amet labore esse duis dolore. Laborum est eu ex nulla nostrud ipsum amet sit exercitation ea. Duis consectetur commodo cupidatat non. Deserunt excepteur dolor nostrud mollit enim ullamco eiusmod dolore elit culpa voluptate dolore dolor ullamco.\n\nDeserunt ex ullamco reprehenderit. Ad aute aute eu. Eiusmod nulla ex ad ipsum culpa cupidatat velit adipisicing laborum anim. Aliquip veniam aute esse consequat ea et incididunt velit irure.\n\nOccaecat occaecat consequat incididunt proident ut reprehenderit pariatur voluptate fugiat nulla culpa labore minim aute. Nostrud nulla enim mollit eiusmod do pariatur in eu reprehenderit. Aliqua consequat esse eu ut ipsum minim dolore. Nulla non ut nulla. Nulla eiusmod magna minim dolor ea labore aliqua do. Cupidatat nisi veniam laborum dolore nostrud. Aliquip ipsum sit sit.",
        "dueDate": "2015-10-01",
        "id": 2
      }
    ],
    tasks: [
      {
        "text": "Task No. 1",
        "projectId": 2,
        "id": 0
      },
      {
        "text": "Second Task",
        "projectId": 2,
        "id": 2
      }
    ],
  });

  const handleStartAddProject = (showForm) => {
    setProjectsState((prevState) => {
      const newState = {...prevState};
      
      newState.selectedProjectId = null;
      
      return newState;
    });
  }

  const generateProjectId = () => {
    setProjectIdCounter((prevCount) => {
      return +prevCount + 1;
    })

    return projectIdCounter;
  }

  const generateTaskId = () => {
    setTaskIdCounter((prevCount) => {
      return +prevCount + 1;
    })

    return taskIdCounter;
  }

  const handleAddProject = (projectData) => {
    setProjectsState((prevState) => {
      const newProject = {
        ...projectData,
        id: generateProjectId(),
      }

      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [
          ...prevState.projects,
          newProject
        ]
      }
    })
  }

  const handleCancelAddProject = () => {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
      }
    })
  }

  const handleSelectProject = (projectId) => {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: projectId
      }
    })
  }

  const handleDeleteProject = (projectId) => {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: prevState.projects.filter((item) => item.id !== projectId)
      }
    })
  }

  const handleAddTask = (enteredTask) => {
    setProjectsState((prevState) => {
      const newTask = {
        text: enteredTask,
        projectId: prevState.selectedProjectId,
        id: generateTaskId(),
      }

      return {
        ...prevState,
        tasks: [
          ...prevState.tasks,
          newTask,
        ]
      }
    })
  }

  const handleDeleteTask = () => {

  }

  let content;

  const selectedProject = projectState.projects.find((p) => p.id === projectState.selectedProjectId);

  if (projectState.selectedProjectId === null) {
    content = <NewProject onAdd={handleAddProject} onCancel={handleCancelAddProject} />;
  } else if (typeof projectState.selectedProjectId === 'undefined') {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />
  } else {
    content = <SelectedProject
                project={selectedProject}
                onDeleteProject={handleDeleteProject}
                onAddTask={handleAddTask}
                onDeleteTask={handleDeleteTask}
                tasks={projectState.tasks.filter((task) => task.projectId === projectState.selectedProjectId)}
              />;
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar
        projects={projectState.projects}
        onSelectProject={handleSelectProject}
        onStartAddProject={handleStartAddProject}
        selectedProjectId={projectState.selectedProjectId}
      />
      {content}
    </main>
  );
}

export default App;
