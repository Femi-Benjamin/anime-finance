import { createContext, useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types'; // Import PropTypes

const ThemeContext = createContext();


export function ThemeProvider({ children }) {
	const [isDarkMode, setIsDarkMode] = useState(() => {
		const savedMode = localStorage.getItem('theme');
		return savedMode === 'dark';
	});

	useEffect(() => {
		// Apply the dark class to the body based on the initial theme state
		document.documentElement.classList.toggle('dark', isDarkMode);

		// Update the body class when the theme changes
		const body = document.body;
		if (isDarkMode) {
			body.classList.add('dark');
		} else {
			body.classList.remove('dark');
		}

		// Save the theme to local storage
		localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
	}, [isDarkMode]);

	const toggleTheme = () => {
		setIsDarkMode((prevMode) => !prevMode);
	};

	return (
		<ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
			{children}
		</ThemeContext.Provider>
	);
}

export function useTheme() {
	return useContext(ThemeContext);
}

// Add PropTypes validation for the children prop
ThemeProvider.propTypes = {
	children: PropTypes.node.isRequired, 
};
