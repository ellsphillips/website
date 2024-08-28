export type Role = {
  title: string;
  date: string;
  logo: `/images/${string}.svg`;
  description: string;
};

export type Publication = {
  title: string;
  date: string;
  url?: string;
};

export type SiteMetadata = {
  title: string;
  description: string;
  url: string;
};

export type ResumeData = {
  roles: Role[];
  publications: Publication[];
};

const DATA = {
  site: {
    title: "Elliott Phillips",
    description:
      "Software Engineer who values learning and growing with people, teams, and technologies.",
    url: "https://elliottphillips.co.uk",
  },
  socials: [
    {
      name: "GitHub",
      url: "www.github.com/ellsphillips",
    },
    {
      name: "LinkedIn",
      url: "www.linkedin.com/in/elliott-phillips",
    },
  ],
  resume: {
    work: [
      {
        title: "Department for Levelling Up, Housing and Communities",
        date: "Aug 2022 — Mar 2024",
        logo: "/images/dluhc.svg",
        description:
          "Principal Engineer with extensive experience leading cross-functional teams in the development of Government-wide spatial data infrastructure platforms, AI-powered applications, and secure data APIs. Proven track record in managing app deployments at scale, integrating machine learning for data quality assurance, and fostering a culture of continuous learning and innovation. Skilled in providing technical expertise, improving team practices, and representing data capabilities at high-profile events.",
      },
      {
        title: "Office for National Statistics",
        date: "Jan 2020 — Aug 2022",
        logo: "/images/ons.svg",
        description:
          "Led the development and deployment of advanced machine learning models and geospatial APIs to classify and map Mastercard's 128M UK bank accounts, achieving a 96% classification accuracy. Spearheaded the creation of a full-stack web application for visualizing UK firm-to-firm transactions and mentored colleagues in data science and software design. Transformed legacy systems into production pipelines for public pensions data, employing Agile methodologies. Designed a scalable app for departmental newsletters and innovated the classification of business survey responses using supervised machine learning, significantly improving matching capabilities. Developed a web scraper and image processing pipeline to enhance the ONS business register with critical metadata.",
      },
    ],
    qualifications: [
      {
        title: "BSc Mathematics, University of Exeter",
        date: "06-2019",
      },
      {
        title: "Accredited Researcher, Secure Research Service",
        date: "03-2021",
      },
      {
        title: "Operational Researcher, Governmnt Operational Research Service",
        date: "10-2021",
      },
      {
        title:
          "Lead Software Developer, Government Data, Digital and Technology",
        date: "11-2022",
      },
      {
        title: "Machine Learning, Microsoft Azure",
        date: "02-2024",
      },
      {
        title: "Cloud Digital Leader, Google Cloud Platform",
        date: "07-2024",
      },
      {
        title: "Associate Cloud Engineer, Google Cloud Platform",
        date: "08-2024",
      },
    ],
  },
};

export default DATA;
