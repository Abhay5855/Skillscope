"use client";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import { useState } from "react";
import QuestionDetails from "./QuestionDetails";
import { Testcases } from "./Testcases";
import { Languages } from "./Languages";
import { CodeStubs } from "./CodeStubs";

const categories = [
  {
    name: "Question",
    content: <QuestionDetails />,
  },
  {
    name: "Languages",
    content: <Languages/>,
  },
  {
    name: "Code Stubs",
    content: <CodeStubs/>,
  },
  {
    name: "Testcases",
    content: <Testcases/>,
  },
];

export const QuestionContainer = () => {
  return (
    <div className="flex w-full h-[90vh] justify-center ">
      <div className="w-full flex flex-col flex-grow h-[85vh]">
        <TabGroup className="flex flex-row p-1 w-full h-[85vh] justify-end items-start">
          <TabList className="flex flex-col gap-4 w-[25%]">
            <h1 className="text-2xl font-bold py-3">Create Coding Question</h1>
            <div className="">
                {categories.map(({ name }, index) => (
                  <Tab
                    key={name}
                    className={`flex justify-center items-center py-2 pr-5 text-slate-500 px-3 font-semibold focus:outline-none data-[selected]:text-primary data-[selected]:border-blue-500 data-[selected]:border-l-2 `}
                  >
                    <span className="m-2 border h-6 w-6 text-slate-500 border-gray-500 rounded-full text-sm ">
                      {index + 1}
                    </span>
                    <div>
                      <p className="text-start text-slate-500 text-sm">Step {index + 1}</p>
                      <h2
                      className="text-xl"
                      >
                        {name}
                      </h2>
                    </div>
                  </Tab>
                ))}
            </div>
          </TabList>
          <TabPanels className="flex mt-14 w-[70%] h-[75vh] p-2 overflow-auto">
            {categories.map(({ name, content }) => (
              <TabPanel key={name} className=" w-[90%]">
                <div className="h-[65vh] m-3 ">{content}</div>
              </TabPanel>
            ))}
          </TabPanels>
        </TabGroup>
      </div>
    </div>
  );
};
