import {
	BrowserRouter as Router, Routes, Route
} from "react-router-dom"
import Home from "./routes/Home"
import Detail from "./routes/Detail"
 
function App() {
	return <Router>
		<Routes>
			<Route path={`${import.meta.env.BASE_URL}/movie/:id`} element={Detail}/>
			<Route path={`${import.meta.env.BASE_URL}/`} element={Home}/>
		</Routes>
	</Router>;
}

export default App
