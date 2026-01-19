import Image from "next/image";
import Link from "next/link";

interface NavigationProps {
  title: string;
  description: string;
  href: string;
}

export default function Navigation({ title, description, href }: NavigationProps) {
  return (
    <Link
      href={href}
      className="flex items-center justify-between gap-(--spacing-micro)"
    >
      <div className="flex flex-col gap-(--spacing-micro)">
        <h3 className="text-2xl font-semibold text-prussian group-hover:text-dusk transition-colors">
          {title}
        </h3>
        <p className="text-sm text-prussian">{description}</p>
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
