import Header from "../../_components/Header";
import NavigationPages from "../../_components/Navigation - Pages";
import Contact from "../../_components/Contact";
import NavigationPagesDesktop from "@/app/_components/Navigation - Pages Desktop";

export default function Home() {
  return (
    <>
      <Header title="Développeur" subtitle="Web & Mobile" />

      <nav className="flex flex-col gap-(--spacing-section) xl:hidden">
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

      <nav className="gap-(--spacing-major) hidden xl:flex justify-around">
        <NavigationPagesDesktop
          title="À propos"
          description="Qualité et fiabilité sont une nécessité."
          href="/about"
          items={[
            { textes: "Qui suis-je ?" },
            { textes: "Mes valeurs" },
            { textes: "Ce que je recherche" },
          ]}
        />
        <NavigationPagesDesktop
          title="Expériences"
          description=""
          href="/experiences"
          items={[
            { title: "Henri 8", subtitles: ["Alternance, Paris · 2024 – 2025"] },
            { title: "Epitech", subtitles: ["Web@cademy, Paris · 2023 – 2025", "Master of Science, Paris · 2025 – 2028"] },
          ]}
        />
        <NavigationPagesDesktop
          title="Projets marquants"
          description=""
          href="/projects"
          items={[
            { title: "Site web", subtitles: ["Whitecoats · Portfolio"] },
            { title: "Application mobile", subtitles: ["HoliYou · Omniscience"] },
            { title: "DevOps", subtitles: ["Sentinel"] },
          ]}
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
