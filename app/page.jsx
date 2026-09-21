import Hero from "@/components/Hero";
import Section from "@/components/Section";
import TimelineItem from "@/components/TimelineItem";
import ProjectCard from "@/components/ProjectCard";
import SkillBadge from "@/components/SkillBadge";
import ContactList from "@/components/ContactList";
import {
  profile,
  education,
  experience,
  extracurricular,
  skillGroups,
  projects,
} from "@/data/profile";
import styles from "./home.module.css";

export default function Home() {
  return (
    <main>
      <Hero />

      <Section id="sobre" tag="01 · quem sou" title="sobre">
        <div className={styles.aboutGrid}>
          {profile.about.map((p) => (
            <p key={p.slice(0, 24)} className={styles.aboutText}>
              {p}
            </p>
          ))}
        </div>
      </Section>

      <Section id="academico" tag="02 · formação" title="experiência acadêmica">
        <div className={styles.timeline}>
          {education.map((item) => (
            <TimelineItem key={item.title} item={item} />
          ))}
        </div>
      </Section>

      <Section id="profissional" tag="03 · carreira" title="experiência profissional">
        <div className={styles.timeline}>
          {experience.map((item) => (
            <TimelineItem key={item.title} item={item} />
          ))}
        </div>
      </Section>

      <Section id="extracurricular" tag="04 · além da sala" title="atividades extracurriculares">
        <div className={styles.timeline}>
          {extracurricular.map((item) => (
            <TimelineItem key={item.title} item={item} />
          ))}
        </div>
      </Section>

      <Section id="habilidades" tag="05 · stack" title="habilidades">
        <div className={styles.skillGroups}>
          {skillGroups.map((group) => (
            <div key={group.label} className={styles.skillGroup}>
              <p className={styles.skillGroupLabel}>{group.label}</p>
              <div className={styles.skillGrid}>
                {group.items.map((s) => (
                  <SkillBadge key={s} label={s} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section id="projetos" tag="06 · galeria" title="projetos">
        <div className={styles.projectGrid}>
          {projects.map((p) => (
            <ProjectCard key={p.title} project={p} />
          ))}
        </div>
      </Section>

      <Section id="contato" tag="07 · fale comigo" title="contato">
        <ContactList />
      </Section>
    </main>
  );
}
