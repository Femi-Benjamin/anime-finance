import { CustomButton } from "../../components/button";
import { useTheme } from '../../context/ThemeContext';
import animelogo from '../../assets/images/anime-logo.svg';


const Register = () => {
	const { isDarkMode, toggleTheme } = useTheme();
	
	const handleloginClick = () => {
		("/Login");
	};
	return (
		<div className='bg-[#FAFAFA] dark:bg-[#141416]  px- text-black dark:text-white'>
			<div className='flex justify-between p-5 border-b'>
				<img src={animelogo} alt="" />
				<button
					className='text-black dark:text-white text-sm px-2.5 py-2.5 md:rounded rounded-3xl bg-[#EBEBEBEE] focus:outline-none'
					onClick={toggleTheme}>
					{isDarkMode ? '🌕' : '🌑'}
				</button>
			</div>


			<div className="flex justify-center">
				<div className="md:w-[460px] h-[986p md:border border-[#61616B] rounded-xl bg-[#F5F5F5] dark:bg-[#3232361a] md:px-[30px] px-[20px] m-6">
					<div>
						<h1 className='text-[27px] font-medium text-center leading-[39.854px] md:pt-6 pt-7'>Create an Account</h1>
					</div>

					<div className='flex justify-center mt-[32px]'>
						<form>
							<div className='pb-10'>
								<h1 className='pb-2'>Full name</h1>
								<input
									className='md:w-[400px] w-[315px] h-14 bg-transparent border border-[#61616B] rounded-lg outline-none p-2'
									type="name"
									// value={name}
									placeholder='ex. John Doe'
								/>
							</div>

							<div className='pb-10'>
								<h1 className='pb-2'>Username</h1>
								<input
									className='md:w-[400px] w-[315px] h-14 bg-transparent border border-[#61616B] rounded-lg outline-none p-2'
									type="user name"
									id='username'
									// value={username}
									placeholder='ex. crypto_enthusiast123'
								/>
							</div>

							<div className='pb-10'>
								<h1 className='pb-2'>Email address</h1>
								<input
									className='md:w-[400px] w-[315px] h-14 bg-transparent border border-[#61616B] rounded-lg outline-none p-2'
									type="email address"
									id='email address'
									// value={email adress}
									placeholder='ex. johndoe@email.com'
								/>
							</div>

							<div className='pb-10'>
								<h1 className='pb-2'>Country</h1>
								<input
									className='md:w-[400px] w-[315px] h-14 bg-transparent border border-[#61616B] rounded-lg outline-none p-2'
									type="country"
									id='country'
									// value={email adress}
									placeholder='Select or type in your country'
								/>
							</div>

							<div className='pb-10'>
								<h1 className='pb-2'>Referral ID (Optional)</h1>
								<input
									className='md:w-[400px] w-[315px] h-14 bg-transparent border border-[#61616B] rounded-lg outline-none p-2'
									type="referral id"
									id='referral id'
									// value={email adress}
									placeholder='Referral ID'
								/>
							</div>

							<div className='pb-10'>
								<h1 className='pb-2'>Password</h1>
								<input
									className='md:w-[400px] w-[315px] h-14 bg-transparent border border-[#61616B] rounded-lg outline-none p-2'
									type="password"
									id='password'
									// value={email adress}
									placeholder='Password'
								/>
							</div>

							<div className='md:block hidden'>
								<CustomButton
									id='submit'
									type="submit"
									width='400px'
									content='Create Account'
								/>
							</div>

							<div className='md:hidden block'>
								<CustomButton
									id='submit'
									type="submit"
									width='315px'
									content='Create Account'
								/>
							</div>

							<div className='text-center p-5'>
								<h1>Already have an Account? 
								<span onClick={handleloginClick} 
								className='text-[#e0cc44] cursor-pointer'> Sign In</span></h1>
							</div>

						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Register;
