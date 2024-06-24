export default function Login() {
	return (
		<section className="w-screen min-h-screen flex justify-center items-center bg-slate-100 py-10">
			<div className="w-[80%] md:w-1/2 lg:w-[40%] md:-mt-[20vh] flex flex-col text-center gap-5 rounded-xl bg-white px-16 py-10">
				<h1 className="text-2xl md:text-4xl font-bold text-[#3a69d6]">Login SSCASN</h1>
				<label htmlFor="id" className="text-start flex flex-col gap-2">
					<span className="text-sm md:text-lg">Nomor Induk Kependudukan(NIK)</span>
					<input
						className="focus:border-blue-600 focus:shadow-md focus:shadow-blue-600 transition-all duration-200 ease-in-out focus:outline-none border-2 border-slate-300 rounded-lg px-4 py-1"
						type="text"
						name="id"
						id="id"
					/>
				</label>
				<label htmlFor="pass" className="text-start flex flex-col gap-2">
					<span className="text-sm md:text-lg">Password</span>
					<input
						className="focus:border-blue-600 focus:shadow-md focus:shadow-blue-600 transition-all duration-200 ease-in-out focus:outline-none border-2 border-slate-300 rounded-lg px-4 py-1"
						type="text"
						name="pass"
						id="pass"
					/>
				</label>
				<button className="hover:bg-blue-800 rounded-full py-2 bg-blue-600 text-white font-bold text-sm md:text-xl w-1/2 mx-auto">Login</button>
			</div>
		</section>
	);
}
