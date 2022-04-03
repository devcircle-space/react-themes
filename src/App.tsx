import React, { useContext } from "react"
import "./App.css"

import { ThemeContext } from "./context/ThemeContext"

const App: React.FC = () => {
	const { isDarkTheme, toggleTheme } = useContext(ThemeContext)

	return (
		<div className={`app ${isDarkTheme === true ? "dark" : ""}`}>
			<button
				className={`button ${isDarkTheme === true ? "dark" : ""}`}
				onClick={toggleTheme.bind(null)}>{`Switch to ${
				isDarkTheme === true ? "Light Theme" : "Dark Theme"
			}`}</button>
		</div>
	)
}

export default App
