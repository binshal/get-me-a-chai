import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="flex justify-center flex-col gap-4 items-center h-[44vh] text-white">
        <div className="font-bold flex gap-2 justify-center items-center text-5xl">
          Buy me a Chai!{" "}
          <span>
            <img className="invertImg" src="/tea.gif" width={80} alt="tea-image" />
          </span>
        </div>
        <p>Crowd fund raising platform!, Start Now</p>
        <div>
        <Link href={"/login"}>
          <button
            type="button"
            className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            Start Here
          </button>
          </Link>
           
          <Link href="/about">
          <button
            type="button"
            className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            Read more
          </button>
          </Link>
        </div>
      </div>
      <div className="bg-white h-1 opacity-10"></div>
      <div className="text-white container mx-auto pb-16 pt-14">
        <h2 className="text-2xl font-bold text-center mb-14">
          Anyone can buy you a Chai!
        </h2>
        <div className="flex gap-4 justify-around">
          <div className="item space-y-3 flex flex-col items-center justify-center">
            <img
              className="bg-slate-400 rounded-full p-2 text-black"
              src="/man.gif"
              width={60}
              alt="man-gif"
            />
            <p className="font-bold">People want to help you</p>
            <p className="text-center">Some are available to help you</p>
          </div>
          <div className="item space-y-3 flex flex-col items-center justify-center">
            <img
              className="bg-slate-400 rounded-full p-2 text-black"
              src="/coin.gif"
              width={60}
              alt="man-gif"
            />
            <p className="font-bold">People want to help you</p>
            <p className="text-center">Some are available to help you</p>
          </div>
          <div className="item space-y-3 flex flex-col items-center justify-center">
            <img
              className="bg-slate-400 rounded-full p-2 text-black"
              src="/group.gif"
              width={60}
              alt="man-gif"
            />
            <p className="font-bold">People want to help you</p>
            <p className="text-center">Some are available to help you</p>
          </div>
        </div>
      </div>

      <div className="bg-white h-1 opacity-10"></div>
      <div className="text-white container mx-auto pb-16 pt-14 flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold text-center mb-14">
          Learn more about us
        </h2>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/UrsmFxEIp5k?si=gb5y4LxkhE1iYjp_"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    </>
  );
}
