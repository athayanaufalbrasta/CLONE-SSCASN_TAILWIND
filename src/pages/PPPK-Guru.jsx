import { useState } from "react";
import Accordion from "../component/Accordion";

export default function PPPKGuru() {
	const [openIndex, setOpenIndex] = useState(null);

	const link = [{ title: "Umum", id: "umum" }];

	const data = [
		{
			section: "Umum",
			id: "umum",
			data: [
				{
					title: "Siapa yang disebut pelamar prioritas?",
					content:
						"Peserta yang memenuhi nilai ambang batas pada seleksi PPPK JF guru tahun 2021 dan belum pernah dinyatakan lulus pada seleksi PPPK JF guru periode sebelumnya. Pada seleksi PPPK JF guru tahun 2022, pelamar ini dikenal dengan istilah P1.",
				},
				{
					title: "Siapa yang disebut sebagai pelamar kebutuhan khusus?",
					content: (
						<p>
							a. Pelamar prioritas <br />
							b. Eks THK-II yang terdaftar dalam pangkalan data (database) eks THK-II pada Badan Kepegawaian Negara
							(BKN); dan <br />
							c. Guru non ASN di sekolah negeri yang terdaftar di Data Pokok Pendidikan (Dapodik) Kementerian
							Pendidikan, Kebudayaan, Riset dan Teknologi dan memiliki masa kerja paling rendah 3 (tiga) tahun.
						</p>
					),
				},
				{
					title: "Bagaimana penjelasan pembagian jadwal pelamar kebutuhan khusus dan pelamar kebutuhan umum?",
					content: (
						<p>
							Sesuai dengan Surat Kepala BKN Nomor 8951/B-KS.04.01/SD/E/2023, jadwal bagi pelamar kebutuhan khusus dan
							pelamar kebutuhan umum terbagi menjadi 2, yaitu: <br />
							a. Pendaftaran bagi pelamar kebutuhan khusus pada tanggal 20 s.d 29 Oktober 2023; dan <br />
							b. Pendaftaran bagi pelamar kebutuhan umum pada tanggal 30 September s.d 9 Oktober 2023
						</p>
					),
				},
				{
					title:
						"Bagaimana jika pelamar formasi kebutuhan khusus tidak mendaftar hingga tanggal 29 September 2023 berakhir?",
					content:
						"	Sampai dengan saat ini, pendaftaran bagi pelamar pada kebutuhan khusus diberikan batas waktu hingga tanggal 29 September 2023. Setelah tanggal tersebut maka pendaftaran bagi pelamar pada kebutuhan khusus sudah tidak dapat dilakukan.",
				},
				{
					title: "Apakah pelamar yang sudah memiliki akun SSCASN pada tahun 2022 dan 2021 perlu membuat akun kembali?",
					content:
						"Seluruh pelamar diharuskan membuat akun SSCASN untuk pendaftaran seleksi PPPK Guru tahun 2023, tidak dapat menggunakan akun yang laman.",
				},
			],
		},
	];

	const handleAccordionClick = (index) => {
		setOpenIndex(openIndex === index ? null : index);
	};

	const scroolTo = (id) => {
		const element = document.getElementById(id);
		element.scrollIntoView({ behavior: "smooth" });
	};
	return (
		<div className="w-screen h-screen scroll-smooth dark:bg-[#353941]">
			<div className="container mx-auto p-10 md:px-20 grid gap-10">
				<h1 className="text-center font-bold text-3xl text-[#40588A] dark:text-gray-200">Frequently Asked Questions (PPPK Guru)</h1>

				<div className="grid grid-cols-12 gap-5">
					<div className="col-span-4 flex flex-col">
						<div className="w-full border-2 rounded-md py-2">
							{link.map((e, i) => (
								<span
									key={i}
									onClick={() => scroolTo(e.id)}
									className={`text-blue-700 cursor-pointer dark:text-neutral-100 hover:text-blue-800 hover:font-bold px-4 py-2 ${
										e.title !== "Umum" && "border-b-2"
									}`}
								>
									{e.title}
								</span>
							))}
						</div>
					</div>

					{/* ACCORDION */}
					<div className="col-span-8 border-2 rounded-md px-3 h-[380px] overflow-y-auto flex flex-col gap-5">
						{data.map((e, i) => (
							<div key={i} id={e.id}>
								<h1 className="text-xl font-bold text-slate-700 dark:text-neutral-200 px-3 py-2">{e.section}</h1>

								<div className="bg-[#EFFDF5]">
									{e.data.map((accordion, index) => (
										<Accordion
											key={index}
											title={accordion.title}
											isOpen={openIndex === index}
											onClick={() => handleAccordionClick(index)}
										>
											{accordion.content}
										</Accordion>
									))}
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
