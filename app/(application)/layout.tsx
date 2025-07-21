import { NavBar } from "@/components/organism/navbar";

export default function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <header>
        <NavBar />
      </header>

      <main className="container mx-auto py-10">{children}</main>
    </div>
  );
}
