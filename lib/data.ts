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
          "Principal Engineer with extensive experience leading cross-functional teams in the development of Government-wide spatial data infrastructure platforms, AI-powered applications, and secure data APIs. Proven track record in managing app deployments at scale, integrating machine learning for data quality assurance, and fostering a culture of continuous learning and innovation. Skilled in providing technical expertise, improving team practices, and representing data capabilities at high-profile events. Key projects include: \
        Atlas: Led the design, build, and deployment of a spatial data platform to visualize UK national progress and Government investment. \
        Funding Delivery AI: Developed an LLM-powered chat application to streamline funding delivery processes and provide real-time responses. \
        LUDA: Created a secure data API to meet department-wide data requirements and drive user-focused solutions. \
        LEVEL-UP!: Pioneered an open-source solution to enhance technical skills, support career development, and attract engineering talent.",
      },
      {
        title: "Office for National Statistics",
        date: "Jan 2020 — Aug 2022",
        logo: "/images/ons.svg",
        description:
          "Senior Data Scientist with a background in developing and deploying machine learning models for the UK Census. Led a team of data scientists to develop and deploy machine learning models for the UK Census. Key projects include: \
        Census 2021: Led the development of a machine learning model to predict household response rates, resulting in a 10% increase in response rates. \
        Data Quality Assurance: Implemented a machine learning model to identify and correct data quality issues, improving data accuracy by 15%. \
        Data Visualization: Created a data visualization tool to communicate complex data insights to non-technical stakeholders, resulting in improved decision-making. \
        Data Governance: Developed a data governance framework to ensure data quality, security, and compliance with data protection regulations.",
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
