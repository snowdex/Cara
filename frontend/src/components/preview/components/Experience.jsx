import { useResume } from "../../../context/ResumeContext";

function Experience() {
    const { resume } = useResume();
  return (
    <section className="mb-8">
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
      Experience
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

  {resume.experience.map((exp) => (
    <div
      key={exp.id}
      className="mt-4"
    >
      <div
        className="
          flex
          justify-between
        "
      >
        <h3 className="font-bold">
          {exp.role}
        </h3>

        <span>
          {exp.duration}
        </span>
      </div>

      <p className="text-slate-600">
        {exp.company}
      </p>

      <ul
        className="
          mt-2
          list-disc
          pl-5
        "
      >
        {exp.points.map(
          (point, index) => (
            <li key={index}>
              {point}
            </li>
          )
        )}
      </ul>
    </div>
  ))}
</section>
  )
}

    export default Experience