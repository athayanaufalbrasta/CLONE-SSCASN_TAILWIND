import { useEffect, useState } from "react";
export default function Login() {
	const [data, setData] = useState([]);
	const [NikNow, setNikNow] = useState("");
	const [PassNow, setPassNow] = useState("");
	const [failed, setFailed] = useState(false);
	const [accept, setAccept] = useState(false);

	useEffect(() => {
		const storedData = localStorage.getItem("user");
		if (storedData) {
			setData(JSON.parse(storedData));
		}
	}, []);

	function handleLogin() {
		const user = data.find((user) => user.nik === NikNow);

		if (user && user.pass === PassNow) {
			localStorage.setItem(
				"profile",
				JSON.stringify({
					nik: NikNow,
					pass: PassNow,
				})
			);
			setAccept(true);
			setTimeout(() => {
				window.location.href = "/";
			}, 1500);
		} else {
			setFailed(true);
		}
	}

	return (
		<section className="w-screen min-h-screen flex justify-center items-center bg-slate-100 py-10 dark:bg-[#353941]">
			<div className="w-[80%] md:w-1/2 lg:w-[40%] md:-mt-[20vh] flex flex-col text-center gap-5 rounded-xl bg-white dark:bg-[#3c424a] px-16 py-10">
				{failed && (
					<span className="fixed top-20 transition-all left-1/2 -translate-x-1/2 z-[9999] px-8 py-2 rounded-md bg-neutral-200 animate-pulse">
						NIK dan Password anda salah
					</span>
				)}
				{accept && (
					<span className="fixed top-20 transition-all left-1/2 -translate-x-1/2 z-[9999] px-8 py-2 rounded-md bg-blue-400 font-semibold animate-pulse">
						Login Berhasil
					</span>
				)}

				<h1 className="text-2xl md:text-4xl font-bold text-[#3a69d6] dark:text-blue-500">Login SSCASN</h1>

				<label htmlFor="id" className="text-start flex flex-col gap-2">
					<span className="text-sm md:text-lg dark:text-neutral-100">Nomor Induk Kependudukan(NIK)</span>
					<input
						className="dark:bg-neutral-200 focus:border-blue-600 focus:shadow-md focus:shadow-blue-600 transition-all duration-200 ease-in-out focus:outline-none border-2 border-slate-300 rounded-lg px-4 py-1"
						type="text"
						name="id"
						id="id"
						required
						onChange={(e) => {
							setFailed(() => false);
							setNikNow(() => e.target.value);
						}}
						value={NikNow}
					/>
				</label>

				<label htmlFor="pass" className="text-start flex flex-col gap-2">
					<span className="text-sm md:text-lg dark:text-neutral-100">Password</span>
					<input
						className="dark:bg-neutral-200 focus:border-blue-600 focus:shadow-md focus:shadow-blue-600 transition-all duration-200 ease-in-out focus:outline-none border-2 border-slate-300 rounded-lg px-4 py-1"
						type="password"
						name="pass"
						id="pass"
						onChange={(e) => {
							setFailed(() => false);
							setPassNow(() => e.target.value);
						}}
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
