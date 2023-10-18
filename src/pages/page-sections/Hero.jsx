import { useNavigate } from 'react-router-dom';

import Navbar from '../../layout/Navbar';
import heroimagedark from '../../assets/images/hero-lg-dark.svg';
import heroimagelight from '../../assets/images/hero-lg-light.svg';
import { useTheme } from '../../context/ThemeContext';
import { CustomButton } from '../../components/button';

const Hero = () => {
	return (
		<div>
			<Navbar />
			<HeroContent />
		</div>
	);
};

export default Hero;

const HeroContent = () => {
	const navigate = useNavigate();
	const { isDarkMode } = useTheme();

	const handleClick = () => {
		navigate('/register');
	};

	return (
		<div className='mt-8 flex items-center justify-between'>
			<div className='max-w-[630px]'>
				<div className='mb-8'>
					<h1 className='text-7xl font-bold'>
						Unlock the future of digital <span className='text-[#F0B90B]'>wealth</span>
					</h1>
				</div>
				<div className='mb-8'>
					<p>
						We aim to bridge the anime and cryptocurrency worlds by allowing fans to own NFTs of their favorite
						anime characters, participate in community governance, trade anime-themed tokens, and more
					</p>
				</div>
				<div>
					<CustomButton
						width='158px'
						content='start mining now'
						onClick={handleClick}
					/>
				</div>
			</div>
			<div>
				<img
					src={isDarkMode ? heroimagedark : heroimagelight}
					alt=''
				/>
			</div>
		</div>
	);
};
