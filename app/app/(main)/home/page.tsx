import Header from "../../_components/Header";
import NavigationPages from "../../_components/Navigation - Pages";
import Contact from "../../_components/Contact";

export default function Home() {
  return (
    <>
      <Header title="Développeur" subtitle="Web & Mobile" />

      <nav className="flex flex-col gap-(--spacing-section)">
        <NavigationPages
          title="À propos"
          description="Qualité et fiabilité sont une nécessité."
          href="/about"
        />
        <NavigationPages
          title="Expériences"
          description="Henri 8 · Epitech"
          href="/experiences"
        />
        <NavigationPages
          title="Projets marquants"
          description="Whitecoats · HoliYou"
          href="/projects"
        />
      </nav>

      <Contact
        title="Contactez-moi"
        subtitle="Disponible pour une alternance"
        email="guillaume1.reboullet@epitech.eu"
        phone="+33 7 44 92 00 83"
        linkedinUrl="https://www.linkedin.com/in/guillaume-reboullet/"
        githubUrl="https://github.com/Guillaume-Reboullet/"
      />
    </>
  );
}
