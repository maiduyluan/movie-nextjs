import nums from '@/utils/numArr'

const NumberPage = ({ onHandlePagination }) => {
    return (
        <div className='flex justify-center mb-5'>
            {nums.map((i , index) => (
                <button key={index} onClick={() => onHandlePagination(i.id)} className='mr-5'>{i.name}</button>
            ))}
        </div>
    )
}

export default NumberPage