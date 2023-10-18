import { FeaturesCard } from '../../components/featuresCard';
import { SeeMore } from '../../components/seeMore';

const Features = () => {
	return (
		<div className='py-16'>
			<div className='flex justify-center text-center mb-14'>
				<h1 className='text-3xl'>Explore What Sets Us Apart</h1>
			</div>
			<div className='flex justify-center items-center'>
				<div className='grid grid-cols-4 grid-row-1 gap-36'>
					<FeaturesCard />
				</div>
			</div>
      <div className='mt-16 flex justify-center'>
        <SeeMore />
      </div>
		</div>
	);
};

export default Features;
