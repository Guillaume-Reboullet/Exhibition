import Back from "../_components/Back";

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen bg-frost px-(--spacing-default) flex flex-col gap-(--spacing-major) justify-around">
      {children}
    </div>
  );
}