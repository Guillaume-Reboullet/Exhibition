import Image from "next/image";
import Link from "next/link";

interface ContactProps {
  title: string;
  subtitle: string;
  email: string;
  phone: string;
  linkedinUrl: string;
  githubUrl: string;
  marginBottom?: number;
}

export default function Contact({
  title,
  subtitle,
  email,
  phone,
  linkedinUrl,
  githubUrl,
  marginBottom = 0,
}: ContactProps) {
  return (
    <section
      className="flex flex-col items-center gap-(--spacing-default)"
      style={{ marginBottom: `${marginBottom}px` }}
    >
      <div className="flex flex-col items-center gap-(--spacing-micro) text-center">
        <h3 className="text-2xl font-semibold text-prussian sm:text-4xl!">{title}</h3>
        <p className="small-text text-lavender! sm:text-2xl!">{subtitle}</p>
      </div>

      <div className="flex flex-col items-center gap-(--spacing-micro) text-center">
        <a
          href={`mailto:${email}`}
          className="small-text sm:text-2xl!"
        >
          {email}
        </a>
        <a
          href={`tel:${phone.replace(/\s/g, "")}`}
          className="small-text sm:text-2xl!"
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
            <Image src="/contact/linkedin.svg" alt="LinkedIn" width={36} height={36} />
          </Link>
          <Link
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="opacity-60 hover:opacity-100 transition-opacity"
          >
            <Image src="/contact/github.svg" alt="GitHub" width={36} height={36} />
          </Link>
        </div>
      </div>

    </section>
  );
}
