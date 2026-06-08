import { useResume } from "../../context/ResumeContext";

import HeaderR from "./components/HeaderR";
import Summary from "./components/Summary";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Skills from "./components/Skills";

export default function ResumePreview() {
  const { resume } = useResume();

  return (
    <div
      className="
        bg-white
        shadow-2xl
        scale-[0.75]
        origin-center
      "
    >
      <div
        className="
          w-[794px]
          min-h-[1123px]
          px-12
          py-10
        "
      >
        <HeaderR personal={resume.personal} />

        <Summary
          summary={resume.personal.summary}
        />

        <Experience
          experience={resume.experience}
        />

        <Projects
          projects={resume.projects}
        />

        <Education
          education={resume.education}
        />

        <Skills
          skills={resume.skills}
        />
      </div>
    </div>
  );
}