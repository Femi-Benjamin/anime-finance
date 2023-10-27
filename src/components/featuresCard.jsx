import { features } from '../assets/static/features';

export const FeaturesCard = () => {
	return (
		<>
			{features.map((item) => (
				<div
					key={item.id}
					className='px-4 py-4 bg-[#F5F5F5] dark:bg-[#3232361a] max-w-[245px] rounded-md'>
					<div className='mb-3'>
						<img
							src={item.imageSrc}
							alt={`Image ${item.id}`}
						/>
					</div>
					
					<div className='mb-3'>
						<h4 className='text-sm font-semibold'>{item.header}</h4>
					</div>

					<div className='mb-3'>
						<p className='text-sm'>
							{item.details}
						</p>
					</div>
				</div>
			))}
		</>
	);
};
