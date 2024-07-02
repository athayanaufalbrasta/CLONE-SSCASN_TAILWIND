import Logo from "../assets/gbr_dftr.png";
import { useState, useEffect } from "react";

export default function Register() {
	// LOCALE STORAGE
	const [data, setData] = useState([]);

	// INPUT HANDLER
	const [nik, setNik] = useState("");
	const [kk, setKk] = useState("");
	const [ktp, setKtp] = useState("");
	const [tempatLahir, setTempatLahir] = useState("");
	const [tanggalLahir, setTanggalLahir] = useState("");
	const [noHp, setNoHp] = useState("");
	const [pass, setPass] = useState("");
	const [ConfirmPass, setConfirmPass] = useState("");

	// FIELD HANDLER
	const [nikField, setNikField] = useState(false);
	const [ktpField, setKtpField] = useState(false);
	const [checkField, setCheckField] = useState(false);
	const [samePass, setSamePass] = useState(false);
	const [success, setSuccess] = useState(false);

	useEffect(() => {
		const storedData = localStorage.getItem("user");
		setData(storedData ? JSON.parse(storedData) : []);
	}, []);

	function handleRegister() {
		const checkNik = data.findIndex((user) => user.nik === nik);
		const checkNoKtp = data.findIndex((user) => user.ktp === ktp);

		// CEK SEMUA FIELD SUDAH DIISI
		if (!(nik && ktp && kk && tempatLahir && tanggalLahir && noHp && pass && ConfirmPass)) {
			setCheckField(true);
			return;
		}

		// CEK NIK APAKAH SUDAH TERDAFTAR
		if (checkNik !== -1) {
			setNikField(true);
			return;
		}

		// CEK KONFIRMASI PASS
		if (pass !== ConfirmPass) {
			setSamePass(true);
			return;
		}

		setSuccess(true);

		const newData = [...data, { nik, pass, ktp, kk, tempatLahir, tanggalLahir, noHp }];

		setData(newData);
		localStorage.setItem("user", JSON.stringify(newData));

		setTimeout(() => {
			setSuccess(false)
			window.location.href = '/login'
		}, 2000);
	}

	return (
		<section className="dark:bg-[#353941] w-screen py-12 dark:text-neutral-300 px-20 gap-10">
			{/* form */}
			<div className="container mx-auto grid lg:grid-cols-2 gap-10">
				<div>
					<div className="relative grid grid-cols-1 gap-5">
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

						{(checkField || nikField || ktpField || samePass || success) && (
							<h1 className="fixed top-10 animate-pulse left-1/2 -translate-x-1/2 z-[999] text-red-600 bg-neutral-100 px-8 py-2 rounded-md font-semibold">
								{checkField && "Semua Field Wajib Diisi"}
								{nikField && "Nik Sudah Terdaftar"}
								{ktpField && "Nomor Ktp Sudah Terdaftar"}
								{samePass && "Konfirmasi Password Tidak Sama"}
								{success && "Registrasi Berhasil, Mohon Tunggu..."}
							</h1>
						)}

						<div className="grid">
							<label className="text-xl font-medium">Nomor Induk Kependudukan (sesuai KTP)</label>
							<input
								type="text"
								className="dark:focus:bg-neutral-100 dark:text-black ring-white dark:bg-neutral-300 peer px-4 py-1 border border-red-600 focus:outline-none focus:outline outline-blue-600"
								onChange={(e) => {
									setCheckField(false);
									setSamePass(false);
									setKtpField(false);
									setNikField(false);
									setNik(e.target.value);
								}}
								value={nik}
								required
							/>
							<small className="mt-2 text-red-600 peer-invalid:block hidden">
								Nomor Induk Kependudukan wajib diisi.
							</small>
						</div>

						<div className="grid">
							<label className="text-xl font-medium">Nomor Kartu Keluarga</label>
							<input
								type="text"
								className="dark:focus:bg-neutral-100 dark:text-black ring-white dark:bg-neutral-300 px-4 py-1 border border-red-600 focus:outline-none focus:outline outline-blue-600"
								onChange={(e) => {
									setCheckField(false);
									setSamePass(false);
									setKtpField(false);
									setNikField(false);
									setKk(e.target.value);
								}}
								value={kk}
								required
							/>
						</div>

						<div className="grid">
							<label className="text-xl font-medium">Nama Lengkap sesuai KTP</label>
							<input
								type="text"
								className="dark:focus:bg-neutral-100 dark:text-black ring-white dark:bg-neutral-300 px-4 py-1 border border-red-600 focus:outline-none focus:outline outline-blue-600"
								onChange={(e) => {
									setCheckField(false);
									setSamePass(false);
									setKtpField(false);
									setNikField(false);
									setKtp(e.target.value);
								}}
								value={ktp}
								required
							/>
						</div>

						<div className="grid">
							<label className="text-xl font-medium">Tempat Lahir sesuai KTP</label>
							<input
								type="text"
								className="dark:focus:bg-neutral-100 dark:text-black ring-white dark:bg-neutral-300 px-4 py-1 border border-red-600 focus:outline-none focus:outline outline-blue-600"
								onChange={(e) => {
									setCheckField(false);
									setSamePass(false);
									setKtpField(false);
									setNikField(false);
									setTempatLahir(e.target.value);
								}}
								value={tempatLahir}
								required
							/>
						</div>

						<div className="grid">
							<label className="text-xl font-medium">Tanggal Lahir sesuai KTP</label>
							<input
								type="date"
								className="dark:focus:bg-neutral-100 dark:text-black ring-white dark:bg-neutral-300 px-4 py-1 border border-red-600 focus:outline-none focus:outline outline-blue-600"
								onChange={(e) => {
									setCheckField(false);
									setSamePass(false);
									setKtpField(false);
									setNikField(false);
									setTanggalLahir(e.target.value);
								}}
								value={tanggalLahir}
								required
							/>
						</div>

						<div className="grid">
							<label className="text-xl font-medium">Nomor Handphone</label>
							<input
								type="text"
								className="dark:focus:bg-neutral-100 dark:text-black ring-white dark:bg-neutral-300 px-4 py-1 border border-red-600 focus:outline-none focus:outline outline-blue-600"
								onChange={(e) => {
									setCheckField(false);
									setSamePass(false);
									setKtpField(false);
									setNikField(false);
									setNoHp(e.target.value);
								}}
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
								className="dark:focus:bg-neutral-100 dark:text-black ring-white dark:bg-neutral-300 px-4 py-1 border border-red-600 focus:outline-none focus:outline outline-blue-600"
								onChange={(e) => {
									setCheckField(false);
									setSamePass(false);
									setKtpField(false);
									setNikField(false);
									setPass(e.target.value);
								}}
								value={pass}
							/>
							{samePass && <small className="text-red-600 italic font-semibold text-xs">Password harus sama</small>}
						</div>

						<div className="grid">
							<label className="text-xl font-medium">Confirm Password</label>
							<input
								type="password"
								className="dark:focus:bg-neutral-100 dark:text-black ring-white dark:bg-neutral-300 px-4 py-1 border border-red-600 focus:outline-none focus:outline outline-blue-600"
								onChange={(e) => {
									setCheckField(false);
									setSamePass(false);
									setKtpField(false);
									setNikField(false);
									setConfirmPass(e.target.value);
								}}
								value={ConfirmPass}
							/>
						</div>

						<button
							className="bg-red-600 px-4 py-2 rounded-md font-bold text-white lg:w-[50%]"
							onClick={handleRegister}
						>
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
