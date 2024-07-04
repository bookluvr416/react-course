import Button from './Button';
import ProjectsList from './ProjectsList';

const ProjectsSidebar = ({ onAddProject, projects, onSelectProject, selectedProjectId, onDeleteProject }) => {
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h2>Your Projects</h2>
      <div className="mb-8 font-bold uppercase md:text-xl text-stone-200">
        <Button onClick={onAddProject}>+ Add Project</Button>
      </div>
      <ProjectsList
        projects={projects}
        onSelectProject={onSelectProject}
        selectedProjectId={selectedProjectId}
      />
    </aside>
  )
};

export default ProjectsSidebar;
