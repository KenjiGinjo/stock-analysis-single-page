import AnalysisLayout from "@/layouts/AnalysisLayout";

export default function ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <AnalysisLayout>{children}</AnalysisLayout>;
}
