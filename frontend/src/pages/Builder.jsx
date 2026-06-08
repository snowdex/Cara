import ResumePreview from "../components/preview/ResumePreview";
import Navbar from '../components/Navbar'
import FormPanel from '../components/Form/FormPanel'

export default function Builder() {
  return (
    <div className="h-screen flex flex-col bg-slate-100">
      {/* Navbar */}
      <Navbar />  

      {/* Main Content */}
      <main
        className="
          flex-1
          flex
          overflow-hidden
        "
      >
        {/* Form Panel */}
        <section
          className="
            w-[60%]
            bg-white
            border-r
            overflow-y-auto
            p-6
          "
        >
          <FormPanel /> 
        </section>

        {/* Preview Panel */}
        <section
          className="
            w-[60%]
            bg-slate-200
            flex
            justify-center
            items-center
            overflow-hidden
            p-8
          "
        >
          <ResumePreview />
        </section>
      </main>
    </div>
  );
}