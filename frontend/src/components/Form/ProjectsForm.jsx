import { useResume } from "../../context/ResumeContext";

export default function ProjectsForm() {
  const { resume, setResume } = useResume();

  const project = resume.projects[0];

  const update = (field, value) => {
    const updated = {
      ...project,
      [field]: value,
    };

    setResume(prev => ({
      ...prev,
      projects: [updated],
    }));
  };

  return (
    <div className="space-y-4 grid grid-cols-3 gap-4">
      <input
        value={project.name}
        onChange={(e) =>
          update("name", e.target.value)
        }
        placeholder="Project Name"
        className="w-full border rounded-lg px-3 py-2"
      />

      <input
        value={project.tech}
        onChange={(e) =>
          update("tech", e.target.value)
        }
        placeholder="Tech Stack"
        className="w-full border rounded-lg px-3 py-2"
      />
    </div>
  );
}