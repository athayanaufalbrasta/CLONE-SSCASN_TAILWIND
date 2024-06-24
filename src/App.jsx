import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
// COMPONENT
import Nav from "./component/Navbar";
import Scrool from "./component/ScroolTop";
import Footer from "./component/Footer";
import Error from "./component/Error";
import { HashLoader as Loading } from "react-spinners";
// PAGES
import Home from "./pages/Home";
import Alur from "./pages/Alur";
import Cpns from "./pages/Cpns";
import PPPKGuru from "./pages/PPPK-Guru";
import PPPKTeknis from "./pages/PPPK-Teknis";
import PPPKTenagaKesehatan from "./pages/PPPK-Tenaga-Kesehatan";
import DasarHukum from "./pages/Dasar-Hukum";
import BukuPetunjuk from "./pages/Buku-Petunjuk";
import Login from "./pages/Login";
import Register from "./pages/Register";
import "./style/animation.css";

function App() {
	const [loading, setLoading] = useState(false);
	const path = useLocation().pathname;

	useEffect(() => {
		setLoading(true);
		const timeout = setTimeout(() => {
			setLoading(false);
		}, 1000);

		return () => clearInterval(timeout);
	}, [path]);
	return loading ? (
		<div className="flex justify-center items-center w-screen h-screen dark:bg-[#353941]">
			<Loading speedMultiplier={1.75} color="#0ea5e9"/>
		</div>
	) : (
		<>
			<Nav />
			<Routes>
				<Route path="/" Component={Home} />
				<Route path="/alur" Component={Alur} />
				<Route path="/dasar-hukum" Component={DasarHukum} />
				<Route path="/cpns" Component={Cpns} />
				<Route path="/PPPK-Guru" Component={PPPKGuru} />
				<Route path="/PPPK-Teknis" Component={PPPKTeknis} />
				<Route path="/PPPK-Tenaga-Kesehatan" Component={PPPKTenagaKesehatan} />
				<Route path="/buku-petunjuk" Component={BukuPetunjuk} />
				<Route path="/login" Component={Login} />
				<Route path="/register" Component={Register} />
				<Route path="*" Component={Error} />
			</Routes>
			<Scrool />
			<Footer />
		</>
	);
}

export default App;
