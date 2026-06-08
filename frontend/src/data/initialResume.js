export const initialResume = {
  personal: {
    fullName: "Shrey Mehta",
    title: "Full Stack Developer",

    email: "shrey@gmail.com",

    phone: "+91 9876543210",

    location: "Gwalior, India",

    summary:
      "Passionate full stack developer with experience building scalable web applications and modern user interfaces.",

    image: null,
    Links: [
      {
        type: "LinkedIn",
        url: "https://www.linkedin.com/in/shreymehta01/",
        label: "LinkedIn"
      },
      {
        type: "GitHub",
        url: "https://github.com/snowdex",
        label: "GitHub"
      },
      {
        type: "leetcode",
        url: "https://leetcode.com/u/snowdex/",
        label: "LeetCode"
      }
      
    ]
  },

  education: [
    {
      id: 1,
      degree: "B.Tech Electronics & Telecommunication",
      college: "SGSITS",
      cgpa: "8.5",
      year: "2028",
    },
  ],

  experience: [
    {
      id: 1,
      company: "Walkover",

      role:
        "Software Developer Intern",

      duration:
        "May 2026 - Present",

      points: [
        "Built frontend features using React.",
        "Collaborated with backend teams.",
      ],
    },
  ],

  projects: [
    {
      id: 1,

      name:
        "ResumeForge",

      tech:
        "React, Node.js, PostgreSQL",

      points: [
        "Built a real-time resume builder.",
        "Implemented PDF export.",
      ],
    },
  ],

  skills: [
    "React",
    "Node.js",
    "Express",
    "PostgreSQL",
    "Prisma",
    "Tailwind CSS",
  ],
};