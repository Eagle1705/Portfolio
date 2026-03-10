import { motion } from "framer-motion";
import { BallCanvas } from "./canvas";
import { TECHNOLOGIES } from "../constants";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";
import { TRANSLATIONS } from "../locales/translations";
import { type Language } from "../locales";

type TechProps = {
  language: Language;
};

// Technologies
export const Tech = ({ language }: TechProps) => {
  const t = TRANSLATIONS[language];
  return (
    <SectionWrapper idName="tech">
      <>
        {/* Title */}
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>{t.techSubtitle}</p>
          <h2 className={styles.sectionHeadText}>{t.techTitle}</h2>
        </motion.div>

        {/* Tech Stack */}
        <div className="mt-20 flex flex-row flex-wrap justify-center gap-10">
        {/* Iterate over each technology */}
          {TECHNOLOGIES.map((technology) => (
            <div className="w-28 h-28" key={technology.name}>
              <BallCanvas icon={technology.icon} />
            </div>
          ))}
        </div>
      </>
    </SectionWrapper>
  );
};
