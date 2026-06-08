
import { FileText, Download, Save } from "lucide-react";

function Navbar() {
  return (
    <header className="h-16 bg-white border-b flex items-center justify-between px-6 shrink-0">
        <div className="flex items-center gap-3">
          <FileText size={24} />
          <h1 className="text-xl font-bold">
            Cara
          </h1>
        </div>

        <div className="flex items-center gap-3">
          <button
            className="
              px-4
              py-2
              border
              rounded-lg
              hover:bg-slate-50
              transition
            "
          >
            <Save size={18} />
          </button>

          <button
            className="
              flex
              items-center
              gap-2
              bg-slate-900
              text-white
              px-4
              py-2
              rounded-lg
              hover:bg-slate-800
              transition
            "
          >
            <Download size={18} />
            Export PDF
          </button>
        </div>
      </header>
  )
}

export default Navbar