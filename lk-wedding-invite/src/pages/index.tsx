import Cover from "@/components/Cover";
import Invite from "@/components/Invite";
import Navbar from "@/components/Navbar";
import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>LK Wedding</title>
        <meta name="description" content="Lucía y Kevin" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col bg-slate-50 antialiased">
        <div className="flex -h-screen w-full items-start flex-col -items-center -justify-center">
			<Cover></Cover>
			<Invite></Invite>
        </div>
      </main>
    </>
  );
}
