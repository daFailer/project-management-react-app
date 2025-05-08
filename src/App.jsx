import { useState } from "react";
import ProjectsSidebar from './components/ProjectsSidebar';
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";

function App() {
  const [projectIdCounter, setProjectIdCounter] = useState(0);
  const [projectState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: [],
  });

  const handleStartAddProject = (showForm) => {
    setProjectsState((prevState) => {
      const newState = {...prevState};
      
      newState.selectedProjectId = null;
      
      return newState;
    });
  }

  const generateId = () => {
    setProjectIdCounter((prevCount) => {
      return +prevCount + 1;
    })

    console.log('generateId', projectIdCounter);

    return projectIdCounter;
  }

  const handleAddProject = (projectData) => {
    setProjectsState((prevState) => {
      const newProject = {
        ...projectData,
        id: generateId(),
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

  const handleSelectProject = (projectId) => {
    console.log(projectId);
    
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: projectId
      }
    })
  }

  let content;

  if (projectState.selectedProjectId === null) {
    content = <NewProject onAdd={handleAddProject} />;
  } else if (typeof projectState.selectedProjectId === 'undefined') {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />
  } else {
    content = <p>display project details of project {projectState.selectedProjectId}</p>;
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar projects={projectState.projects} onSelectProject={handleSelectProject} onStartAddProject={handleStartAddProject} />
      {content}
    </main>
  );
}

export default App;
