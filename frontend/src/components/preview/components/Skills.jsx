import { useResume } from "../../../context/ResumeContext";

function Skills() {
    const { resume } = useResume();
  return (
    <section>
  <div className="mb-5">
  <div
    className="
      flex
      items-center
      gap-3
    "
  >
    <div className="w-2 h-2 bg-black rounded-full"></div>
    <h2
      className="
        text-base
        font-bold
        uppercase
      "
    >
      Skills
    </h2>

    <div
      className="
        flex-1
        h-[1.5px]
        bg-black
      "
    />
  </div>
</div>

  <div
    className="
      flex
      flex-wrap
      gap-2
      mt-4
    "
  >
    {resume.skills.map(
      (skill) => (
        <span
          key={skill}
          className="
            px-3
            py-1
            bg-slate-100
            rounded-md
            text-sm
          "
        >
          {skill}
        </span>
      )
    )}
  </div>
</section>
  )
}

export default Skills