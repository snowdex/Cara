import { useResume } from "../../../context/ResumeContext";

function Education() {
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
      Education
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

  {resume.education.map(
    (edu) => (
      <div
        key={edu.id}
        className="mt-4"
      >
        <div
          className="
            flex
            justify-between
          "
        >
          <h3 className="font-semibold">
            {edu.degree}
          </h3>

          <span>
            {edu.year}
          </span>
        </div>

        <p className="text-slate-600">
          {edu.college}
        </p>

        <p className="text-sm">
          CGPA: {edu.cgpa}
        </p>
      </div>
    )
  )}
</section>
  )
}

export default Education