const ProjectDetails = ({project}) => {
  return (
    <div>
      <h2>{project.title}</h2>
      <p>{project.description}</p>
      <p>{project.dueDate}</p>
    </div>
  )
}

export default ProjectDetails;