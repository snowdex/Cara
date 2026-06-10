import { useResume } from "../../../context/ResumeContext";

function HeaderR() {
  const { resume } = useResume();

  return (
    <header className="mb-8">
      <h1 className="text-5xl font-bold">{resume.personal.fullName}</h1>

      <p className="text-xl text-slate-600 mt-2">{resume.personal.title}</p>

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
        <span>{resume.personal.phone}</span>

        <span>{resume.personal.location}</span>
        
        {resume.personal.Links.map((link)=>(
            <a
              key={link.type}
              href={link.url}
              target="_blank"
              className="text-blue-500 hover:underline"
              rel="noopener noreferrer"
            >
              {link.label}
            </a>
          
        ))}
      </div>
    </header>
  );
}

export default HeaderR;
