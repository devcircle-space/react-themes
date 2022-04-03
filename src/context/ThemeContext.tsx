// State management for theme with Context API
// Theme provider for the application
// keeps track of the current theme selected by user

import React, { createContext, useState } from "react"

export const ThemeContext = createContext({
	isDarkTheme: false,
	toggleTheme: () => {},
})

const ThemeProvider: React.FC = ({ children }) => {
	const [isDarkTheme, setIsDarkTheme] = useState(false)

	const toggleTheme = (): void => {
		setIsDarkTheme(!isDarkTheme)
	}

	return (
		<ThemeContext.Provider value={{ isDarkTheme, toggleTheme }}>
			{children}
		</ThemeContext.Provider>
	)
}

export default ThemeProvider
