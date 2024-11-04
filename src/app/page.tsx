import ClientCounter from "@/components/ClientServer";
import ServerCounter from "@/components/ServerCounter";
import Image from "next/image";

interface PageProps {
  searchParams: {
    serverCount?: string;
  };
}

export default function Home({ searchParams }: PageProps) {
  // serverCountパラメータが存在しなければ -1 を初期値とする
  const initialCount = searchParams.serverCount ? parseInt(searchParams.serverCount) : -1;
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <ServerCounter initialCount={initialCount} />
        <ClientCounter />
      </div>
    </main>
  );
}
