import { FaDownload } from "react-icons/fa";

export default function BukuPetunjuk() {
	return (
		<section className="slideDown w-screen h-[90vh] flex flex-col items-center justify-center md:justify-start py-20 gap-2">
			<h1 className="text-4xl font-bold text-[#5777ba]">Unduh Dokumen SSCASN</h1>
			<p className="text-md mb-5">Klik ikon di bawah untuk mengunduh dokumen</p>
			<a href="https://drive.google.com/drive/folders/1wEU-OR4Z0ARcBk82wqlA5xlD2rmuMdOm" target="_blank">
				<FaDownload className="hover:text-green-700 text-[#4871ca]" size={150} />
			</a>
		</section>
	);
}
