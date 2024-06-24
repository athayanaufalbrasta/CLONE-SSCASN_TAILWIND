import { FaFile as Logo } from "react-icons/fa";

export default function DasarHukum() {
	const data = [
		[
			"PERMENPANRB No.27 Tahun 2021",
			"PERMENPANRB Nomor 27 Tahun 2021 tentang Pengadaan Pegawai Negeri Sipil",
			"https://drive.google.com/file/d/1u7Oi_po4ddUOktvNyXSdAu2bS-KPVqDR/view",
		],
		[
			"PERMENPANRB No.14 Tahun 2023",
			"PERMENPANRB Nomor 14 Tahun 2023 tentang Pengadaan PPPK Untuk Jabatan Fungsional",
			"https://drive.google.com/file/d/1Cwqkh01VoSO4EOPXwkmtCkJr8HvkvrRa/view",
		],
		[
			"KEPMEN No.648 Tahun 2023",
			"Kepmen No. 648 Tahun 2023 Tentang Mekanisme Seleksi PPPK Untuk JF Tahun Anggaran 2023	",
			"https://drive.google.com/file/d/1GX4l14383dPn5QA2owvCB4jbNthhdfxD/view",
		],
		[
			"KEPMEN No.649 Tahun 2023",
			"Kepmen No. 649 Tahun 2023 Tentang Mekanisme Seleksi PPPK Untuk JF Guru Pada Instansi Daerah Tahun Anggaran 2023",
			"https://drive.google.com/file/d/1ZMXh-V-Fpd4lw2pE7GUP_9C6m_BosM8D/view",
		],
		[
			"KEPMEN No.650 Tahun 2023",
			"Kepmen No. 650 Tahun 2023 Tentang Persyaratan Wajib Tambahan dan Sertifikasi Kompetensi Sebagai Penambahan Nilai Seleksi Kompetensi Teknis Dalam Pengadaan PPPK Untuk JF",
			"https://drive.google.com/file/d/1lPEfWGx48KlXIzjpZMu_i8kNgfq1EiPE/view",
		],
		[
			"KEPMEN No.651 Tahun 2023",
			"Kepmen No. 651 Tahun 2023 Tentang Nilai Ambang Batas SKD Pengadaan PNS Tahun Anggaran 2023",
			"https://drive.google.com/file/d/1x_8Sea14q6i5kZWI6u2sLI6OFaLdeYjg/view",
		],
		[
			"KEPMEN No.652 Tahun 2023",
			"Kepmen No. 652 Tahun 2023 Tentang Nilai Ambang Batas Seleksi Kompetensi Pengadaan PPPK Untuk Jabatan Fungsional Tahun Anggaran 2023",
			"https://drive.google.com/file/d/1_gOsIz3-4kxfORavPSoHO8z5XNWleSfq/view",
		],
		[
			"KEPMEN No.653 Tahun 2023",
			"Kepmen No. 653 Tahun 2023 Tentang Nilai Ambang Batas Seleksi Kompetensi Pengadaan PPPK Untuk Jabatan Fungsional Dosen Tahun Anggaran 2023",
			"https://drive.google.com/file/d/1hkGASVvHwvw8jBugbc1h-ZDFI5U4KLyH/view",
		],
		[
			"KEPMEN No.654 Tahun 2023",
			"Kepmen No. 654 Tahun 2023 Tentang Persyaratan Surat Tanda Registrasi Untuk Melamar Pada Jabatan Fungsional Kesehatan Dalam Pengadaan PPPk Tahun Anggaran 2023",
			"https://drive.google.com/file/d/1KngxgQXn6D4udwB1cyxIQE3vi74a1Fd-/view",
		],
		[
			"SE Ditjen Guru dan Tenaga Kependidikan Kemendikbudristek No.2901/B/HK.04.01/2023",
			"SE Ditjen Guru dan Tenaga Kependidikan Kemendikbudristek No.2901/B/HK.04.01/2023 tentang Kualifikasi Akademik dan Sertifikat Pendidik Dalam Pendaftaran Seleksi PPPK Untuk Jabatan Fungsional Guru Tahun 2023",
			"https://drive.google.com/file/d/1Uxlt8bOaheC2gHeYuDtgXHASuj3YsRwC/view",
		],
		[
			"SE Nomor : PT.01.03/F/1365/2023",
			"	SE Nomor : PT.01.03/F/1365/2023 Tentang Persyaratan Kualifikasi Pendidikan dan STR Dalam Rangka Pengadaan PPPK Jabatan Fungsional Kesehatan 2023",
			"https://drive.google.com/file/d/15r0bPTRqKxfWvz_bIqsQIiD9y8NkNBGW/view",
		],
		[
			"SE Nomor : HK.02.02/F/2181/2023",
			"SE Nomor : HK.02.02/F/2181/2023 Tentang Penjelasan SE Direktur Jenderal Tenaga Kesehatan Nomor PT.01.03/F/1365/2023 Tentang Persyaratan Kualifikasi Pendidikan dan STR Dalam Rangka Pengadaan PPPK Jabatan Fungsional Kesehatan 2023",
			"https://drive.google.com/file/d/15r0bPTRqKxfWvz_bIqsQIiD9y8NkNBGW/view",
		],
	];
	return (
		<section className="slideUp min-h-screen py-10 md:px-20 overflow-x-auto dark:bg-[#353941]">
			<div className="container mx-auto grid grid-cols-1 gap-10">
				<h1 className="text-[#40588A] text-2xl md:text-4xl font-bold text-center dark:text-blue-600">Dasar Hukum</h1>

				<table className="w-full table-auto">
					<thead>
						<tr className="border-b-2 hover:bg-slate-100 font-medium text-gray-500 dark:text-neutral-100 text-lg">
							<th className="px-4">No. Peraturan</th>
							<th className="px-4">Judul</th>
							<th className="px-4">Tautan</th>
						</tr>
					</thead>

					<tbody>
						{data.map((e, i) => (
							<tr
								key={i}
								className="border-b-2 hover:bg-slate-100 text-center font-medium text-gray-500 dark:text-neutral-300 text-sm md:text-lg"
							>
								<td className="px-4">{e[0]}</td>
								<td className="px-4">{e[1]}</td>
								<td className="px-4 text-center">
									<a target="_blank" href={e[2]}>
										<Logo size={20} className="text-[#40588A] dark:text-blue-600" />
									</a>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</section>
	);
}
