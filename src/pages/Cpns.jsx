import { useState } from "react";
import Accordion from "../component/Accordion";

export default function Cpns() {
	const [openIndex, setOpenIndex] = useState(null);

	const link = [
		{
			title: "Akun",
			id: "akun",
		},
		{
			title: "Dokumen",
			id: "dokumen",
		},
		{
			title: "Login",
			id: "login",
		},
		{
			title: "Masa Sanggah",
			id: "masa-sanggah",
		},
		{
			title: "Pencetakan Kartu",
			id: "pencetakan-kartu",
		},
		{
			title: "Perbaikan Data",
			id: "perbaikan-data",
		},
		{
			title: "Syarat Daftar",
			id: "syarat-daftar",
		},
	];

	const data = [
		{
			section: "Akun",
			id: "akun",
			data: [
				{
					title: "Apakah SSCASN itu?",
					content: (
						<p>
							SSCASN atau Sistem Seleksi Calon Aparatur Sipil Negara adalah situs resmi pendaftaran ASN secara nasional sebagai pintu pendaftaran pertama seleksi ASN ke seluruh
							instansi baik Pusat maupun Daerah dan dikelola oleh Badan Kepegawaian Negara RI sebagai Panitia Seleksi Penerimaan Nasional yang dapat diakses di{" "}
							<a target="_blank" className="text-blue-600 hover:text-blue-800 hover:text-[1.05rem]" href="https://sscasn.bkn.go.id">
								{" "}
								https://sscasn.bkn.go.id{" "}
							</a>
						</p>
					),
				},
				{
					title:
						"Bagaimana jika data Nomor Induk Kependudukan (NIK), Nomor Kartu Keluarga (KK), Nama Lengkap sesuai KTP, Tempat Lahir sesuai KTP, Tanggal Lahir sesuai KTP saya tidak ditemukan/tidak sesuai di halaman Akun?",
					content: (
						<>
							<p>1. Pendaftar menghubungi Dinas Dukcapil Kab/Kota masing-masing untuk konsolidasi data dan</p>
							<p>2. Menghubungi call center Halo Dukcapil, dengan mengirimkan data sesuai format berikut:</p>
							<br />
							<p>
								# NIK <br /># Nama_Lengkap <br /># Nomor_Kartu_Keluarga <br /># Nomor_Telp <br /># Permasalahan
							</p>
							<p>
								Layanan Helpdesk Ditjen Dukcapil: <br />
								Hotline : 1500537 <br />
								WA : 08118005373 <br />
								SMS : 08118005373 <br />
								Email : callcenter.dukcapil@gmail.com
							</p>
						</>
					),
				},

				{
					title: "Bagaimana jika muncul informasi (NIK sudah terdaftar) ketika di halaman akun SSCASN?",
					content: (
						<>
							Silahkan akses halaman Helpdesk SSCN di
							<a target="_blank" className="text-blue-600 hover:text-blue-800 hover:text-[1.05rem]" href="https://helpdesk-sscasn.bkn.go.id">
								{" "}
								https://helpdesk-sscasn.bkn.go.id{" "}
							</a>
							kemudian pilih menu (NIK Didaftarkan Orang Lain) dan lengkapi form isian yang tersedia.
						</>
					),
				},

				{
					title: "Bagaimana pengisian data “Nama” yang benar?",
					content: "Pada kolom (Nama), yang diisikan adalah nama Anda sesuai yang tertera pada ijazah Anda tanpa gelar.",
				},
				{
					title: "Apakah saya dapat melamar lebih dari 1 (satu) jabatan?",
					content:
						"Untuk formasi CPNS tahun 2023, setiap pelamar hanya dapat mendaftar di 1 (satu) formasi jabatan pada 1 (satu) instansi dalam 1 (satu) kali periode pendaftaran.",
				},
				{
					title: "Apakah yang dimaksud dengan periode pendaftaran?",
					content: "Periode pendaftaran adalah satu kurun waktu tertentu dimana beberapa instansi yang membuka pendaftaran pada waktu yang bersamaan.",
				},
				{
					title: "Apakah yang dimaksud dengan formasi khusus?",
					content: (
						<p>
							Formasi khusus adalah formasi lain yang diatur sesuai dengan Peraturan Menteri <br />
							Pendayagunaan Aparatur Sipil Negara dan Reformasi Birokrasi yang berlaku yaitu: <br />
							1. Putra/Putri Lulusan Terbaik Berpredikat “Dengan Pujian”/Cumlaude; <br />
							2. Diaspora; <br />
							3. Penyandang Disabilitas; <br />
							4. Putra/Putri Papua dan Papua Barat; dan <br />
							5. Tenaga Pengamanan Siber (cyber security).
						</p>
					),
				},
				{
					title: "Bagaimana Jika Kode Captcha tidak terbaca atau tidak tampil ?",
					content: "Lakukan clear history (bersihkan riwayat dan cookies) kemudian refresh browser Anda.",
				},
				{
					title: "Bagaimana Jika Tempat Lahir saya tidak ada di referensi?",
					content: (
						<p>
							Data tempat lahir yang digunakan sampai pada Daerah Tingkat II (Kabupaten/Kota) pada saat <br />
							Anda lahir dan bukan data wilayah pemekaran saat ini ataupun nama <br />
							Kelurahan/Kecematan/Desa. Jika tempat lahir yang tertera di Ijazah Anda adalah nama <br />
							Kelurahan/Kecematan/Desa, maka silahkan ketikkan nama Daerah Tingkat II (Kabupaten/Kota) <br />
							nya. Pastikan data tempat lahir yang Anda ketikkan benar. Jika masih membutuhkan <br />
							penambahan referensi (misalnya lahirnya diluar Indonesia) maka dapat melakukan permintaan <br />
							penambahan data tempat lahir dengan menuju ke halaman Helpdesk SSCASN <br />
							di
							<a target="_blank" className="text-blue-600 hover:text-blue-800 hover:text-[1.05rem]" href="https://helpdesk-sscasn.bkn.go.id">
								{" "}
								https://helpdesk-sscasn.bkn.go.id{" "}
							</a>
							pada menu Tempat Lahir Tidak Ditemukan.
						</p>
					),
				},
				{
					title: "Bagaimana Jika Perguruan Tinggi saya tidak tersedia di referensi ?",
					content: (
						<>
							Silahkan akses halaman Helpdesk SSCASN di{" "}
							<a target="_blank" className="text-blue-600 hover:text-blue-800 hover:text-[1.05rem]" href="https://helpdesk-sscasn.bkn.go.id">
								{" "}
								https://helpdesk-sscasn.bkn.go.id{" "}
							</a>
							kemudian pilih menu “Perguruan Tinggi Tidak Ditemukan” dan lengkapi form isian yang tersedia.,
						</>
					),
				},
				{
					title: "Setelah melakukan pendaftaran akun SSCASN, apakah saya bisa langsung login untuk melanjutkan pengisian pendaftaran?",
					content:
						"Setelah melakukan pendaftaran akun SSCASN, maka Anda dapat langsung melakukan pengisian pendaftaran dengan login menggunakan NIK serta password yang sudah dibuat di halaman akun.",
				},
				{
					title: "Bagaimana jika saat pengisian pendaftaran koneksi terputus?",
					content:
						"Pastikan Koneksi internet yang digunakan dalam kondisi stabil. Refresh ulang browser yang digunakan. Login kembali jika diperlukan, lalu ulangi proses pendaftaran.",
				},
			],
		},

		{
			section: "Pencetakan Kartu",
			id: "pencetakan-kartu",
			data: [
				{
					title: "Bagaimana jika hasil cetak Kartu Pendaftaran SSCASN tidak sesuai dengan isian?",
					content: "Lakukan clear history/bersihkan riwayat pelacakan, cache, cookies kemudian refresh browser Anda.",
				},
				{
					title: "Bagaimana cara mencetak ulang Kartu Informasi Akun SSCASN?",
					content: (
						<p>
							Silahkan login ke halaman
							<a target="_blank" className="text-blue-600 hover:text-blue-800 hover:text-[1.05rem]" href="https://daftar-sscasn.bkn.go.id/login">
								{" "}
								https://daftar-sscasn.bkn.go.id/login{" "}
							</a>
							dengan menggunakan NIK dan password yang telah Anda buat, lalu tekan tombol Cetak Kartu Informasi Akun.
						</p>
					),
				},
				{
					title: "Bagaimana jika Kartu Pendaftaran SSCASN saya hilang?",
					content: (
						<p>
							Silahkan login ke halaman
							<a target="_blank" className="text-blue-600 hover:text-blue-800 hover:text-[1.05rem]" href="https://daftar-sscasn.bkn.go.id/login">
								{" "}
								https://daftar-sscasn.bkn.go.id/login{" "}
							</a>
							dengan menggunakan NIK dan password yang telah Anda buat, lalu tekan tombol Cetak Kartu Pendaftaran.
						</p>
					),
				},
			],
		},

		{
			section: "Dokumen",
			id: "dokumen",
			data: [
				{
					title: "Bagaimana cara unggah dokumen persyaratan?",
					content:
						"Pastikan ukuran file dan jenis file yang akan di unggah tidak melebihi dari batasan masing masing dokumen yang dipersyaratkan di SSCASN. Apabila melebihi dari batasan ukuran yang ditetapkan, maka secara otomatis file atau dokumen yang Anda unggah akan ditolak oleh sistem.",
				},
				{
					title: "Bagaimana jika saya gagal unggah dokumen persyaratan?",
					content:
						"Silahkan refresh halaman dan pastikan ukuran file dan jenis file yang akan di unggah tidak melebihi dari batasan masing-masing dokumen yang dipersyaratkan dalam aplikasi SSCASN.",
				},
				{
					title: "Dokumen apa saja dan berapa ukuran dan tipe file yang diunggah?",
					content: (
						<p>
							Scan Pas Foto berlatar belakang merah maksimal 200 Kb bertipe file jpeg/jpg.
							<br />
							Scan Swafoto maksimal 200 Kb bertipe file jpeg/jpg. <br />
							Scan KTP maksimal 200 Kb bertipe file jpeg/jpg. <br />
							Scan Ijazah + Serdik/STR maksimal 800 Kb bertipe file pdf. <br />
							Scan Transkrip Nilai maksimal 500 Kb bertipe file pdf. <br />
							Scan Surat Penugasan Guru (Untuk THK-2) maksimal 500 Kb bertipe file pdf.
							<br />
							*) Syarat unggah dokumen berbeda-beda berdasarkan persyaratan dari masing-masing instansi
						</p>
					),
				},
				{
					title: "Bagaimana agar proses unggah dokumen dapat lebih cepat?",
					content:
						"Bersihkan riwayat pelacakan, cache, cookies, gunakan koneksi internet yang stabil, space bandwith yang cukup sehingga dalam pengiriman file atau berkas tidak mengalami kendala.",
				},
				{
					title: "Saya sudah melamar secara online, apakah perlu mengirimkan berkas fisik untuk seleksi administrasi?",
					content: "Berkas fisik untuk seleksi administrasi tergantung pada kebutuhan masing-masing instansi. Untuk itu perhatikan pengumuman dari masing-masing instansi.",
				},
				{
					title: "Apakah saya dapat mengganti dokumen yang sudah saya unggah?",
					content: "Dokumen yang sudah diunggah masih dapat diganti selama Anda belum klik “Akhiri Pendaftaran” pada halaman Pendaftaran.",
				},
			],
		},

		{
			section: "Syarat Daftar",
			id: "syarat-daftar",
			data: [
				{
					title: "Syarat Daftar Siapa saja yang dapat mendaftar pada Seleksi CPNS 2023? Berapa batas usia Pelamar yang dapat mendaftar pada Seleksi CPNS 2023?",
					content:
						"Warga Negara Indonesia yang berkeinginan dan memenuhi syarat sesuai peraturan masing-masing instansi (Formasi, Jabatan, dll) selama batas usia yang dipersyaratkan terpenuhi.",
				},
				{
					title: "Berapa batas usia Pelamar yang dapat mendaftar pada Seleksi CPNS 2023?",
					content:
						"Saat mendaftar batas usia pelamar Seleksi CPNS Tahun 2023 minimal 18 tahun dan maksimal 35 tahun atau maksimal 40 tahun bagi pelamar yang melamar jabatan Dokter dan Dokter Gigi, dengan kualifikasi pendidikan Dokter Spesialis dan Dokter Gigi Spesialis, Dokter Pendidik Klinis, Dosen, Peneliti dan Perekasaya, dengan kualifikasi pendidikan Strata 3 (Doktor), sesuai Peraturan Menteri Pendayagunaan Aparatur Sipil Negara dan Reformasi Birokrasi yang masih berlaku.",
				},
				{
					title: "Ketentuan Umum Pelamar yang dapat mendaftar pada Seleksi CPNS 2023?",
					content: (
						<p>
							1. Tidak pernah dipidana dengan pidana penjara 2 tahun atau lebih; <br />
							2. Tidak pernah diberhentikan dengan hormat tidak atas permintaan sendiri atau dengan tidak hormat sebagai PNS/Prajurit TNI/Kepolisian Negara RI;
							<br />
							3. Tidak pernah diberhentikan tidak dengan hormat sebagai pegawai swasta;
							<br />
							4. Tidak berkedudukan sebagai CPNS, PNS, prajurit TNI, atau anggota Kepolisian Negara RI; <br />
							5. Tidak menjadi anggota/pengurus Parpol atau terlibat politik praktis;
							<br />
							6. Memiliki kualifikasi pendidikan sesuai dengan persyaratan Jabatan; <br />
							7. Sehat jasmani dan rohani sesuai dengan persyaratan Jabatan yang dilamar;
							<br />
							8. Bersedia ditempatkan di seluruh wilayah NKRI atau negara lain yang ditentukan oleh Instansi Pemerintah.
						</p>
					),
				},
				{
					title: "Bagaimana jika KTP saya belum selesai dicetak oleh Dinas Kependudukan?",
					content: "Pelamar dapat mengunggah Surat Keterangan Kependudukan sebagai pengganti KTP untuk syarat pendaftaran CPNS 2023.",
				},
				{
					title: "Apakah diperbolehkan menggunakan Surat Keterangan Lulus dari Universitas untuk syarat pendaftaran?",
					content: "Silahkan cek syarat pendaftaran pada masing-masing Instansi yang membuka pendaftaran SSCASN 2023.",
				},
				{
					title: "Apakah Akreditasi Jurusan dan Akreditasi Kampus yang digunakan saat mendaftar adalah status akreditasi pada saat pelamar lulus atau akreditasi saat ini?",
					content: "Akreditasi Jurusan dan Akreditasi Kampus yang diakui adalah status akreditasi yang tertera pada saat kelulusan sesuai dengan tanggal ijazah.",
				},
				{
					title: "Apakah diperbolehkan memilih formasi yang lebih rendah dari dari ijazah yang saya miliki? (Misal: Saya memiliki ijazah S2 untuk melamar formasi S1)?",
					content: "Gunakan ijazah untuk melamar sesuai dengan formasi dan kualifikasi pendidikan yang dipersyaratkan.",
				},
				{
					title: "Apakah ada kontak yang dapat saya hubungi jika ada masalah dengan STR saya?",
					content: (
						<p>
							Helpdesk KFN (Komite Farmasi Nasional) <br />
							Jalan H.R. Rasuna Said Blok X 5 Kav. 4-9, Jakarta 12950 <br />
							Telp: (021) 5201590, ext.5809 <br />
							Email: sekretariat.kfn@gmail.com <br />
							Helpdesk KKI (Konsil Kedokteran Indonesia) <br />
							Whatsapp: 081113102210 / 081113102211 <br />
							Telp: (021) 31923193 <br />
							Instagram: @official.kki <br />
							Twitter: @kkigoid <br />
							Email: inamc@kki.go.id <br />
							Helpdesk KTKI (Komite Tenaga Kesehatan Indonesia) <br />
							Whatsapp: 087787214141 <br />
							Email: helpdesk.ktki@kemkes.go.id
						</p>
					),
				},
				{
					title: "Apakah ada persyaratan khusus lainnya?",
					content:
						"Setiap instansi mempunyai persyaratan khusus. Untuk itu pelamar diwajibkan membaca syarat pendaftaran masing-masing instansi serta memahami secara cermat dan teliti sebelum memutuskan mendaftar atau memilih formasi.",
				},
			],
		},

		{
			section: "Login",
			id: "login",
			data: [
				{
					title: "Bagaimana jika saya lupa password login ke Pendaftaran SSCASN?",
					content: (
						<p>
							Silahkan akses halaman Helpdesk SSCN di
							<a target="_blank" className="text-blue-600 hover:text-blue-800 hover:text-[1.05rem]" href="https://helpdesk-sscasn.bkn.go.id">
								{" "}
								https://helpdesk-sscasn.bkn.go.id{" "}
							</a>
							kemudian pilih menu “Reset Password Akun SSCN” dan lengkapi form isian yang tersedia.
						</p>
					),
				},
				{
					title: "Bagaimana jika saya lupa Jawaban Pengaman-1?",
					content: (
						<p>
							Silahkan akses halaman Helpdesk SSCN di
							<a target="_blank" className="text-blue-600 hover:text-blue-800 hover:text-[1.05rem]" href="https://helpdesk-sscasn.bkn.go.id">
								{" "}
								https://helpdesk-sscasn.bkn.go.id{" "}
							</a>{" "}
							kemudian pilih menu “Lupa Pertanyaan Pengaman 1” dan lengkapi form isian yang tersedia.{" "}
						</p>
					),
				},
				{
					title: "Bagaimana jika saya lupa Jawaban Pengaman-2?",
					content: (
						<p>
							Silahkan akses halaman Helpdesk SSCN di
							<a target="_blank" className="text-blue-600 hover:text-blue-800 hover:text-[1.05rem]" href="https://helpdesk-sscasn.bkn.go.id">
								{" "}
								https://helpdesk-sscasn.bkn.go.id{" "}
							</a>
							kemudian pilih menu “Lupa Pertanyaan Pengaman 2” dan lengkapi form isian yang tersedia.
						</p>
					),
				},
			],
		},

		{
			section: "Masa Sanggah",
			id: "masa-sanggah",
			data: [
				{
					title: "Apakah yang dimaksud dengan masa sanggah?",
					content:
						"Masa sanggah adalah waktu pengajuan sanggah yang diberikan kepada pelamar untuk melakukan sanggahan terhadap pengumuman hasil seleksi (seleksi administasi dan seleksi SKB), dan waktu tanggapan sanggah oleh instansi untuk memverifikasi kembali kesesuaian persyaratan umum dan khusus yang ditetapkan Instansi dengan dokumen persyaratan yang diajukan pelamar sampai dengan penetapan keputusan sanggah.",
				},
				{
					title: "Apakah pelamar dapat mengajukan sanggahan setelah pengumuman seleksi ?",
					content: (
						<p>
							Apabila setelah dilakukan pengumuman seleksi administrasi terdapat pelamar yang keberatan terhadap hasil keputusan Instansi, pelamar dapat mengajukan sanggahan paling
							lama 3 (tiga) hari kalender setelah pengumuman hasil seleksi administrasi dengan login ke halaman SSCN di
							<a target="_blank" className="text-blue-600 hover:text-blue-800 hover:text-[1.05rem]" href="https://daftar-sscasn.bkn.go.id/login">
								https://daftar-sscasn.bkn.go.id/login
							</a>
							, lalu mengisikan sanggahannya dengan menjabarkan kronologis dan mengunggah bukti dukung yang diperlukan.{" "}
						</p>
					),
				},
				{
					title: "Apakah pelamar dapat mengajukan sanggahan setelah pengumuman seleksi SKB?",
					content: (
						<p>
							Apabila setelah dilakukan pengumuman seleksi SKB terdapat pelamar yang keberatan terhadap hasil keputusan Instansi, pelamar dapat mengajukan sanggahan paling lama 3
							(tiga) hari kalender setelah pengumuman hasil seleksi SKB dengan login ke halaman SSCN di
							<a target="_blank" className="text-blue-600 hover:text-blue-800 hover:text-[1.05rem]" href="https://daftar-sscasn.bkn.go.id/login">
								https://daftar-sscasn.bkn.go.id/login
							</a>
							, lalu mengisikan sanggahannya dengan menjabarkan kronologis dan mengunggah bukti dukung yang diperlukan.{" "}
						</p>
					),
				},
				{
					title: "Kapan batas waktu pengumuman ulang instansi setelah masa sanggah?",
					content:
						"Apabila pelamar dapat membuktikan bahwa dokumen persyaratan yang telah diunggah/disampaikan telah sesuai dengan persyaratan umum dan khusus yang ditentukan oleh instansi, instansi wajib mengumumkan ulang hasil seleksi paling lama 7 (tujuh) hari kalender setelah berakhirnya waktu pengajuan sanggah. Dengan catatan, dokumen persyaratan yang digunakan untuk sanggahan, adalah data pelamar saat awal mendaftar di SSCASN.",
				},
			],
		},

		{
			section: "Perbaikan Data",
			id: "perbaikan-data",
			data: [
				{
					title: "Apakah boleh memperbaiki data jika sudah klik (Akhiri Pendaftaran) di halaman Resume?",
					content:
						"Anda TIDAK DAPAT memperbaiki data jika sudah klik “Akhiri Pendaftaran” di halaman Resume. Untuk itu Anda harus BERHATI-HATI dalam mengisi data. Namun demikian, apabila ternyata masih terdapat data yang perlu diperbaiki setelah terkirim maka data tersebut dapat diperbaiki setelah lulus ujian dan akan diproses pada waktu pemberkasan penetapan NIP.",
				},
				{
					title: "Dapatkah saya mengganti/membatalkan instansi yang telah saya pilih?",
					content:
						"Anda dapat mengganti instansi yang telah Anda pilih selama Anda belum mengklik tombol (Akhiri Pendaftaran). Apabila Anda telah mengakhiri pendaftaran, Anda tidak dapat melakukan perubahan kembali.",
				},
				{
					title: "Bagaimana jika saya salah memasukkan (Nama) pada form Biodata saat pembuatan Akun?",
					content:
						"Data (Nama) tidak dapat diubah setelah Anda klik (Akhiri Pendaftaran) dihalaman di SSCN, namun dapat diperbaiki kemudian ketika Anda telah lulus seleksi CPNS dengan melampirkan (Nama) yang sesuai pada ijazah tanpa gelar.",
				},
				{
					title: "Bagaimana cara mengubah pilihan instansi pendaftaran?",
					content:
						"Selama Anda belum klik “Akhiri Pendaftaran” di halaman Resume Anda masih dapat mengubah pilihan instansi yang dilamar. Namun, jika Anda telah klik “Akhiri Pendaftaran” maka TIDAK DAPAT MELAKUKAN PERUBAHAN pilihan instansi yang dilamar.",
				},
			],
		},
	];

	const handleAccordionClick = (index) => {
		setOpenIndex(openIndex === index ? null : index);
	};

	const scroolTo = (id) => {
		const element = document.getElementById(id);
		element.scrollIntoView({
			behavior: "smooth",
		});
	};
	return (
		<div className="w-screen h-screen scroll-smooth">
			<div className="container mx-auto p-10 md:px-20 grid gap-10">
				<h1 className="text-center font-bold text-3xl text-[#40588A]">Frequently Asked Questions (CPNS)</h1>

				<div className="grid grid-cols-12 gap-5">
					{/* SIDEBAR */}
					<div className="col-span-4 flex flex-col">
						<div className="w-full flex flex-col border-2 rounded-lg">
							{link.map((e, i) => (
								<span
									key={i}
									onClick={() => scroolTo(e.id)}
									className={`text-blue-700 cursor-pointer hover:text-blue-800 hover:font-semibold px-4 py-2 ${e.title !== "Syarat Daftar" && "border-b-2"}`}
								>
									{e.title}
								</span>
							))}
						</div>
					</div>

					{/* ACCORDION */}
					<div className="col-span-8 border-2 rounded-lg px-3 h-[350px] md:h-[400px] overflow-y-scroll flex flex-col gap-5">
						{data.map((e, i) => (
							<div key={i} id={e.id}>
								<h1 className="text-xl font-bold text-slate-700 px-3 py-2">{e.section}</h1>

								<div className="bg-[#EFFDF5]">
									{e.data.map((accordion, index) => (
										<Accordion key={index} title={accordion.title} isOpen={openIndex === index} onClick={() => handleAccordionClick(index)}>
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
