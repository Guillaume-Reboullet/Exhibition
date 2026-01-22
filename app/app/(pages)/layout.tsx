import Back from "../_components/Back";

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Back />
      <div className="min-h-screen bg-frost px-(--spacing-default) sm:px-(--spacing-major) flex flex-col justify-around lg:items-center">
        {children}
      </div>
    </>
  );
}