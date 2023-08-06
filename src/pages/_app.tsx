import { type AppType } from "next/dist/shared/lib/utils";
import "@/styles/globals.css";
import Navbar from "@/components/Navbar";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <div className="absolute z-40 w-full flex flex-col bg-transparent">
        <Navbar></Navbar>
      </div>
      <Component {...pageProps} />
    </>
  )
};

export default MyApp;
