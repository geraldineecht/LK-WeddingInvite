import { type AppType } from "next/dist/shared/lib/utils";
import "@/styles/globals.css";
import Navbar from "@/components/Navbar";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <div className="relative w-full flex flex-col ">
        <Navbar></Navbar>
      </div>
      <Component {...pageProps} />
    </>
  )
};

export default MyApp;
