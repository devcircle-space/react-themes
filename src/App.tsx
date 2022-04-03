import React, { useContext } from "react"
import "./App.css"

import { ThemeContext } from "./context/ThemeContext"

const App: React.FC = () => {
	const { isDarkTheme, toggleTheme } = useContext(ThemeContext)

	return (
		<div className="app">
			<button className="button" onClick={toggleTheme.bind(null)}>{`Switch to ${
				isDarkTheme === true ? "Light Theme" : "Dark Theme"
			}`}</button>
		</div>
	)
}

export default App
