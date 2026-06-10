import prisma from "../lib/prisma.js";

export const saveResume = async (req, res) => {
  try {

    const {title, data} = req.body;


    const resume = await prisma.resume.create({
        data: {
            title,
            data,
        }
    });
    res.status(201).json(
      resume
    );


  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Failed to save resume",
    });
  }
};


//Function to get default resume
export const getDefResume = async (
  req,
  res
) => {
  try {
    const resume =
  await prisma.resume.findFirst({
    orderBy: {
      updatedAt: "desc",
    },
  });
    res.json(resume);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch resume",
    });
  }
};


export const getAllResumes =
  async (req, res) => {
    const resumes =
      await prisma.resume.findMany();

    res.json(resumes);
  };