// Depedencies
import { Routes, Route } from "react-router-dom";

// Components
import Homepage from "./components/Homepage/Homepage";
import Dashboard from "./components/Dashboard/Dashboard";

// Styles
import "./App.css";

function App() {
	return (
		<Routes>
			<Route path="/" element={<Homepage />} />
			<Route path="/dashboard" element={<Dashboard />} />
		</Routes>
	);
}

export default App;
