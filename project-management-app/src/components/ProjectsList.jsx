const ProjectsList = ({ projects, onSelectProject, selectedProjectId }) => {
  return (
    <ul>
      {projects.map((project) => {
        let classes = 'p-1 my-1 block w-full text-left rounded-sm hover:bg-stone-950 hover:text-stone-300';

        if (selectedProjectId === project.id) {
          classes += ' bg-stone-950 text-stone-300';
        } else {
          classes += ' text-stone-400';
        }

        return (
          <li key={project.id} >
            <button onClick={() => onSelectProject(project.id)} className={classes}>
              {project.title}
            </button>
          </li>
        );
      })}
    </ul>
  );
}

export default ProjectsList;
