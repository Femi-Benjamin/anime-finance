

import { benefits } from "../assets/static/benefits";

const benefitsCard = () => {
    return (
        <>
            {benefits.map((item) => (
                <div key={item.id} className="px-4 py-4 bg-[#F5F5F5] dark:bg-[#3232361a] max-w-[245px] rounded-md">
                    <div className='mb-3'>
                        <img src={item.imageSrc} alt={`Image ${item.id}`} />
                    </div>

                    <div className='mb-3'>
                        <h1 className='text-sm font-semibold'>{item.header}</h1>
                    </div>

                    <div className='mb-3'>
                        <h1 className='text-sm'>{item.details}</h1>
                    </div>
                </div>
            ))}
        </>
    );
};

export default benefitsCard;



