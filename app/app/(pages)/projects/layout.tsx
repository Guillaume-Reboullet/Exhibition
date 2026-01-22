import NavigationProjectsTypes from "@/app/_components/Navigation - Projects Types";
import Back from "../../_components/Back";

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Back />
      <div>
        {children}
      </div>
      <div className="flex justify-center">
        <NavigationProjectsTypes
          items={[
            { label: 'WEB', targetId: 'web' },
            { label: 'APP', targetId: 'app' },
            { label: 'DevOps', targetId: 'devops' },
          ]}
        />
      </div>
    </>
  );
}