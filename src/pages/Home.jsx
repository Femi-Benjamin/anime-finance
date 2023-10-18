
import Features from './page-sections/Features';
import Hero from './page-sections/Hero';

const Home = () => {
	return (
		<div className='bg-[#FAFAFA] dark:bg-[#141416] h-auto px-14 py-7 text-black dark:text-white'>
			<Hero />
			<Features />
		</div>
	);
};

export default Home;
