import { useResume } from "../../../context/ResumeContext"

function Summary() {
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
      Professional Summary
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

  <p className="mt-3 text-slate-700 leading-relaxed">
    {resume.personal.summary}
  </p>
</section>
  )
}

export default Summary