import Carousel from '../Carousel';

interface BaseProjectProps {
  title: string;
  subtitle: string;
  description: string;
  images: string[];
}

interface ProjectWithLink extends BaseProjectProps {
  link: string;
  linkName: string;
  quote?: never;
}

interface ProjectWithLinks extends BaseProjectProps {
  linkOne: string;
  linkNameOne: string;
  linkTwo: string;
  linkNameTwo: string;
  quote?: never;
}

interface ProjectWithQuote extends BaseProjectProps {
  quote: string;
  link?: never;
  linkName?: never;
}

type ProjectProps = ProjectWithLink | ProjectWithLinks | ProjectWithQuote;

export default function Project(props: ProjectProps) {
  const { title, subtitle, description, images } = props;
  const link = 'link' in props ? props.link : undefined;
  const linkName = 'linkName' in props ? props.linkName : undefined;
  const quote = 'quote' in props ? props.quote : undefined;
  const linkOne = 'linkOne' in props ? props.linkOne : undefined;
  const linkNameOne = 'linkNameOne' in props ? props.linkNameOne : undefined;
  const linkTwo = 'linkTwo' in props ? props.linkTwo : undefined;
  const linkNameTwo = 'linkNameTwo' in props ? props.linkNameTwo : undefined;

  return (
    <div className='flex flex-col gap-(--spacing-related) h-full'>
      <div>
        <h3>{title}</h3>
        <p className='small-text text-lavender!'>{subtitle}</p>
      </div>
      <Carousel images={images} />
      <div className='flex flex-col gap-(--spacing-micro) grow'>
        <p className='small-text font-serif'>{description}</p>
        <div className='mt-auto w-full'>
          {link && linkName && <a href={link} target="_blank" rel="noopener noreferrer" className='small-text text-sm! xl:text-[16px]! italic text-lavender! font-serif block text-right'>{linkName}</a>}
          {linkOne && linkNameOne && linkTwo && linkNameTwo && (
            <div className='flex justify-between w-full'>
              <a href={linkOne} target="_blank" rel="noopener noreferrer" className='small-text text-sm! xl:text-[16px]! italic text-lavender! font-serif'>{linkNameOne}</a>
              <a href={linkTwo} target="_blank" rel="noopener noreferrer" className='small-text text-sm! xl:text-[16px]! italic text-lavender! font-serif'>{linkNameTwo}</a>
            </div>
          )}
          {quote && <blockquote className='small-text text-sm! xl:text-[16px]! italic text-lavender! font-serif text-right'>"{quote}"</blockquote>}
        </div>
      </div>
    </div>
  );
}