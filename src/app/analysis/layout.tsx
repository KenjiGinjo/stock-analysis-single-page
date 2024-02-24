import AnalysisLayout from "@/layouts/AnalysisLayout";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <AnalysisLayout>{children}</AnalysisLayout>;
}
