interface HeaderProps {
  title: string;
  subtitle: string;
}

export default function Header({ title, subtitle }: HeaderProps) {
  return (
    <header className="flex flex-col items-center gap-(--spacing-micro) pt-(--spacing-default)">
      <h1>
        {title}
      </h1>
      <p className="secondary-text">{subtitle}</p>
    </header>
  );
}
