import React, { useState } from 'react';
import { criteria } from '@/data/data';
import { Star } from 'lucide-react';
import { Textarea } from '@headlessui/react';

type Criterium = {
    title: string,
    description: string,
}

interface AssesmentEvalutationProps {
    criteriums?: Criterium[]
}

const AssesmentEvalutation = ({ criteriums = criteria } : AssesmentEvalutationProps) => {
    const [stars, setStars] = useState(Array(criteriums.length).fill(0));

    const updateStars = (i: number, j: number) => {
        return (prev) => {
            const newStars = [...prev];
            newStars[i] = j + 1;
            return newStars
        }
    }

    return (
        <div className='flex flex-col shadow-md rounded-xl p-3 space-y-3'>
            {criteriums?.map((item, i) => (
                <React.Fragment key={i}>
                    <div className='w-full flex flex-col gap-4'>
                        <div className='inline-flex justify-between'>
                            <span className='font-medium'>{item.title}</span>
                            <span className='text-gray-600'>Score: 0/5</span>
                        </div>
                        <p className='text-gray-600'>{item.description}</p>
                        <div className='flex w-3/4 text-gray-300'>
                            {[...Array(5)].map((_, j) => {
                                if((stars[i] - j) >= 1) {
                                    return (
                                        <button key={j} onClick={() => setStars(updateStars(i, j))} className='h-full w-full'>
                                            <Star fill='yellow' />
                                        </button>
                                    )
                                }
                                
                                return (
                                <button key={j} onClick={() => setStars(updateStars(i, j))} className='h-full w-full'>
                                    <Star fill='#d1d5db' />
                                </button>
                            )
                            })}
                        </div>
                    </div>
                </React.Fragment>
            ))}
            <div className='flex flex-col'>
                <span className='font-medium'>Feedback</span>
                <Textarea className='rounded-lg border-gray-300 h-32' placeholder='Provide detailed feedback...'></Textarea>
            </div>
        </div>
    )
}

export default AssesmentEvalutation;