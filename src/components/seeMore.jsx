import seemore from '../assets/images/see more.svg';
import seemorelight from '../assets/images/seemore-light.svg';
import { useTheme } from '../context/ThemeContext';

export const SeeMore = () => {
	const { isDarkMode } = useTheme();
	return (
		<div className='px-3 py-2 rounded-3xl border border-black dark:border-white  flex items-center gap-2 cursor-pointer'>
			<div>
				<p className=''>See more</p>
			</div>
			<div>
				<img
					src={isDarkMode ? seemore : seemorelight}
					alt=''
				/>
			</div>
		</div>
	);
};
