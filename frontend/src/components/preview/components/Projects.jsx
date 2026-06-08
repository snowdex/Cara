import { useResume } from "../../../context/ResumeContext";

function Projects() {
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
      Projects
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

  {resume.projects.map(
    (project) => (
      <div
        key={project.id}
        className="mt-4"
      >
        <h3 className="font-bold">
          {project.name}
        </h3>

        <p className="text-slate-500">
          {project.tech}
        </p>

        <ul
          className="
            mt-2
            list-disc
            pl-5
          "
        >
          {project.points.map(
            (point, index) => (
              <li key={index}>
                {point}
              </li>
            )
          )}
        </ul>
      </div>
    )
  )}
</section>
  )
}

export default Projects