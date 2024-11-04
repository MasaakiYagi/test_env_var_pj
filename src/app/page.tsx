import ClientCounter from "@/components/ClientServer";
import ServerCounter from "@/components/ServerCounter";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <ServerCounter />
        <ClientCounter />
      </div>
    </main>
  );
}
