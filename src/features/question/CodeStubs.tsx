
import { Editor } from '@/components/editor/Editor'
import TextInput from '@/components/input/Input'
import React from 'react'

export const CodeStubs = () => {
  return (
    <section
        id="code-stubs"
        className="border rounded-xl mb-5 h-full w-full p-10 overflow-hidden"
      >
        <div className="flex flex-col gap-5">
          <h2 className=" font-bold text-xl">Code stubs</h2>
          <div className="flex flex-col gap-1 ">
            <label htmlFor="question name">Question name</label>
            <TextInput
              type="text"
              placeholder="Enter the question name"
              required={true}
              name="question name"
              value={""}
              onChange={() => {
                 }}
            />
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-base">Problem description</p>
            <Editor placeholder="Describe the problem" />
          </div>
        </div>
      </section>
  )
}
