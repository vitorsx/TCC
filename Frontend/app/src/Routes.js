import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/index";

export default function Index() {
	return (
		<BrowserRouter>
            <Routes>
                <Route path="/" element={ <Home />}/>
            </Routes>
		</BrowserRouter>
	);
}
