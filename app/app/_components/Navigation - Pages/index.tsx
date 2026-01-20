import Image from "next/image";
import Link from "next/link";

interface NavigationProps {
  title: string;
  description: string;
  href: string;
}

export default function NavigationPages({ title, description, href }: NavigationProps) {
  return (
    <Link
      href={href}
      className="flex items-center justify-between gap-(--spacing-micro)"
    >
      <div className="flex flex-col gap-(--spacing-micro)">
        <h3>
          {title}
        </h3>
        <p className="small-text">{description}</p>
      </div>
      <Image
        src="/arrow_right.svg"
        alt=""
        width={24}
        height={24}
        className="text-dusk opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition-all"
      />
    </Link>
  );
}
