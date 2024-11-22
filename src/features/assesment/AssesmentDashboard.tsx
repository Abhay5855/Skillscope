'use client'

import Navbar from '@/components/navbar/Navbar';
import AssesmentBanner from './AssesmentBanner';
import AssesmentScreenshare from './AssesmentScreenshare';
import AssesmentEvalutation from './AssesmentEvaluation';
import { sessions } from '@/data/data';
import { useSearchParams } from 'next/navigation';


const AssesmentDashboard = () => {
    const searchParams = useSearchParams();
    const search = searchParams.get('id');

    if (!search) {
        return (
            <>
                <Navbar includeLinks={false} includeAssesmentLinks={true} />
                <div className='container mx-auto w-full h-[calc(100vh-4rem)] flex items-center justify-center'>
                    <h1 className='text-4xl font-bold'>No ID provided!</h1>
                </div>
            </>
        )
    }

    const item = sessions.filter(({id}) => id == Number(search!));

    if (item.length == 0) {
        return (
            <>
                <Navbar includeLinks={false} includeAssesmentLinks={true} />
                <div className='container mx-auto w-full h-[calc(100vh-4rem)] flex items-center justify-center'>
                    <h1 className='text-4xl font-bold'>No assesment found that matches that ID!</h1>
                </div>
            </>
        )

    }    

    return (
        <>
            <Navbar includeLinks={false} includeAssesmentLinks={true} />
            <div className='container mx-auto py-8 space-y-3'>
                <AssesmentBanner {...item[0]} />
                <div className='w-full min-h-screen grid grid-cols-4 space-x-3'>
                    <div className='col-span-3'>
                        <AssesmentScreenshare />
                    </div>
                    <div className='col-span-1'>
                        <h2 className='text-2xl mx-3 font-bold mt-4'>Evaluation</h2>
                        <AssesmentEvalutation />
                    </div>
                </div>
            </div>
        </>
    )
}

export default AssesmentDashboard;