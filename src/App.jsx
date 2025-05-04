import { useState } from "react";
import ProjectsSidebar from './components/ProjectsSidebar';
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";

function App() {
  const [showNewProjectForm, setShowNewProjectForm] = useState(false);

  const handleAddProjectToggle = (showForm) => {
    setShowNewProjectForm(showForm);
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar toggleAddProjectView={handleAddProjectToggle} />
      {showNewProjectForm && <NewProject toggleAddProjectView={handleAddProjectToggle} />}
      {!showNewProjectForm && <NoProjectSelected toggleAddProjectView={handleAddProjectToggle} />}
    </main>
  );
}

export default App;
