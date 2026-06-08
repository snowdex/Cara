import { useResume } from "../../context/ResumeContext";

export default function ExperienceForm() {
  const { resume, setResume } = useResume();

  const exp = resume.experience[0];

  const update = (field, value) => {
    const updated = {
      ...exp,
      [field]: value,
    };

    setResume(prev => ({
      ...prev,
      experience: [updated],
    }));
  };

  return (
    <div className="space-y-4 grid grid-cols-3 gap-4">
      <input
        value={exp.role}
        onChange={(e) =>
          update("role", e.target.value)
        }
        placeholder="Role"
        className="w-full border rounded-lg px-3 py-2"
      />

      <input
        value={exp.company}
        onChange={(e) =>
          update("company", e.target.value)
        }
        placeholder="Company"
        className="w-full border rounded-lg px-3 py-2"
      />

      <input
        value={exp.duration}
        onChange={(e) =>
          update("duration", e.target.value)
        }
        placeholder="Duration"
        className="w-full border rounded-lg px-3 py-2"
      />
    </div>
  );
}