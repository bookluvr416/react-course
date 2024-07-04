import img from './assets/no-projects.png';
import ProjectsSidebar from './components/ProjectsSidebar';
import AddProjectForm from './components/AddProjectForm';
import NoProjects from './components/NoProjects';
import Project from './components/Project';
import { useState } from 'react';

function App() {
  const [projects, setProjects] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: [],
  });

  // called on clicking to open form to create a new project
  const handleAddProjectButtonClick = () => {
    setProjects(prevState => {
      return {
        ...prevState,
        selectedProjectId: null,
      }
    });
  };

  // called on clicking cancel in adding a new project
  const handleCancelNewProject = () => {
    setProjects(prevState => {
      return {
        ...prevState,
        selectedProjectId: undefined,
      }
    });
  }

  // called on clickig save for a new project
  const handleSaveProject = (title, description, dueDate) => {
    const newProject = {
      title,
      description,
      dueDate,
      id: Math.random(),
    };

    setProjects(prevState => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProject]
      }
    });
  };

  // called on clicking a project in the sidebar
  const handleSelectProject = (id) => {
    setProjects(prevState => {
      return {
        ...prevState,
        selectedProjectId: id,
      }
    });
  };

  // called on delete click in individual project
  const handleDeleteProject = () => {
    setProjects(prevState => {
      const newProjects = prevState.projects.filter((project) => project.id !== prevState.selectedProjectId);

      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: newProjects,
      }
    })
  };

  // add task from project
  const handleAddTask = (task) => {
    setProjects(prevState => {
      const newTask = {
        id: Math.random(),
        text: task,
        projectId: prevState.selectedProjectId,
      };

      return {
        ...prevState,
        tasks: [...prevState.tasks, newTask],
      }
    });
  };

  // delete task from project
  const handleDeleteTask = (id) => {
    setProjects(prevState => {
      const newTasks = prevState.tasks.filter((task) => task.id !== id);

      return {
        ...prevState,
        tasks: newTasks,
      }
    })
  }

  return (
    <main className="h-screen my-8 flex gap-4">
      <ProjectsSidebar
        onAddProject={handleAddProjectButtonClick}
        projects={projects.projects}
        onSelectProject={handleSelectProject}
        selectedProjectId={projects.selectedProjectId}
      />
      {projects.selectedProjectId === undefined && <NoProjects onCreateProject={handleAddProjectButtonClick} />}
      {projects.selectedProjectId === null && (
        <AddProjectForm
          onSave={handleSaveProject}
          onCancel={handleCancelNewProject}
        />
      )}
      {projects.selectedProjectId && (
        <Project
          project={projects.projects.find((project) => project.id === projects.selectedProjectId)}
          onDelete={handleDeleteProject}
          onAddTask={handleAddTask}
          tasks={projects.tasks.filter(task => task.projectId === projects.selectedProjectId)}
          onDeleteTask={handleDeleteTask}
        />
      )}
    </main>
  );
}

export default App;
