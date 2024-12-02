import TextInput from "@/components/input/Input";
import React from "react";

export const Languages = () => {
  const divs = [];
  for (let index = 0; index < 20; index++) {
    divs.push(
      <div key={index} className="flex flex-row flex-wrap gap-1">
        <label htmlFor={`C${index}`}>C</label>
        <TextInput
          type="checkbox"
          placeholder="Start typing a language name..."
          required={true}
          name={`C${index}`}
          value={`C${index}`}
          onChange={() => {}}
        />
      </div>
    );
  }
  return (
    <section
      id="languages"
      className="border rounded-xl mb-5  w-full p-10 overflow-hidden"
    >
      <div className="flex flex-col gap-5">
        <h2 className=" font-bold text-xl">Languages</h2>
        <p className="text-base">
          Candidates will have an option to solve this question in the selected
          languages
        </p>
        <div className="flex flex-col gap-1 ">
          <label htmlFor="search-language">Search language</label>
          <TextInput
            type="text"
            placeholder="Start typing a language name..."
            required={true}
            name="search-language"
            value={""}
            onChange={() => {}}
          />
        </div>
        <div>

        <div className="flex flex-row gap-2 justify-start items-center">
          <input
            width={50}
            height={50}
            type="checkbox"
            placeholder="Start typing a language name..."
            required={true}
            name={`C`}
            value={`C`}
            onChange={() => {}}
          />
          <label htmlFor={`C`}>Popular languages</label>
        </div>
        <p className="text-sm">Code stubs generated automatically</p>
        </div>
        <div className="flex flex-row flex-wrap gap-1">{divs}</div>
      </div>
    </section>
  );
};
