import Header from "../_components/Header";
import Navigation from "../_components/Navigation";
import Contact from "../_components/Contact";

export default function Home() {
  return (
    <div className="min-h-screen bg-frost px-(--spacing-default) flex flex-col gap-(--spacing-major) justify-around">
      <Header title="Développeur" subtitle="Web & Mobile" />

      <nav className="flex flex-col gap-(--spacing-section)">
        <Navigation
          title="À propos"
          description="Qualité et fiabilité sont une nécessité."
          href="/about"
        />
        <Navigation
          title="Expériences"
          description="Henri 8 · Epitech"
          href="/experiences"
        />
        <Navigation
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
    </div>
  );
}
