import Header from "../../_components/Header";
import NavigationPages from "../../_components/Navigation - Pages";
import Contact from "../../_components/Contact";
import NavigationPagesDesktop from "@/app/_components/Navigation - Pages Desktop";
import NavigationPagesTablet from "@/app/_components/Navigation - Pages Tablet";

export default function Home() {
  return (
    <>
      <Header title="Développeur" subtitle="Web & Mobile" />

      <nav className="flex flex-col gap-(--spacing-section) md:hidden max-w-120">
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

      <nav className="gap-(--spacing-major) hidden md:flex xl:hidden justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-(--spacing-section)">
          <NavigationPagesTablet
            title="À propos"
            description="Qualité et fiabilité sont une nécessité."
            images={[{ src: "photo_profile.jpeg", alt: "Profile photo" }]}
            href="/about"
            items={[
              { textes: "Qui suis-je ?" },
              { textes: "Mes valeurs" },
              { textes: "Ce que je recherche" },
            ]}
            />
          <NavigationPagesTablet
            title="Expériences"
            description=""
            images={[{ src: "agence_henri_8_logo.jpeg", alt: "Agence Henri 8 logo" }, { src: "epitech_logo.png", alt: "Epitech logo" }]}
            href="/experiences"
            items={[
              { title: "Henri 8", subtitles: ["Alternance, Paris · 2024 – 2025"] },
              { title: "Epitech", subtitles: ["Web@cademy, Paris · 2023 – 2025", "Master of Science, Paris · 2025 – 2028"] },
            ]}
            />
          <NavigationPagesTablet
            title="Projets marquants"
            description=""
            images={[{ src: "web_icon.png", alt:"Icon web site"},{ src: "mobile_icon.png", alt:"Icon mobile app"}, { src: "devops_icon.webp", alt:"Icon devops"}]}
            href="/projects"
            items={[
              { title: "Site web", subtitles: ["Whitecoats · Portfolio"] },
              { title: "Application mobile", subtitles: ["HoliYou · Omniscience"] },
              { title: "DevOps", subtitles: ["Sentinel"] },
            ]}
            />
        </div>
      </nav>

      <nav className="gap-(--spacing-default) hidden xl:flex justify-between w-full">
        <NavigationPagesDesktop
          title="À propos"
          description="Qualité et fiabilité sont une nécessité."
          images={[{ src: "photo_profile.jpeg", alt: "Profile photo" }]}
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
          images={[{ src: "agence_henri_8_logo.jpeg", alt: "Agence Henri 8 logo" }, { src: "epitech_logo.png", alt: "Epitech logo" }]}
          href="/experiences"
          items={[
            { title: "Henri 8", subtitles: ["Alternance,Paris · 2024 – 2025"] },
            { title: "Epitech", subtitles: ["Web@cademy,Paris · 2023 – 2025", "Master of Science,Paris · 2025 – 2028"] },
          ]}
          />
        <NavigationPagesDesktop
          title="Projets marquants"
          description=""
          images={[{ src: "web_icon.png", alt:"Icon web site"},{ src: "mobile_icon.png", alt:"Icon mobile app"}, { src: "devops_icon.webp", alt:"Icon devops"}]}
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
