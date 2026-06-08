import { useResume } from "../../context/ResumeContext";

export default function PersonalInfoForm() {
  const { resume, setResume } = useResume();

  const handleChange = (field, value) => {
    setResume(prev => ({
      ...prev,
      personal: {
        ...prev.personal,
        [field]: value,
      },
    }));
  };

  return (
    <div className="space-y-4 grid grid-cols-3 gap-4">
      
      <input
        value={resume.personal.fullName}
        onChange={(e) =>
          handleChange("fullName", e.target.value)
        }
        placeholder="Full Name"
        className="w-full border rounded-lg px-3 py-2"
      />

      <input
        value={resume.personal.title}
        onChange={(e) =>
          handleChange("title", e.target.value)
        }
        placeholder="Title"
        className="w-full border rounded-lg px-3 py-2"
      />

      <input
        value={resume.personal.email}
        onChange={(e) =>
          handleChange("email", e.target.value)
        }
        placeholder="Email"
        className="w-full border rounded-lg px-3 py-2"
      />

      <input
        value={resume.personal.phone}
        onChange={(e) =>
          handleChange("phone", e.target.value)
        }
        placeholder="Phone"
        className="w-full border rounded-lg px-3 py-2"
      />

      <input
        value={resume.personal.location}
        onChange={(e) =>
          handleChange("location", e.target.value)
        }
        placeholder="Location"
        className="w-full border rounded-lg px-3 py-2"
      />

      <input
        value={resume.personal.linkedin}
        onChange={(e) =>
          handleChange("linkedin", e.target.value)
        }
        placeholder="LinkedIn"
        className="w-full border rounded-lg px-3 py-2"
      />

      <input
        value={resume.personal.github}
        onChange={(e) =>
          handleChange("github", e.target.value)
        }
        placeholder="GitHub"
        className="w-full border rounded-lg px-3 py-2"
      />
    </div>
  );
}