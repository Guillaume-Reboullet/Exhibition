export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen bg-frost px-(--spacing-section) flex flex-col gap-(--spacing-default) sm:gap-(--spacing-major) justify-around items-center">
      {children}
    </div>
  );
}