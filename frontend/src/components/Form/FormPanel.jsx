import { useState } from "react";

import AccordionSection
  from "./AccordianSection";

import PersonalInfoForm
  from "./PersonalInfoForm";

import SummaryForm
  from "./SummaryForm";

import ExperienceForm from "./ExperienceForm";
import EducationForm from "./EducationForm";
import ProjectsForm from "./ProjectsForm";
import SkillsForm from "./SkillsForm";

export default function FormPanel() {
  const [openSection, setOpenSection] =
    useState("personal");

  return (
    <div className="space-y-4">

      <AccordionSection
        title="Personal Information"
        isOpen={
          openSection === "personal"
        }
        onToggle={() =>
          setOpenSection(
            openSection === "personal"
              ? null
              : "personal"
          )
        }
      >
        <PersonalInfoForm />
      </AccordionSection>

      <AccordionSection
        title="Professional Summary"
        isOpen={
          openSection === "summary"
        }
        onToggle={() =>
          setOpenSection(
            openSection === "summary"
              ? null
              : "summary"
          )
        }
      >
        <SummaryForm />
      </AccordionSection>

      <AccordionSection
        title="Education"
        isOpen={
          openSection === "education"
        }
        onToggle={() =>
          setOpenSection(
            openSection === "education"
              ? null
              : "education"
          )
        }
      >
        <EducationForm />
      </AccordionSection>

      <AccordionSection
        title="Experience"
        isOpen={
          openSection === "experience"
        }
        onToggle={() =>
          setOpenSection(
            openSection === "experience"
              ? null
              : "experience"
          )
        }
      >
        <ExperienceForm />
      </AccordionSection>  
        
      
      <AccordionSection
        title="Projects"
        isOpen={
          openSection === "projects"
        }
        onToggle={() =>
          setOpenSection(
            openSection === "projects"
              ? null
              : "projects"
          )
        }
      >
        <ProjectsForm />
      </AccordionSection>

      <AccordionSection
        title="Skills"
        isOpen={
          openSection === "skills"
        }
        onToggle={() =>
          setOpenSection(
            openSection === "skills"
              ? null
              : "skills"
          )
        }
      >
        <SkillsForm />
      </AccordionSection>

    </div>
  );
}