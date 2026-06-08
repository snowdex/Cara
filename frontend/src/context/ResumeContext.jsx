import { createContext, useContext, useState } from "react";

import { initialResume } from "../data/initialResume";

/** * Context for managing resume data across the application.
 * Provides a centralized state for the resume and a function to update it.
  Takes values like resume and setresume so that they can be accessed and updated from any component that consumes this context.
*/

const ResumeContext = createContext();

export function ResumeProvider({ children }) {
  const [resume, setResume] = useState(initialResume);

  return (
    <ResumeContext.Provider value={{ resume, setResume }}>
      {children}
    </ResumeContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useResume() {
  return useContext(ResumeContext);
}
