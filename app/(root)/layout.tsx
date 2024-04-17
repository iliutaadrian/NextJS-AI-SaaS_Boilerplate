import dynamic from "next/dynamic";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const CrispWithNoSSR = dynamic(() => import("../../components/crisp"));
  return (
    <div className="h-full">
      <CrispWithNoSSR />
      {children}
    </div>
  );
}
