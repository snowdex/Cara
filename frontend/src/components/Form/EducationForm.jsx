import { useResume } from "../../context/ResumeContext";

export default function EducationForm() {
  const { resume, setResume } = useResume();

  const education = resume.education[0];

  const handleChange = (field, value) => {
    const updated = {
      ...education,
      [field]: value,
    };

    setResume(prev => ({
      ...prev,
      education: [updated],
    }));
  };

  return (
    <div className="space-y-4 grid grid-cols-3 gap-4">
      <input
        value={education.degree}
        onChange={(e) =>
          handleChange("degree", e.target.value)
        }
        placeholder="Degree"
        className="w-full border rounded-lg px-3 py-2"
      />

      <input
        value={education.college}
        onChange={(e) =>
          handleChange("college", e.target.value)
        }
        placeholder="College"
        className="w-full border rounded-lg px-3 py-2"
      />

      <input
        value={education.cgpa}
        onChange={(e) =>
          handleChange("cgpa", e.target.value)
        }
        placeholder="CGPA"
        className="w-full border rounded-lg px-3 py-2"
      />

      <input
        value={education.year}
        onChange={(e) =>
          handleChange("year", e.target.value)
        }
        placeholder="Year"
        className="w-full border rounded-lg px-3 py-2"
      />
    </div>
  );
}