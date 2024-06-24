import { FaFacebook, FaInstagram, FaTiktok, FaTwitter, FaYoutube } from "react-icons/fa";

export default function Footer() {
	return (
		<div className="w-screen px-10 py-12 bg-slate-700 flex flex-col justify-center items-center gap-3 text-white">
			<h1 className="font-bold text-2xl">Badan Kepegawaian Negara</h1>
			<p className="text-md font-light">Jl. Mayjen No. 12, Jakarta Timur, 13640 - Indonesia | Telp. 021-8093008</p>
			<div className="flex gap-2 text-white">
				<FaTwitter size={35} className="p-2 cursor-pointer border border-white text-white hover:text-blue-600" />
				<FaFacebook size={35} className="p-2 cursor-pointer border border-white text-white hover:text-blue-600" />
				<FaYoutube size={35} className="p-2 cursor-pointer border border-white text-white hover:text-red-500" />
				<FaInstagram size={35} className="p-2 cursor-pointer border border-white text-white hover:text-blue-600" />
				<FaTiktok size={35} className="p-2 cursor-pointer border border-white text-white hover:text-black" />
			</div>
		</div>
	);
}
