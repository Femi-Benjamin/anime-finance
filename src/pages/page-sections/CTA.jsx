import gold from '../../assets/images/gold.svg';
import { CustomButton } from '../../components/button';
// import './CTA.css';

const CTA = () => {
    return (
        <div className='py-16 flex justify-center'>
            <div className=' md:h-[324px] bg-[#F5F5F5F5] dark:bg-[#313135] md:flex justify-between items-center rounded-xl'>
                <div className='md:pl-10 p-2  md:text-left text-center'>
                    <h1 className='md:text-[40px] text-[24px] font-semibold pb-[34px] md:leading-[56.934px] leading-[34.161px]'>Ready to begin your crypto  mining <br /> journey?</h1>
                    {/* button */}
                    <div className='cursor-pointer mb-3 font-medium'>
                        <CustomButton
                            width='160px'
                            content='Get Started'
                        // onClick={handleClick}
                        />
                    </div>
                </div>
                <div>
                    <img src={gold} alt="" className="spin" />
                </div>
            </div>

        </div>
    )
}

export default CTA

