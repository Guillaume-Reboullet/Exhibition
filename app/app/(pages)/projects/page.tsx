import Contact from "@/app/_components/Contact";
import Header from "@/app/_components/Header";
import Project from "@/app/_components/Project";

export default function Projects() {
  return (
    <div className="flex flex-col gap-(--spacing-default) sm:gap-(--spacing-section) xl:gap-(--spacing-major)">

      <Header title="Projets" subtitle="Web · Mobile · DevOps" />

      <div className="flex flex-col sm:gap-(--spacing-default) lg:max-w-275 align-self-center">
        <h3 id="web">Site web</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-(--spacing-related)">
          <Project
            title="Whitecoats"
            subtitle="Plateforme vidéo/e-learning médicale"
            description="Whitecoats est un média digital de formation médicale de nouvelle génération destiné à tous les professionnels de santé."
            images={[
              "/project/whitecoats/slide_1.png",
              "/project/whitecoats/slide_2.png",
              "/project/whitecoats/slide_3.png",
            ]}
            link="https://thewhitecoats.com/"
            linkName="thewhitecoats.com"
          />
          <Project
            title="Portfolio"
            subtitle="Minimaliste · Sophistiqué"
            description="Voici mon exposition de projets web et mobiles. Là où le design structure l’expérience et le détail fait la différence."
            images={[
              "/project/portfolio/slide_1.png",
              "/project/portfolio/slide_2.png",
              "/project/portfolio/slide_3.png",
            ]}
            quote="Inspiré par Area17 x macOS Tahoe"
          />
        </div>
        <h3 id="app">Application mobile</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-(--spacing-related)">
          <Project
            title="HoliYou"
            subtitle="Parcours PMA digitalisé"
            description="HoliYou est conçue pour accompagner les personnes en parcours de PMA, avec une approche personnalisée et humaine."
            images={[
              "/project/holiyou/slide_1.png",
              "/project/holiyou/slide_2.png",
              "/project/holiyou/slide_3.png",
            ]}
            linkOne="https://apps.apple.com/fr/app/holiyou-fertilit%C3%A9/id6736368655"
            linkNameOne="Apple Store"
            linkTwo="https://play.google.com/store/apps/details?id=com.holiyou.app"
            linkNameTwo="Google Play"
          />
          <Project
            title="Omniscience"
            subtitle="Apprentissage facilité par l’IA"
            description="Omniscience vise à bâtir une connaissance universelle, capable de s’adapter à chaque utilisateur, du débutant à l’expert."
            images={[
              "/project/holiyou/slide_1.png",
              "/project/holiyou/slide_2.png",
              "/project/holiyou/slide_3.png",
            ]}
            quote="Une connaissance plus accessible"
          />
        </div>
        <h3 id="devops">DevOps</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-(--spacing-related)">
          <Project
            title="Sentinel"
            subtitle="Observabilité · Supervision"
            description="Tableau de bord sécurisé pour documenter, maintenir et surveiller en temps réel mon serveur dédié et mes applications."
            images={[
              "/project/sentinel/slide_1.png",
              "/project/sentinel/slide_2.png",
              "/project/sentinel/slide_3.png",
            ]}
            link="https://my-server.guillaume-reboullet.com/"
            linkName="my-server.com"
          />
        </div>
      </div>

      <Contact
        title="Contactez-moi"
        subtitle="Disponible pour une alternance"
        email="guillaume1.reboullet@epitech.eu"
        phone="+33 7 44 92 00 83"
        linkedinUrl="https://www.linkedin.com/in/guillaume-reboullet/"
        githubUrl="https://github.com/Guillaume-Reboullet/"
        marginBottom={80}
      />
    </div>
  );
}