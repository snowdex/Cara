import { useContext } from "react";
import { ResumeContext } from "./ResumeContext";

export function useResume() {
  return useContext(ResumeContext);
}