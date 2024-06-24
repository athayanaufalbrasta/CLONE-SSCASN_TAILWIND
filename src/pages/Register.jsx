import Logo from "../assets/gbr_dftr.png";
import { useState } from "react";
import Login from "./Login";
import { useNavigate } from "react-router-dom";
export default function Register() {
	const path = useNavigate();
	const [Nik, setNik] = useState("");
	const [kk, setKk] = useState("");
	const [ktp, setKtp] = useState("");
	const [tempatLahir, setTempatLahir] = useState("");
	const [tanggalLahir, setTanggalLahir] = useState("");
	const [noHp, setNoHp] = useState("");
	const [Pass, setPass] = useState("");
	const [ConfirmPass, setConfirmPass] = useState("");

	const [submitted, setSubmitted] = useState(false);
	const [error, setError] = useState(false);
	const [errorPass, setErrorPass] = useState(false);

	const handleNIK = (e) => {
		setNik(e.target.value);
		setSubmitted(false);
	};

	const handleKk = (e) => {
		setKk(e.target.value);
		setSubmitted(false);
	};

	const handleKtp = (e) => {
		setKtp(e.target.value);
		setSubmitted(false);
	};

	const handleTempatLahir = (e) => {
		setTempatLahir(e.target.value);
		setSubmitted(false);
	};

	const handleTanggalLahir = (e) => {
		setTanggalLahir(e.target.value);
		setSubmitted(false);
	};

	const handleNoHp = (e) => {
		setNoHp(e.target.value);
		setSubmitted(false);
	};

	const handlePass = (e) => {
		setPass(e.target.value);
		setSubmitted(false);
	};

	const handleConfirmPass = (e) => {
		setConfirmPass(e.target.value);
		setSubmitted(false);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (Nik === "" || Pass === "" || ConfirmPass === "") {
			setError(true);
		} else if (Pass != ConfirmPass) {
			setErrorPass(true);
			setError(false);
		} else {
			setSubmitted(true);
			setError(false);
			window.alert("Pengguna Berhasil Di Daftar !!!");
			path("/login");
			localStorage.setItem("Nik", Nik);
			localStorage.setItem("Pass", Pass);
		}
	};

	const successMessage = () => {
		return (
			<div
				className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative"
				role="alert"
				style={{ display: submitted ? "" : "none" }}
			>
				<span className="block sm:inline">
					Pengguna <strong className="font-bold">{Nik}</strong> Berhasil didaftar !!!
				</span>
				<span className="absolute top-0 bottom-0 right-0 px-4 py-3"></span>
			</div>
		);
	};

	const errorMessage = () => {
		return (
			<div
				className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative"
				role="alert"
				style={{ display: error ? "" : "none" }}
			>
				<span className="block sm:inline">Isi Semua field terlebih dahulu !!!</span>
				<span className="absolute top-0 bottom-0 right-0 px-4 py-3"></span>
			</div>
		);
	};

	const errorPassMessage = () => {
		return (
			<div
				className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
				role="alert"
				style={{ display: errorPass ? "" : "none" }}
			>
				<span className="block sm:inline">Password tidak Sesuai !!!</span>
				<span className="absolute top-0 bottom-0 right-0 px-4 py-3"></span>
			</div>
		);
	};

	return (
		<section className="w-screen py-12 mb-10 px-20 gap-10">
			{/* form */}
			<div className="container mx-auto grid lg:grid-cols-2 gap-10">
				<div>
					<div className="grid grid-cols-1 gap-5">
						<div className="grid grid-cols-1 ">
							<h1 className="text-4xl text-red-600 font-semibold mb-8">PENDAFTARAN SSCASN 2023 TELAH DITUTUP</h1>
							<h2 className="text-xl font-semibold">Pendaftaran Akun SSCASN 2023</h2>
							<h3 className="text-md">Langkah 1: Pengecekan identitas</h3>
						</div>

						<div className="border-b-2 border-red-600 text-sm italic text-red-600 font-medium">
							<p>PERHATIAN:</p>
							<p>
								Penggunaan NIK dan Data Pribadi orang lain untuk mendaftar akun pada SSCASN merupakan tindak kejahatan
								dan akan mendapatkan hukuman sesuai dengan peraturan yang berlaku.
							</p>
						</div>

						<div className="grid">
							{errorMessage()}
							{errorPassMessage()}
							{successMessage()}
						</div>

						<div className="grid">
							<label className="text-xl font-medium">Nomor Induk Kependudukan (sesuai KTP)</label>
							<input
								type="text"
								className="peer px-4 py-1 border border-red-600 focus:outline-none focus:outline outline-blue-600"
								onChange={handleNIK}
								value={Nik}
								required
							/>
							<span className="mt-2 text-red-600 peer-invalid:block hidden">Nomor Induk Kependudukan wajib diisi.</span>
						</div>

						<div className="grid">
							<label className="text-xl font-medium">Nomor Kartu Keluarga</label>
							<input
								type="text"
								className="px-4 py-1 border border-red-600 focus:outline-none focus:outline outline-blue-600"
								onChange={handleKk}
								value={kk}
								required
							/>
						</div>

						<div className="grid">
							<label className="text-xl font-medium">Nomor Lengkap sesuai KTP</label>
							<input
								type="text"
								className="px-4 py-1 border border-red-600 focus:outline-none focus:outline outline-blue-600"
								onChange={handleKtp}
								value={ktp}
								required
							/>
						</div>

						<div className="grid">
							<label className="text-xl font-medium">Tempat Lahir sesuai KTP</label>
							<input
								type="text"
								className="px-4 py-1 border border-red-600 focus:outline-none focus:outline outline-blue-600"
								onChange={handleTempatLahir}
								value={tempatLahir}
								required
							/>
						</div>

						<div className="grid">
							<label className="text-xl font-medium">Tanggal Lahir sesuai KTP</label>
							<input
								type="date"
								className="px-4 py-1 border border-red-600 focus:outline-none focus:outline outline-blue-600"
								onChange={handleTanggalLahir}
								value={tanggalLahir}
								required
							/>
						</div>

						<div className="grid">
							<label className="text-xl font-medium">Nomor Handphone</label>
							<input
								type="text"
								className="px-4 py-1 border border-red-600 focus:outline-none focus:outline outline-blue-600"
								onChange={handleNoHp}
								value={noHp}
								required
							/>
							<small className="text-red-600 italic font-semibold text-xs">
								Pastikan nomor handphone yang diinput sampai dengan proses seleksi selesai.
							</small>
						</div>

						<div className="grid">
							<label className="text-xl font-medium">Password</label>
							<input
								type="password"
								className="px-4 py-1 border border-red-600 focus:outline-none focus:outline outline-blue-600"
								onChange={handlePass}
								value={Pass}
							/>
						</div>

						<div className="grid">
							<label className="text-xl font-medium">Confirm Password</label>
							<input
								type="password"
								className="px-4 py-1 border border-red-600 focus:outline-none focus:outline outline-blue-600"
								onChange={handleConfirmPass}
								value={ConfirmPass}
							/>
						</div>

						<button className="bg-red-600 px-4 py-2 rounded-md font-bold text-white lg:w-[50%]" onClick={handleSubmit}>
							Register
						</button>
					</div>
				</div>
				{/* img */}
				<div>
					<img src={Logo} alt="" />
				</div>
			</div>
		</section>
	);
}
