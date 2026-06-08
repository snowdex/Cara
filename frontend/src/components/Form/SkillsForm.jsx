import { useResume } from "../../context/ResumeContext";

export default function SkillsForm() {
  const { resume, setResume } = useResume();

  return (
    <textarea
      rows={5}
      value={resume.skills.join(", ")}
      onChange={(e) =>
        setResume(prev => ({
          ...prev,
          skills: e.target.value
            .split(",")
            .map(skill => skill.trim())
            .filter(Boolean),
        }))
      }
      placeholder="React, Node.js, PostgreSQL"
      className="
        w-full
        border
        rounded-lg
        p-3
      "
    />
  );
}