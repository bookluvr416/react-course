import img from '../assets/no-projects.png';
import Button from './Button';

const NoProjects = ({ onCreateProject }) => {
  return (
    <div className="mt-24 text-center w-2/3">
      <img src={img} alt="No projects" className="w-16 h-16 object-contain mx-auto" />
      <h1 className="text-xl font-bold text-stone-500 my-4">No Project Started</h1>
      <p className="text-stone-400 mb-4">Select a project or get started with a new one.</p>
      <p className="mt-8">
        <Button onClick={onCreateProject}>Create new project</Button>
      </p>
    </div>
  );
}

export default NoProjects;
