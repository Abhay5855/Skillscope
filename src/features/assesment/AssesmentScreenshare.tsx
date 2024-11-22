import { ButtonWrapper } from '@/components/button/Button';


const AssesmentScreenshare = () => (
    <div className='shadow-md rounded-xl p-3 space-y-3'>
        <div className='flex justify-between items-center'>
            <h3 className='font-bold text-xl'>Screen Share</h3>
            <ButtonWrapper>
                <span>Start Sharing</span>
            </ButtonWrapper>
        </div>
        <div className='w-full h-96 bg-gray-100 rounded-lg flex items-center justify-center'>
            <span className='text-gray-600'>Screen share will appear here</span>
        </div>
    </div>
)

export default AssesmentScreenshare;