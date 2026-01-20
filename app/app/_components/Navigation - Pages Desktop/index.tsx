import Image from "next/image";
import Link from "next/link";

interface NavigationProps {
  title: string;
  description?: string;
  href: string;
  items: { title?: string; subtitles?: string[]; textes?: string }[];
}

export default function NavigationPagesDesktop({ title, description, href, items }: NavigationProps) {
  const hasTextes = items.some(item => item.textes);
  const hasItemsWithTitle = items.some(item => item.title || item.subtitles);

  return (
    <Link
      href={href}
      className="flex h-75"
    >
      <div className="flex gap-(--spacing-micro)">
        <div className="flex flex-col gap-(--spacing-default)">
          {(title || description) && (
            <div className="flex flex-col gap-(--spacing-micro) medium-text">
              {title && <h3>{title}</h3>}
              {description && <p>{description}</p>}
            </div>
          )}
          {hasTextes && (
            <div className="flex flex-col gap-(--spacing-micro)">
              {items.map((item, index) => (
                item.textes && <p key={index} className="medium-text font-serif">{item.textes}</p>
              ))}
            </div>
          )}
          {hasItemsWithTitle && (
            <div>
              {items.map((item, index) => (
                (item.title || item.subtitles) && (
                  <div key={index} className="mb-2">
                    {item.title && <p className="medium-text">{item.title}</p>}
                    {item.subtitles && item.subtitles.length > 0 && (
                      <ul className="list-disc list-inside">
                        {item.subtitles.map((subtitle, subIndex) => (
                          <li key={subIndex} className="secondary-text text-lavender! list-none">{subtitle}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                )
              ))}
            </div>
          )}
        </div>
        <Image
          src="/arrow_right.svg"
          alt=""
          width={24}
          height={24}
          className="text-dusk opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition-all self-end"
        />
      </div>
    </Link>
  );
}