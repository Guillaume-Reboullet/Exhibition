import Back from "@/app/_components/Back";
import Contact from "@/app/_components/Contact";
import Header from "@/app/_components/Header";
import ExperienceCard from "@/app/_components/ExperienceCard";

export default function Experiences() {
  return (
    <>
      <Header title="Expériences" subtitle="Henri 8 x Epitech" />

      <div className="flex flex-col gap-(--spacing-section) lg:max-w-250 align-self-center">

        {/* Expérience Professionnelle */}
        <div className="flex flex-col gap-(--spacing-default)">
          <h3>Professionnel</h3>
          <ExperienceCard
            title="Freelance"
            location="Paris"
            date="Octobre 2025 – Aujourd'hui"
            role="Développeur Web & Mobile Full Stack"
            description="En parallèle de mes études, j'exerce une activité de développeur freelance auprès de PME et de particuliers. J'interviens sur des missions de gestion de projet, de contrôle qualité (QA), de maintenance de sites web ainsi que sur des travaux d'extraction et de classification de données à la suite de campagnes d'emailing. Intégré à des projets déjà établis, j'ai assuré un rôle de conseil technique et fonctionnel auprès des clients, en veillant au respect des délais, à la qualité du produit livré et à la fiabilité des solutions mises en production."
          />
          <ExperienceCard
            title="Henri 8"
            location="Paris"
            date="2024 – 2025"
            role="Développeur Web & Mobile Full Stack"
            description="Chez Henri 8, j'ai participé au développement et à la maintenance d'applications web et mobiles en production, dans un contexte médical exigeant. J'ai contribué à la stabilisation d'une application critique, avec la correction d'environ 50 bugs, et à des déploiements complets (API, bases de données, front-end). Certaines de ces applications étaient utilisées par 200 utilisateurs simultanés lors d'événements live, impliquant un fort niveau de fiabilité et de support en production."
          />
        </div>

        {/* Formation */}
        <div className="flex flex-col gap-(--spacing-default)">
          <h3>Formation</h3>
          <ExperienceCard
            title="Epitech"
            location="Paris"
            date="2025 – 2028"
            role="Master of Science"
            description="À Epitech, le programme Pré-MSc m'a confronté à une approche beaucoup plus technique et exigeante du développement. Cette formation m'a demandé une grande rigueur dans ma manière de coder et d'aborder un problème, en privilégiant la compréhension, la structuration et la qualité des solutions plutôt que leur simple fonctionnement. Elle m'a permis de renforcer une méthode de travail précise et réfléchie, que j'applique aujourd'hui dans mes projets."
          />
          <ExperienceCard
            title="Epitech"
            location="Paris"
            date="2023 – 2025"
            role="Web@cademy"
            description="À la Web Academy, j'ai évolué sur des projets menés en solo, en duo ou en groupe, dans un cadre exigeant avec des contraintes réelles, des deadlines strictes et des soutenances régulières. Cette expérience m'a appris à structurer une idée ou une vision pour la transformer en projet cohérent, organisé et exploitable, tout en développant une forte autonomie et une approche polyvalente du développement."
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
      />

      <div className="flex justify-center mt-(--spacing-section)">
        <Back />
      </div>
    </>
  );
}