import axios from "axios";

const API = "http://localhost:5000/api/resumes";

export const saveResume = async(resume)=>{
    const response = await axios.post(
        API,
        {
            title: "Resume",
            data: resume
        }
    );
    return response.data;
}

export const getDefResume = async()=>{
    const response = await axios.get(API);
    return response.data;
}