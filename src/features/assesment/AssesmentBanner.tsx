import { UsersIcon, ClockIcon } from 'lucide-react';


interface AssesmentBannerProps {
    title: string,
    id: number,
    participants: string[],
}

const AssesmentBanner = ({title, id, participants} : AssesmentBannerProps) => {

    return (
        <div className='w-full flex justify-between'>
            <div className='flex-col gap-2'>
                <h2 className='text-2xl font-bold'>{title}</h2>
                <span className='text-gray-600'>Room ID: {id}</span>
            </div>
            <div className='flex items-center text-gray-600 gap-4'>
                <div className='flex gap-1'>
                    <UsersIcon />
                    <span className='whitespace-nowrap'>{participants.length} Participants</span>
                </div>
                <div className='flex gap-1 text-green-500 font-bold'>
                    <ClockIcon />
                    <span className='whitespace-nowrap'>{participants.length} Participants</span>
                </div>
            </div>
        </div>
    )
}

export default AssesmentBanner;