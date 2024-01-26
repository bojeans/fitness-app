import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fitness App",
  description: "description coming soon :)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div>{children}</div>;
}
