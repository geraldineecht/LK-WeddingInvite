import Ceremonia from "@/components/Ceremonia";
import Head from "next/head";

export default function CeremoniaPagina() {
  return (
    <>
      <Head>
        <title>LK Wedding</title>
        <meta name="description" content="Lucía y Kevin" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex -min-h-screen flex-col bg-slate-50 antialiased">
        <div className="flex -h-screen w-full items-start flex-col -items-center -justify-center">
            <div className="relative w-full flex flex-col -bg-[#fefce8] -bg-[#EFEFEF]">
                <Ceremonia></Ceremonia>
            </div>
        </div>
      </main>
    </>
  );
}