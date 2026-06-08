import { ChevronDown } from "lucide-react";

export default function AccordionSection({
  title,
  isOpen,
  onToggle,
  children,
}) {
  return (
    <div
      className="
        border
        rounded-xl
        bg-white
        overflow-hidden
      "
    >
      <button
        onClick={onToggle}
        className="
          w-full
          flex
          items-center
          justify-between
          px-4
          py-4
          font-medium
        "
      >
        {title}

        <ChevronDown
          className={`
            transition-transform
            ${isOpen ? "rotate-180" : ""}
          `}
        />
      </button>

      {isOpen && (
        <div className="p-4 border-t">
          {children}
        </div>
      )}
    </div>
  );
}