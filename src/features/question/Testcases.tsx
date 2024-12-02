import TextInput from '@/components/input/Input'
import React from 'react'

export const Testcases = () => {
  return (
    <>
     <section
        id="interview-guidelines"
        className="border rounded-xl mb-5 w-full p-10 overflow-hidden"
      >
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-1">
            <h2 className=" font-bold text-xl">Testcases</h2>
            <p className="text-base ">A test case consists of input values to the program and the program and the expected output</p>
          </div>
          <div className='flex flex-row gap-5 w-[50%]'>
            <TextInput
                type="text"
                placeholder="+ Add test case"
                required={true}
                name="testcase"
                value={""}
                onChange={() => {   }}
                />
            <TextInput
                type="text"
                placeholder="+ Bulk Upload as ZIP"
                required={true}
                name="testcase"
                value={""}
                onChange={() => {   }}
                />

          </div>
        </div>
      </section>
    </>
  )
}
