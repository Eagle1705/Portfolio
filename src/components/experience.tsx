import { motion } from "framer-motion";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import { EXPERIENCES } from "../constants";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";
import { TRANSLATIONS } from "../locales/translations";
import { type Language } from "../locales";

import "react-vertical-timeline-component/style.min.css";

type ExperienceProps = {
  language: Language;
};

type ExperienceCardProps = {
  experience: (typeof EXPERIENCES)[number];
};

const EXPERIENCES_EN: typeof EXPERIENCES = [
  {
    title: "Computer Engineering Student",
    company_name: "University of Catania",
    icon: EXPERIENCES[0].icon,
    iconBg: EXPERIENCES[0].iconBg,
    date: "August 2023 - Present",
    points: [
      "Multidisciplinary engineering education based on mathematics and physics (Calculus I-II, Linear Algebra and Geometry, Physics I-II) to model and solve complex problems.",
      "Full software skills: Programming Fundamentals, Object-Oriented Programming, Operating Systems, Software Engineering and Web Programming.",
      "Data and AI skills: relational database design, advanced SQL usage and first Machine Learning tools applied to ICT.",
      "Skills on intelligent and connected systems: computer architectures, microcontrollers and IoT, Internet and Security, digital communications and automation.",
    ],
  },
  {
    title: "Software Development Lead",
    company_name: "FSC Racing Team",
    icon: EXPERIENCES[1].icon,
    iconBg: EXPERIENCES[1].iconBg,
    date: "October 2024 - Present",
    points: [
      "Development of the team's online platform.",
      "Management of the GitHub working environment and coordination of the development workflow.",
      "Member of the Team Management branch.",
      "Implementation of software solutions to optimize internal processes.",
    ],
  },
  {
    title: "Founder and President",
    company_name: "GreenValley FC",
    icon: EXPERIENCES[2].icon,
    iconBg: EXPERIENCES[2].iconBg,
    date: "May 2024 - Present",
    points: [
      "Concept and creation of the official five-a-side football team of Valverde.",
      "Organizational management: player recruitment, technical staff coordination and activity planning.",
      "Supervision of bureaucratic and logistical aspects for league registration.",
      "Lead developer of the team's official website (gvfc.it).",
    ],
  },
  {
    title: "Universal Civil Service",
    company_name: "Misericordia di Valverde ODV",
    icon: EXPERIENCES[3].icon,
    iconBg: EXPERIENCES[3].iconBg,
    date: "June 2024 - June 2025",
    points: [
      "Maintenance and management of the organization's IT systems.",
      "Lead Developer of the organization's official website.",
      "Management of patient relations in healthcare transport activities.",
      "Responsible for vehicle maintenance and management.",
    ],
  },
  {
    title: "Technical Diploma in Computer Science",
    company_name: "ITIS Archimede Catania",
    icon: EXPERIENCES[4].icon,
    iconBg: EXPERIENCES[4].iconBg,
    date: "September 2018 - July 2023",
    points: [
      "Graduated with top marks (100/100).",
      "Participation in PON projects in mathematics, science and IT, plus robotics and debate labs.",
      "Certifications obtained: ICDL, Python Programmer, BLS, Trinity B2, CISCO cybersecurity courses.",
      "PCTO experience at EHT S.C.p.A., strengthening technical and organizational skills.",
    ],
  },
];

// Experience Card
const ExperienceCard = ({ experience }: ExperienceCardProps) => {
  // Zoom maggiore per UNICT (logo quadrato dentro cerchio)
  const logoSize =
    experience.company_name === "Università degli Studi di Catania"
      ? "w-[80%] h-[80%]"
      : "w-[60%] h-[60%]";

  return (
    <VerticalTimelineElement
      contentStyle={{ background: "#1d1836", color: "#fff" }}
      contentArrowStyle={{ borderRight: "7px solid #232631" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={experience.icon}
            alt={experience.company_name}
            className={`${logoSize} object-contain`}
          />
        </div>
      }
    >
      {/* Title */}
      <div>
        <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
        <p
          className="text-secondary text-[16px] font-semibold"
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      {/* Experience Points */}
      <ul className="mt-5 list-disc ml-5 space-y-2">
        {experience.points.map((point, i) => (
          <li
            key={`experience-point-${i}`}
            className="text-white-100 text-[14px] pl-1 tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

// Experience
export const Experience = ({ language }: ExperienceProps) => {
  const t = TRANSLATIONS[language];
  const localizedExperiences = language === "en" ? EXPERIENCES_EN : EXPERIENCES;
  
  return (
    <SectionWrapper idName="work">
      <>
        {/* Title */}
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>{t.experienceSubtitle}</p>
          <h2 className={styles.sectionHeadText}>{t.experienceTitle}</h2>
        </motion.div>

        {/* Experience Card */}
        <div className="empty-20 flex flex-col">
          <VerticalTimeline>
            {localizedExperiences.map((experience, i) => (
              <ExperienceCard key={i} experience={experience} />
            ))}
          </VerticalTimeline>
        </div>
      </>
    </SectionWrapper>
  );
};
