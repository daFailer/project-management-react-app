import noProjectImage from '../assets/no-projects.png'
import Button from './Button';
import H2 from './H2';
import Paragraph from './Paragraph';

const NoProjectSelected = ({ onStartAddProject }) => {
  return (
    <div className="mt-24 text-center w-2/3">
      <img src={noProjectImage} alt="An empty tasklist" className="w-16 h-16 object-contain mx-auto" />
      <H2>No Project Selected</H2>
      <Paragraph>Select a project or get started with a new one</Paragraph>
      <p className="mt-8">
        <Button onClick={() => onStartAddProject(true)}>Create new project</Button>
      </p>
    </div>
  )
}

export default NoProjectSelected;