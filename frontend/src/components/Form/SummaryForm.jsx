import { useResume } from "../../context/ResumeContext";

export default function SummaryForm() {
  const { resume, setResume } = useResume();

  return (
    <textarea
      rows={6}
      placeholder="A brief summary about you, your skills, and your career goals. Word limit: 100 words."
      value={resume.personal.summary}
      onChange={(e) =>
        setResume(prev => ({
          ...prev,
          personal: {
            ...prev.personal,
            summary: e.target.value,
          },
        }))
      }
      className="
        w-full
        border
        rounded-lg
        p-3
      "
    />
  );
}