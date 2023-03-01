import React, { useState } from "react";
import "allotment/dist/style.css";
import { useRouter } from "next/router";
import SideNavigation from "./SideNav/SideNavigation";
import ContentSidebar from "./ContentSidebar/ContentSidebar";
import { ArrowRightIcon } from "@radix-ui/react-icons";

export type ContentType = "problems" | "lessons" | "all";

const PlaygroundLayout = ({ children }: { children: React.ReactNode }) => {
  const [hidden, setHidden] = useState(false);
  const [activeContent, setActiveContent] = useState<ContentType>("all");

  const router = useRouter();
  const locationState = router.asPath;

  return (
    <div className="h-screen flex overflow-hidden bg-stone-100">
      {/* <VerticalNavigation light={true} codingPage={true} /> */}
      <SideNavigation
        exercisesHidden={hidden}
        setExercisesHidden={setHidden}
        setActiveContent={setActiveContent}
        activeContent={activeContent}
      />
      <div className="w-px h-full bg-slate-700 z-50"></div>
      <div className="w-full h-full flex flex-col">
        {/* <TopicSidebar isHidden={isHidden} setIsHidden={setIsHidden} /> */}
        <div className="flex w-full h-full">
          <ContentSidebar
            hidden={hidden}
            setHidden={setHidden}
            setActiveContent={setActiveContent}
            activeContent={activeContent}
          />
          <div
            className={`relative w-full h-full transition-all ${
              hidden ? "ml-0" : "ml-72"
            }`}
          >
            {children}
            <NextOverlay />
          </div>
        </div>
      </div>
    </div>
  );
};

const NextOverlay = () => {
  return (
    <div className="font-dm space-x-4 cursor-pointer max-w-[30rem] absolute flex items-center justify-between rounded-md opacity-50 transition hover:opacity-100 bg-white dark:bg-slate-800 dark:border-slate-600 shadow-lg shadow-black/5 border bottom-4 right-4 z-50 px-4 whitespace-nowrap">
      <div className="flex flex-col py-3 text-slate-900 dark:text-white">
        <h1 className="font-bold">Up Next:</h1>
        <p className="text-sm">Introduction to C++</p>
      </div>
      <div className=" flex items-end h-10">
        <ArrowRightIcon className="h-4 w-4 dark:text-blue-300 text-blue-500 " />
      </div>
    </div>
  );
};

export default PlaygroundLayout;
