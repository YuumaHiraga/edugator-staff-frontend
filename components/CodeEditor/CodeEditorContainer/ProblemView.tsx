import React from "react";
import { Markdown } from "components/shared/Markdown";
import * as ScrollArea from "@radix-ui/react-scroll-area";

interface Props {
  problemTitle: string;
  problemStatement: string;
}

export const ProblemView = ({ problemTitle, problemStatement }: Props) => {
  return (
    <div className="flex w-full h-full flex-col">
      <div className="w-full dark:border-b-slate-700 border-b-slate-300 pb-3 border-b pt-4 pl-5 pr-3 dark:bg-nav-darkest bg-slate-200">
        <p className="text-sm text-slate-800 font-dm font-bold dark:text-white">
          Problems
          <span className="text-slate-500 dark:text-slate-400 font-normal truncate">
            &nbsp;&nbsp;&gt;&nbsp;&nbsp;{problemTitle}
          </span>
        </p>
      </div>
      <ScrollArea.Root className="bg-slate-50 h-full w-full overflow-hidden dark:bg-nav-darker">
        <ScrollArea.Viewport
          className="!flex flex-col px-5 h-full w-full"
          asChild
        >
          <h1 className="text-4xl font-ambit font-semibold text-slate-900 dark:text-slate-100 mb-4 mt-12">
            {problemTitle}
          </h1>
          <Markdown markdownString={problemStatement} />
          <div className="h-12 w-full min-h-[3rem]"></div>
          <ScrollArea.Scrollbar
            className="flex select-none touch-none p-0.5 group bg-neutral-200 dark:bg-slate-900 transition duration-[160ms] ease-out hover:bg-neutral-300 dark:hover:bg-slate-800 data-[orientation=vertical]:w-2.5 data-[orientation=horizontal]:flex-col data-[orientation=horizontal]:h-2.5"
            orientation="vertical"
          >
            <ScrollArea.Thumb className="flex-1 bg-neutral-300 group-hover:bg-neutral-400 dark:bg-slate-800 group-hover:dark:bg-slate-700 rounded-[10px] relative before:content-[''] before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:w-full before:h-full before:min-w-[44px] before:min-h-[44px]" />
          </ScrollArea.Scrollbar>
          <ScrollArea.Corner className="bg-white/20" />
        </ScrollArea.Viewport>
      </ScrollArea.Root>
    </div>
  );
};
