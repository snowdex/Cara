import { useResume } from "../../../context/ResumeContext"

function HeaderR() {
  const { resume } = useResume();

  return (
    <header className="mb-8">
  <h1 className="text-5xl font-bold">
    {resume.personal.fullName}
  </h1>

  <p className="text-xl text-slate-600 mt-2">
    {resume.personal.title}
  </p>

  <div
    className="
      mt-4
      text-sm
      text-slate-500
      flex
      flex-wrap
      gap-4
    "
  >
    <span>{resume.personal.email}</span>

    <span>{resume.personal.phone}</span>

    <span>{resume.personal.location}</span>

    <span>{resume.personal.linkedin}</span>

    <span>{resume.personal.github}</span>
  </div>
</header>
  )
}

export default HeaderR