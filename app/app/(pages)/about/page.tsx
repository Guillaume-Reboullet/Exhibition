import Header from "@/app/_components/Header";
import Image from "next/image";
import Contact from "@/app/_components/Contact";
import Back from "@/app/_components/Back";

export default function About() {
  return (
    <div className="flex flex-col gap-(--spacing-default) sm:gap-(--spacing-section) xl:gap-(--spacing-major)">
      <Header title="À propos" subtitle="Guillaume Reboullet" />

      <div className="flex flex-col gap-(--spacing-section) lg:max-w-250 align-self-center">
        <div className="flex flex-col gap-(--spacing-related) items-center w-full sm:flex-row sm:items-center sm:justify-center sm:gap-(--spacing-default)">
          <Image
            src="/photo_profile.jpeg"
            alt="Portrait de Guillaume Reboullet"
            width={125}
            height={125}
            className="rounded-md lg:w-120"
          />
          <div className="flex flex-col items-between gap-(--spacing-default)">
            <div className="flex flex-col gap-(--spacing-micro)">
              <h3>Qui suis-je ?</h3>
              <p className="small-text font-serif">Étudiant en 3ᵉ année en école d’informatique à Epitech, je m’intéresse aux projets qui ont du sens. J’ai développé un intérêt particulier pour le domaine de la santé, où j’ai pu contribuer à des projets sérieux et humains.</p>
            </div>
            <div className="hidden lg:flex flex-col gap-(--spacing-micro)">
              <h3>Ce que je recherche</h3>
              <p className="small-text font-serif">Je recherche une alternance en développement web ou mobile afin de continuer à progresser techniquement sur des projets exigeants, utiles et à fort impact, pouvant s’étendre jusqu’en 2028.</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-(--spacing-related)">
          <h3>Mes valeurs</h3>
          <div className="flex flex-col gap-(--spacing-related) lg:flex-row lg:gap-(--spacing-default) lg:justify-between">
            <div className="flex flex-col gap-(--spacing-micro) lg:max-w-75 border border-dusk/20 rounded-lg p-(--spacing-related) group transition-all hover:shadow-lg">
              <h6 className="medium-text">Qualité</h6>
              <p className="small-text font-serif">Je privilégie des solutions fiables et maintenables, même si cela demande plus de réflexion en amont.</p>
            </div>
            <div className="flex flex-col gap-(--spacing-micro) lg:max-w-75 border border-dusk/20 rounded-lg p-(--spacing-related) group transition-all hover:shadow-lg">
              <h6 className="medium-text">Responsabilité</h6>
              <p className="small-text font-serif">Ayant travaillé sur des projets en santé, je suis attentif à l'impact réel de ce que je développe.</p>
            </div>
            <div className="flex flex-col gap-(--spacing-micro) lg:max-w-75 border border-dusk/20 rounded-lg p-(--spacing-related) group transition-all hover:shadow-lg">
              <h6 className="medium-text">Travail d'équipe</h6>
              <p className="small-text font-serif">La réussite d'un projet repose sur la collaboration et la complémentarité des compétences au sein d'une équipe.</p>
            </div>
          </div>
        </div>
        <div className="lg:hidden flex flex-col gap-(--spacing-related)">
          <h3>Ce que je recherche</h3>
          <p className="small-text font-serif">Je recherche une alternance en développement web ou mobile afin de continuer à progresser techniquement sur des projets exigeants, utiles et à fort impact, pouvant s’étendre jusqu’en 2028.</p>
        </div>
      </div>

      <Contact
        title="Contactez-moi"
        subtitle="Disponible pour une alternance"
        email="guillaume1.reboullet@epitech.eu"
        phone="+33 7 44 92 00 83"
        linkedinUrl="https://www.linkedin.com/in/guillaume-reboullet/"
        githubUrl="https://github.com/Guillaume-Reboullet/"
        marginBottom={24}
      />

    </div>
  );
}
