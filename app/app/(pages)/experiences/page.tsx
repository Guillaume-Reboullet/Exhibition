import Back from "@/app/_components/Back";
import Contact from "@/app/_components/Contact";
import Header from "@/app/_components/Header";

export default function Experiences() {
  return (
    <>
      <Header title="Expériences" subtitle="Henri 8 x Epitech" />


      <div className="flex flex-col gap-(--spacing-section) lg:max-w-250 align-self-center">
        {/* Expérience 1 */}
        <div className="flex flex-col gap-(--spacing-default)">
          <div className="flex flex-col gap-(--spacing-micro)">
            <h3>Henri 8</h3>
            <div className="flex flex-col">
              <span className="small-text text-lavender!">Alternance, Paris · 2024 – 2025</span>
              <span className="small-text text-prussian">Développeur Web & Mobile Full Stack</span>
            </div>
          </div>
          <div className="flex flex-col gap-(--spacing-related)">
            <p className="small-text font-serif">Agence spécialisée dans la communication médicale, les applications santé et les événements scientifiques.</p>
            <p className="small-text font-serif">Chez Henri 8, j’ai participé au développement et à la maintenance d’applications web et mobiles en production, dans un contexte médical exigeant. J’ai contribué à la stabilisation d’une application critique, avec la correction d’environ 50 bugs, et à des déploiements complets (API, bases de données, front-end). Certaines de ces applications étaient utilisées par 200 utilisateurs simultanés lors d’événements live, impliquant un fort niveau de fiabilité et de support en production.</p>
          </div>
        </div>

        {/* Expérience 2 */}
        <div className="flex flex-col gap-(--spacing-default)">
          <div className="flex flex-col gap-(--spacing-micro)">
            <h3>Epitech</h3>
            <div className="flex flex-col">
              <span className="small-text text-lavender!">Web@cademy - MSc, Paris · 2023 – 2028</span>
              <span className="small-text text-prussian">Développeur Web & Mobile Full Stack</span>
            </div>
          </div>
          <div className="flex flex-col gap-(--spacing-related)">
            <p className="small-text font-serif">Formation reposant sur une approche par projets, axée sur l’échange, l’autonomie et la proximité avec le monde professionnel.</p>
            <p className="small-text font-serif">À la Web Academy, j’ai évolué sur des projets menés en solo, en duo ou en groupe, dans un cadre exigeant avec des contraintes réelles, des deadlines strictes et des soutenances régulières. Cette expérience m’a appris à structurer une idée ou une vision pour la transformer en projet cohérent, organisé et exploitable, tout en développant une forte autonomie et une approche polyvalente du développement. </p>
            <p className="small-text font-serif">À Epitech, le programme Pré-MSc m’a confronté à une approche beaucoup plus technique et exigeante du développement. Cette formation m’a demandé une grande rigueur dans ma manière de coder et d’aborder un problème, en privilégiant la compréhension, la structuration et la qualité des solutions plutôt que leur simple fonctionnement. Elle m’a permis de renforcer une méthode de travail précise et réfléchie, que j’applique aujourd’hui dans mes projets.</p>
          </div>
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