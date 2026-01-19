import Image from "next/image";
import Link from "next/link";

interface ContactProps {
  title: string;
  subtitle: string;
  email: string;
  phone: string;
  linkedinUrl: string;
  githubUrl: string;
}

export default function Contact({
  title,
  subtitle,
  email,
  phone,
  linkedinUrl,
  githubUrl,
}: ContactProps) {
  return (
    <section className="flex flex-col items-center gap-(--spacing-default) pb-[24px]">
      <div className="flex flex-col items-center gap-(--spacing-micro) text-center">
        <h2 className="text-2xl font-semibold text-prussian">{title}</h2>
        <p className="text-sm text-lavender">{subtitle}</p>
      </div>

      <div className="flex flex-col items-center gap-(--spacing-micro) text-center">
        <a
          href={`mailto:${email}`}
          className="text-prussian hover:text-dusk transition-colors"
        >
          {email}
        </a>
        <a
          href={`tel:${phone.replace(/\s/g, "")}`}
          className="text-prussian hover:text-dusk transition-colors"
        >
          {phone}
        </a>
        <div className="flex gap-(--spacing-default)">
          <Link
            href={linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="opacity-60 hover:opacity-100 transition-opacity"
          >
            <Image src="/linkedin.svg" alt="LinkedIn" width={24} height={24} />
          </Link>
          <Link
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="opacity-60 hover:opacity-100 transition-opacity"
          >
            <Image src="/github.svg" alt="GitHub" width={24} height={24} />
          </Link>
        </div>
      </div>

    </section>
  );
}
