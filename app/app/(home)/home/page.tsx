import Header from "../../_components/Header";
import NavigationPagesMobile from "../../_components/Navigation - Pages Mobile";
import Contact from "../../_components/Contact - Mobile";
import NavigationPagesDesktop from "@/app/_components/Navigation - Pages Desktop";
import NavigationPagesTablet from "@/app/_components/Navigation - Pages Tablet";
import TechBanner from "@/app/_components/TechBanner";

export default function Home() {
  return (
    <>
      <Header title="Développeur" subtitle="Web & Mobile" />


      <nav className="flex flex-col gap-(--spacing-section) md:hidden max-w-120">
        <NavigationPagesMobile
          title="À propos"
          description="Qualité et fiabilité sont une nécessité."
          href="/about"
        />
        <NavigationPagesMobile
          title="Expériences"
          description="Henri 8 · Epitech"
          href="/experiences"
        />
        <NavigationPagesMobile
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
            images={[{ src: "web_icon.png", alt: "Icon web site" }, { src: "mobile_icon.png", alt: "Icon mobile app" }, { src: "devops_icon.webp", alt: "Icon devops" }]}
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
          images={[{ src: "web_icon.png", alt: "Icon web site" }, { src: "mobile_icon.png", alt: "Icon mobile app" }, { src: "devops_icon.webp", alt: "Icon devops" }]}
          href="/projects"
          items={[
            { title: "Site web", subtitles: ["Whitecoats · Portfolio"] },
            { title: "Application mobile", subtitles: ["HoliYou · Omniscience"] },
            { title: "DevOps", subtitles: ["Sentinel"] },
          ]}
        />
      </nav>

      <TechBanner
        technologies={[
          { src: "tech/react.png", alt: "React" },
          { src: "tech/tailwind.svg", alt: "Tailwind CSS" },
          { src: "tech/typescript.png", alt: "TypeScript" },
          { src: "tech/nestjs.svg", alt: "NestJS" },
          { src: "tech/postgresql.png", alt: "PostgreSQL" },
          { src: "tech/docker.png", alt: "Docker" },
          { src: "tech/nginx.svg", alt: "Nginx" },
          { src: "tech/mongodb.svg", alt: "MongoDB" },
          { src: "tech/python.svg", alt: "Python" },
          { src: "tech/java.png", alt: "Java" },
          { src: "tech/github.svg", alt: "GitHub" },
          { src: "tech/html.webp", alt: "HTML" },
          { src: "tech/css.png", alt: "CSS" },
          { src: "tech/js.png", alt: "JavaScript" },
        ]}
      />

      <Contact
        title="Contactez-moi"
        subtitle="Disponible pour une alternance"
        email="guillaume1.reboullet@epitech.eu"
        phone="+33 7 44 92 00 83"
        linkedinUrl="https://www.linkedin.com/in/guillaume-reboullet/"
        githubUrl="https://github.com/Guillaume-Reboullet/"
        marginBottom={24}
      />
    </>
  );
}
