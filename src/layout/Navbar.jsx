import { useNavigate } from 'react-router-dom';

import { useTheme } from '../context/ThemeContext';
import logo from '../assets/images/anime-logo.svg';
import { CustomButton } from '../components/button';

function Navbar() {
	const navigate = useNavigate();
	const { isDarkMode, toggleTheme } = useTheme();

	const handleClick = () => {
		navigate('/register');
	};

	return (
		<nav className='bg-transparent p-4'>
			<div className='flex justify-between items-center'>
				<div className='flex items-center gap-3'>
					<div className='cursor-pointer'>
						<img
							src={logo}
							alt=''
						/>
					</div>
					<div>
						<p className='capitalize text-black dark:text-white cursor-pointer'>features</p>
					</div>
					<div>
						<p className='capitalize text-black dark:text-white cursor-pointer'>benefits</p>
					</div>
				</div>
				<div className='flex items-center gap-3'>
					<div>
						<button
							className='text-black dark:text-white text-sm px-2.5 py-2.5 rounded bg-[#EBEBEBEE] focus:outline-none'
							onClick={toggleTheme}>
							{isDarkMode ? '🌕' : '🌑'}
						</button>
					</div>
					<div>
						<CustomButton
							width='158px'
							content='Get started'
							onClick={handleClick}
						/>
					</div>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
