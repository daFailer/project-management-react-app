import { useState } from "react";
import ProjectsSidebar from './components/ProjectsSidebar';
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import SelectedProject from "./components/SelectedProject";

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

  let content;

  const selectedProject = projectState.projects.find((p) => p.id === projectState.selectedProjectId);

  if (projectState.selectedProjectId === null) {
    content = <NewProject onAdd={handleAddProject} onCancel={handleCancelAddProject} />;
  } else if (typeof projectState.selectedProjectId === 'undefined') {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />
  } else {
    content = <SelectedProject project={selectedProject} onDeleteProject={handleDeleteProject}/>;
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
