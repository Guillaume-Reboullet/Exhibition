import Image from "next/image";
import Link from "next/link";

interface NavigationProps {
  title: string;
  description?: string;
  images?: { src: string; alt: string }[];
  href: string;
  items: { title?: string; subtitles?: string[]; textes?: string }[];
}

export default function NavigationPagesTablet({ title, description, images, href, items }: NavigationProps) {
  const hasTextes = items.some(item => item.textes);
  const hasItemsWithTitle = items.some(item => item.title || item.subtitles);

  return (
    <Link
      href={href}
      className="flex w-full max-w-200 border border-dusk/20 rounded-lg p-(--spacing-related) group hover:bg-dusk/10 transition-all"
    >
      <div className="flex gap-(--spacing-related) w-full justify-between">
        <div className="flex flex-col justify-between gap-(--spacing-default)">
          {(title || description) && (
            <div className="flex flex-col gap-(--spacing-micro) small-text">
              {title && <h3>{title}</h3>}
              {description && <p>{description}</p>}
            </div>
          )}
          <div className="flex justify-between gap-(--spacing-default)">
            {hasTextes && (
              <div className="flex justify-around gap-(--spacing-default)">
                {images && images.length > 0 && (
                  <div className="relative w-24 h-32">
                    <Image
                      src={`/${images[0].src}`}
                      alt={images[0].alt}
                      fill
                      className="rounded-md object-cover"
                    />
                  </div>
                )}
                <div className="flex flex-col gap-(--spacing-default)">
                  {items.map((item, index) => (
                    item.textes && (
                      <p key={index} className="small-text font-serif">{item.textes}</p>
                    )
                  ))}
                </div>
              </div>
            )}
            <div className="flex justify-between gap-(--spacing-default)">
              {hasItemsWithTitle && (
                <div className="flex flex-col justify-between gap-(--spacing-related)">
                  {items.map((item, index) => (
                    (item.title || item.subtitles) && (
                      <div key={index} className="flex items-center gap-(--spacing-micro)">
                        {images && images[index] && (
                          <div className="relative w-16 h-16">
                            <Image
                              src={`/${images[index].src}`}
                              alt={images[index].alt}
                              fill
                              className="rounded-md object-contain"
                            />
                          </div>
                        )}
                        <div className="flex flex-col">
                          {item.title && <p className="medium-text">{item.title}</p>}
                          {item.subtitles && item.subtitles.length > 0 && (
                            <ul>
                              {item.subtitles.map((subtitle, subIndex) => (
                                <li key={subIndex} className="small-text text-lavender! list-none">{subtitle}</li>
                              ))}
                            </ul>
                          )}
                        </div>
                      </div>
                    )
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
        <Image
          src="/ui/arrow_right.svg"
          alt=""
          width={48}
          height={48}
          className="text-dusk opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition-all self-end"
        />
      </div>
    </Link>
  );
}