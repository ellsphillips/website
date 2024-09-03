import {
  IconBrandLinkedin,
  IconBrandGithubFilled,
  IconMailFilled,
} from "@tabler/icons-react";

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

const roleDescriptions = {
  lloyds: `
  Senior Software Engineer with a focus on building and maintaining a suite of data-driven applications for the Group, mentoring junior developers, and developing platform capability on GCP. Responsible for leading the development of a new data product to deliver client-facing market insights across the UK. 
  `,
  dluhc: `
  Principal Engineer with extensive experience leading cross-functional teams in the development of Government-wide spatial data infrastructure platforms, AI-powered applications, and secure data APIs. Proven track record in managing app deployments at scale, integrating machine learning for data quality assurance, and fostering a culture of continuous learning and innovation. Skilled in providing technical expertise, improving team practices, and representing data capabilities at high-profile events.
  `,
  ons: `
  Led the development and deployment of advanced machine learning models and geospatial APIs to classify and map Mastercard's 128M UK bank accounts, achieving a 96% classification accuracy. Spearheaded the creation of a full-stack web application for visualizing UK firm-to-firm transactions and mentored colleagues in data science and software design. Transformed legacy systems into production pipelines for public pensions data, employing Agile methodologies. Designed a scalable app for departmental newsletters and innovated the classification of business survey responses using supervised machine learning, significantly improving matching capabilities. Developed a web scraper and image processing pipeline to enhance the ONS business register with critical metadata.
  `,
};

const projectDescriptions = {
  dluhcAtlas: `
  Lead Engineer for DLUHC's core data visualisation product, Atlas, an interactive Levelling Up data explorer with a dynamic map that enables users to visualise UK-wide subnational metrics at various geographies and their change over time.
  `,
  economicNetworks: `
  Lead Data Scientist for the Economic Networks collaboration project between the Office for National Statistics and The Turing Institute, delivering innovation and economic insights to Cabinet Office and No. 10. Generated new and ground-breaking spatial-economic data assets to inform Government decision-making and provide insight into economic supply chains, business resilience, and recovery in response to national crises, e.g. COVID-19, fuel, and cost of living.
  `,
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
      url: "https://www.linkedin.com/in/elliott-phillips",
      label: "LinkedIn",
      icon: IconBrandLinkedin,
    },
    {
      url: "https://www.github.com/ellsphillips",
      label: "GitHub",
      icon: IconBrandGithubFilled,
    },
    {
      url: "mailto:elliott.phillips.dev@gmail.com",
      label: "Email",
      icon: IconMailFilled,
    },
  ],
  resume: {
    work: [
      {
        title: "Lloyds Banking Group",
        date: "Apr 2024 — Present",
        logo: "/images/lloyds.svg",
        description: roleDescriptions.lloyds,
      },
      {
        title: "Department for Levelling Up, Housing and Communities",
        date: "Aug 2022 — Mar 2024",
        logo: "/images/dluhc.svg",
        description: roleDescriptions.dluhc,
      },
      {
        title: "Office for National Statistics",
        date: "Jan 2020 — Aug 2022",
        logo: "/images/ons.svg",
        description: roleDescriptions.ons,
      },
    ],
    qualifications: [
      {
        title: "Associate Cloud Engineer, Google Cloud Platform",
        date: "08-2024",
      },
      {
        title: "Cloud Digital Leader, Google Cloud Platform",
        date: "07-2024",
      },
      {
        title: "Machine Learning, Microsoft Azure",
        date: "02-2024",
      },
      {
        title:
          "Lead Software Developer, Government Data, Digital and Technology",
        date: "11-2022",
      },
      {
        title: "Operational Researcher, Governmnt Operational Research Service",
        date: "10-2021",
      },
      {
        title: "Accredited Researcher, Secure Research Service",
        date: "03-2021",
      },
      {
        title: "BSc Mathematics, University of Exeter",
        date: "06-2019",
      },
    ],
    projects: [
      {
        title: "DLUHC Atlas",
        date: "Nov 2022 — Feb 2024",
        description: projectDescriptions.dluhcAtlas,
        url: "https://mhclgdigital.blog.gov.uk/2024/02/06/visualising-spatial-data-to-support-decision-making/",
        thumbnail: "/images/dluhc-atlas.jpeg",
      },
      {
        title: "Understanding Economic Networks",
        date: "Jun 2019 — Jul 2022",
        description: projectDescriptions.economicNetworks,
        url: "https://www.turing.ac.uk/news/ons-and-turing-join-forces-produce-better-and-faster-estimates-economic-changes",
      },
    ],
  },
};

export default DATA;
