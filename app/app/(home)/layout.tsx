export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen bg-frost px-(--spacing-major) flex flex-col gap-32 justify-around">
      {children}
    </div>
  );
}