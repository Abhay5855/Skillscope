import { Editor } from "@/components/editor/Editor";
import TextInput from "@/components/input/Input";
import React, { useState } from "react";

const QuestionDetails = () => {
  const [questionName, setQuestionName] = useState<String>("");
  return (
    <>
      <section
        id="question-details"
        className="border rounded-xl mb-5 h-full w-full p-10 overflow-hidden"
      >
        <div className="flex flex-col gap-5">
          <h2 className=" font-bold text-xl">Question Details</h2>
          <div className="flex flex-col gap-1 ">
            <label htmlFor="question name">Question name</label>
            <TextInput
              type="text"
              placeholder="Enter the question name"
              required={true}
              name="question name"
              value={""}
              onChange={(e) => {
                setQuestionName(e.target.value);
              }}
            />
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-base">Problem description</p>
            <Editor placeholder="Describe the problem" />
          </div>
        </div>
      </section>
      <section
        id="question-properties"
        className="border rounded-xl mb-5 w-full p-10"
      >
        <div className="flex flex-col gap-5">
          <h2 className=" font-bold text-xl">Question properties</h2>
          <div className="flex flex-row justify-between gap-1 ">
            <div className="w-[30%]">
              <label htmlFor="time">Recommended Time</label>
              <TextInput
                type="number"
                placeholder="Enter in minutes"
                required={true}
                name="time"
                value={""}
                onChange={(e) => {
                  setQuestionName(e.target.value);
                }}
              />
            </div>
            <div className="w-[65%] flex flex-col">
              <p className="text-base">Tags</p>
              <select className="w-full rounded-md text-slate-500 p-2.5">
                <option  disabled selected hidden>
                  Select tags
                </option>
                <option value="Abstraction">Abstraction</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      <section
        id="interview-guidelines"
        className="border rounded-xl mb-5 w-full p-10 overflow-hidden"
      >
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-1">
            <h2 className=" font-bold text-xl">Interviewer Guidelines</h2>
            <p className="text-base ">Notes are not shown to the candidate. They are visible to you and your team members in this section as well as in the candidate report</p>
          </div>
          <Editor placeholder="Specify reviewer quidelines...." />
        </div>
      </section>
    </>
  );
};

export default QuestionDetails;
