import { useState } from "react";
export default function Login() {
	var nik = localStorage.getItem("Nik");
	var pass = localStorage.getItem("Pass");

	const [login, setLogin] = useState(false);
	const [error, setError] = useState(false);

	const [NikNow, setNikNow] = useState("");
	const [PassNow, setPassNow] = useState("");

	const handleNIK = (e) => {
		setNikNow(e.target.value);
		setLogin(false);
	};

	const handlePass = (e) => {
		setPassNow(e.target.value);
		setLogin(false);
	};

	const handleLogin = (e) => {
		e.preventDefault();
		if (NikNow === nik && PassNow === pass) {
			setLogin(true);
			setError(false);
		} else {
			setError(true);
		}
	};

	const berhasil = () => {
		return (
			<div
				className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative"
				role="alert"
				style={{ display: login ? "" : "none" }}
			>
				<span className="block sm:inline">
					Selamat Datang, USER dengan NIK : <strong className="font-bold">{NikNow}</strong> !!!
				</span>
				<span className="absolute top-0 bottom-0 right-0 px-4 py-3"></span>
			</div>
		);
	};
	const gagal = () => {
		return (
			<div
				className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
				role="alert"
				style={{ display: error ? "" : "none" }}
			>
				<span className="block sm:inline">NIK atau Password anda Salah !!!</span>
				<span className="absolute top-0 bottom-0 -z-50 right-0 px-4 py-3"></span>
			</div>
		);
	};
	return (
		<section className="w-screen min-h-screen flex justify-center items-center bg-slate-100 py-10 dark:bg-[#353941]">
			<div className="w-[80%] md:w-1/2 lg:w-[40%] md:-mt-[20vh] flex flex-col text-center gap-5 rounded-xl bg-white dark:bg-[#3c424a] px-16 py-10">
				{berhasil()}
				{gagal()}
				<h1 className="text-2xl md:text-4xl font-bold text-[#3a69d6] dark:text-blue-600">Login SSCASN</h1>
				<label htmlFor="id" className="text-start flex flex-col gap-2">
					<span className="text-sm md:text-lg dark:text-neutral-100">Nomor Induk Kependudukan(NIK)</span>
					<input
						className="focus:border-blue-600 focus:shadow-md focus:shadow-blue-600 transition-all duration-200 ease-in-out focus:outline-none border-2 border-slate-300 rounded-lg px-4 py-1"
						type="text"
						name="id"
						id="id"
						required
						onChange={handleNIK}
						value={NikNow}
					/>
				</label>
				<label htmlFor="pass" className="text-start flex flex-col gap-2">
					<span className="text-sm md:text-lg dark:text-neutral-100">Password</span>
					<input
						className="focus:border-blue-600 focus:shadow-md focus:shadow-blue-600 transition-all duration-200 ease-in-out focus:outline-none border-2 border-slate-300 rounded-lg px-4 py-1"
						type="password"
						name="pass"
						id="pass"
						onChange={handlePass}
						value={PassNow}
					/>
				</label>
				<button
					className="hover:bg-blue-800 rounded-full py-2 bg-blue-600 text-white font-bold text-sm md:text-xl w-1/2 mx-auto"
					type="submit"
					onClick={handleLogin}
				>
					Login
				</button>
			</div>
		</section>
	);
}
