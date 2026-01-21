export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen bg-frost px-(--spacing-default) sm:px-(--spacing-major) flex flex-col gap-(--spacing-default) sm:gap-(--spacing-major) justify-around lg:items-center">
        {children}
    </div>
  );
}