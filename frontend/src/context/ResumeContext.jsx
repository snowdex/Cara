import { createContext, useContext, useEffect, useState } from "react";
import { getDefResume } from "../api/resumeAPI";



/** * Context for managing resume data across the application.
 * Provides a centralized state for the resume and a function to update it.
  Takes values like resume and setresume so that they can be accessed and updated from any component that consumes this context.
*/

const ResumeContext = createContext();

export function ResumeProvider({ children }) {
  const [resume, setResume] = useState(null);
  const [loading, setLoading] = useState(true);

  

  useEffect(()=>{
    const loadResume =
  async () => {
    try {
      const savedResume =
        await getDefResume();
      console.log(
  JSON.stringify(savedResume[0].data, null, 2)
);
      setResume(savedResume.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  loadResume();
  }, [])


  if (loading)
  return <div>Loading...</div>;

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
