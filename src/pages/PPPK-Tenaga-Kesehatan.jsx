import { useState } from "react";
import Accordion from "../component/Accordion";

export default function PPPKTenagaKesehatan() {
	const [openIndex, setOpenIndex] = useState(null);

	const link = [
		{ title: "Kategori Pelamar", id: "kategori-pelamar" },
		{ title: "Tempat Melamar", id: "tempat-melamar" },
		{ title: "Persyaratan Pelamar", id: "persyaratan-pelamar" },
		{ title: "Kualifikasi Pendidikan", id: "kualifikasi-pendidikan" },
		{ title: "STR Pelamar", id: "str-pelamar" },
		{ title: "Pengalaman Kerja", id: "pengalaman-kerja" },
		{ title: "Pengadaan Seleksi", id: "pengadaan-seleksi" },
		{ title: "Gaji dan Tunjangan", id: "gaji-dan-tunjangan" },
		{ title: "Konsekuensi", id: "konsekuensi" },
		{ title: "Ketentuan Nilai Ambang Batas (NAB)", id: "nab" },
	];

	const data = [
		{
			section: "Kategori Pelamar",
			id: "kategori-pelamar",
			data: [
				{
					title:
						"Siapa saja yang dapat mendaftar dan mengikuti seleksi PPPK Jabatan Fungsional Tenaga Kesehatan Tahun 2023?",
					content: (
						<p>
							Seluruh tenaga kesehatan warga negara Indonesia (WNI) yang memenuhi persyaratan kualifikasi pendidikan
							sesuai SE Dirjen Nakes Nomor 1365 Tahun 2023 dan Nomor 2181 Tahun 2023, memiliki pengalaman kerja sesuai
							dengan Jabatan Fungsional Kesehatan yang dilamar minimal 2 tahun, memenuhi syarat STR sesuai Keputusan
							Menteri PAN dan RB Nomor 654 Tahun 2023 serta memenuhi persyaratan lain sesuai peraturan perundangan.
						</p>
					),
				},
				{
					title:
						"Ada berapa jenis formasi/kebutuhan pada pengadaan PPPK Jabatan Fungsional Tenaga Kesehatan Tahun 2023?",
					content: (
						<p>
							Jenis formasi/kebutuhan pada pengadaan PPPK Jabatan Fungsional Tenaga Kesehatan Tahun 2023 terbagi menjadi
							2 (dua), yaitu: <br />
							1. Khusus <br />
							2. Umum
						</p>
					),
				},
				{
					title:
						"Apa saja kriteria pelamar formasi/kebutuhan khusus pada Pengadaan PPPK Jabatan Fungsional Tenaga Kesehatan Tahun 2023?",
					content: (
						<p>
							Kriteria pelamar pada formasi/kebutuhan khusus adalah: <br />
							1. Eks Tenaga Honorer Kategori I (eks THK-II) yang terdata dalam database BKN dan melamar pada instansi
							pemerintah tempat bekerja saat mendaftar <br />
							2. Tenaga kesehatan non ASN yang melamar pada instansi* pemerintah tempat bekerja saat mendaftar dan
							memiliki pengalaman kerja paling sedikit 2 (dua) tahun secara terus-menerus pada instansi* yang dilamar{" "}
							<br />
							*) Instansi Pemerintah adalah Kementerian/Lembaga atau Pemerintah Provinsi/Kabupaten/Kota (dalam satu
							Pejabat Pembina Kepegawaian (PPK)).
						</p>
					),
				},
				{
					title:
						"Apakah pelamar dari fasilitas kesehatan Swasta bisa mengikuti seleksi PPPK Jabatan Fungsional Tenaga Kesehatan Tahun 2023?",
					content: (
						<p>
							Bisa, sepanjang pelamar yang bekerja di fasilitas kesehatan Swasta memenuhi persyaratan kualifikasi
							pendidikan sesuai SE Dirjen Nakes Nomor 1365 Tahun 2023 dan Nomor 2181 Tahun 2023, memiliki pengalaman
							kerja sesuai dengan Jabatan Fungsional Kesehatan yang dilamar minimal 2 tahun, memenuhi syarat STR sesuai
							Keputusan Menteri PAN dan RB Nomor 654 Tahun 2023 serta memenuhi persyaratan lain sesuai peraturan
							perundangan.
						</p>
					),
				},
				{
					title:
						"Apakah pelamar dari fasilitas kesehatan Swasta bisa melamar pada formasi/kebutuhan khusus PPPK Jabatan Fungsional Tenaga Kesehatan Tahun 2023?",
					content: (
						<p>
							Tidak bisa, karena formasi/kebutuhan khusus hanya diperuntukkan bagi pelamar yang memiliki kriteria:{" "}
							<br />
							1. Eks Tenaga Honorer Kategori I (eks THK-II) yang terdata dalam database BKN
							<br />
							2. Tenaga kesehatan non ASN yang melamar pada instansi pemerintah dan memiliki pengalaman kerja* paling
							sedikit 2 (dua) tahun secara terus-menerus di tempat bekerja saat mendaftar
						</p>
					),
				},
				{
					title:
						"Apakah pelamar yang termasuk kriteria formasi/kebutuhan khusus bisa melamar pada formasi/kebutuhan umum PPPK Jabatan Fungsional Tenaga Kesehatan Tahun 2023?",
					content: (
						<p>
							Bisa, namun terhadap pelamar yang bersangkutan akan diberlakukan Nilai Ambang Batas kelulusan pada seleksi
							kompetensi teknis, baik pada jenis jabatan yang mensyaratkan STR maupun jenis jabatan yang tidak
							mensyaratkan STR
						</p>
					),
				},
				{
					title:
						"Apakah pelamar yang berasal dari fasilitas kesehatan milik Pemerintah maupun Swasta harus terdata di SISDMK?",
					content: (
						<p>
							Tidak, untuk pelamar dari fasilitas kesehatan milik Pemerintah maupun Swasta tidak harus terdata dalam
							SISDMK <br />
							*) Sangat dianjurkan untuk selalu disiplin menginput dan memutakhirkan data individu di SISDMK, sebagai
							rekomendasi kebijakan 2024
						</p>
					),
				},
				{
					title:
						"Apakah tenaga kesehatan yang saat ini sedang tidak bekerja di faskes manapun (baik Pemerintah maupun Swasta), dapat melamar PPPK JF Kesehatan Tahun 2023?",
					content: (
						<p>Bisa, namun tenaga kesehatan yang bersangkutan hanya dapat melamar pada formasi/kebutuhan umum.</p>
					),
				},
			],
		},

		{
			section: "Tempat Melamar",
			id: "tempat-melamar",
			data: [
				{
					title:
						"Apakah pelamar yang termasuk kriteria formasi/kebutuhan khusus diperbolehkan melamar di fasilitas kesehatan lain, bukan pada fasilitas kesehatan tempat bekerja saat ini?",
					content: (
						<p>
							Diperbolehkan, pelamar dapat melamar pada fasilitas kesehatan manapun yang membuka lowongan formasi, baik
							di tempat bekerja saat ini maupun fasilitas kesehatan lainnya, baik di instansi yang sama ataupun di
							instansi yang berbeda,
							<br />
							1. Jika melamar pada instansi* yang sama, maka masuk dalam kategori formasi/kebutuhan khusus <br />
							2. Jika melamar pada instansi* yang berbeda, maka masuk dalam kategori formasi/kebutuhan umum <br />
							*) Instansi Pemerintah adalah Kementerian/Lembaga atau Pemerintah Provinsi/Kabupaten/Kota (dalam satu
							Pejabat Pembina Kepegawaian (PPK)).
						</p>
					),
				},

				{
					title: "Apakah diperbolehkan melamar di instansi lain, bukan pada instansi tempat bekerja saat ini?",
					content: <p>Diperbolehkan, namun pelamar masuk pada formasi/kebutuhan umum.</p>,
				},

				{
					title:
						"Apakah tenaga kesehatan yang sudah bekerja secara terus menerus selama 2 tahun di fasilitas kesehatan A, kemudian melamar di fasilitas kesehatan B dan masih dalam satu instansi, masuk dalam formasi/kebutuhan khusus?",
					content: (
						<p>
							Ya, tenaga kesehatan yang melamar pada fasilitas kesehatan yang berbeda namun masih dalam satu instansi,
							maka masuk sebagai pelamar formasi/kebutuhan khusus.
						</p>
					),
				},

				{
					title:
						"Apoteker yang sudah bekerja selama 2 tahun secara terus menerus di Puskesmas Kertosari Kabupaten Banyuwangi kemudian melamar pada formasi Apoteker Ahli Pertama di Puskesmas Singotrunan Kabupaten Banyuwangi, yang bersangkutan masuk sebagai pelamar pada formasi/kebutuhan umum atau formasi/kebutuhan khusus?",
					content: (
						<p>
							Apoteker tersebut masuk sebagai pelamar formasi/kebutuhan khusus, karena melamar pada fasilitas kesehatan
							di Kabupaten (instansi) yang sama
						</p>
					),
				},

				{
					title:
						"Tenaga kesehatan lingkungan yang sudah bekerja selama 2 tahun secara terus menerus di RSUD Pemangkat Kabupaten Sambas kemudian melamar pada formasi Tenaga Sanitasi Lingkungan Terampil di Puskesmas Sungai Kunyit Kabupaten Mempawah, yang bersangkutan masuk sebagai pelamar pada formasi/kebutuhan umum atau formasi/kebutuhan khusus?",
					content: (
						<p>
							Tenaga kesehatan lingkungan tersebut masuk sebagai pelamar formasi/kebutuhan umum, karena melamar pada
							fasilitas kesehatan di Kabupaten (instansi) yang berbeda
						</p>
					),
				},
			],
		},

		{
			section: "Persyaratan Pelamar",
			id: "persyaratan-pelamar",
			data: [
				{
					title:
						"Apa saja persyaratan umum untuk dapat mengikuti dan mendaftar seleksi PPPK Jabatan Fungsional Tenaga Kesehatan?",
					content: (
						<p>
							Persyaratan Umum Pelamar PPPK Jabatan Fungsional Tenaga Kesehatan Tahun 2023 mengacu kepada Peraturan
							Menteri PAN dan RB Nomor 14 Tahun 2023, sebagai berikut: <br />
							1. usia paling rendah 20 (dua puluh) tahun dan paling tinggi 1 (satu) tahun sebelum batas usia tertentu
							pada jabatan yang akan dilamar sesuai dengan ketentuan peraturan perundang-undangan; <br />
							2. tidak pernah dipidana dengan pidana penjara berdasarkan putusan pengadilan yang sudah mempunyai
							kekuatan hukum tetap karena melakukan tindak pidana dengan pidana penjara 2 (dua) tahun atau lebih; <br />
							3. tidak pernah diberhentikan dengan hormat tidak atas permintaan sendiri atau tidak dengan hormat sebagai
							Pegawai Negeri Sipil, PPPK, Prajurit Tentara Nasional Indonesia, anggota Kepolisian Negara Republik
							Indonesia, atau diberhentikan tidak dengan hormat sebagai pegawai swasta; <br />
							4. tidak menjadi anggota atau pengurus partai politik atau terlibat politik praktis; <br />
							5. memiliki kualifikasi pendidikan sesuai dengan persyaratan jabatan; <br />
							6. memiliki kompetensi yang dibuktikan dengan sertifikasi keahlian tertentu yang masih berlaku dari
							lembaga yang berwenang untuk jabatan yang mempersyaratkan;
							<br />
							7. sehat jasmani dan rohani sesuai dengan persyaratan jabatan yang dilamar;
							<br />
							8. persyaratan lain sesuai kebutuhan jabatan yang ditetapkan oleh PPK
						</p>
					),
				},

				{
					title:
						"Apa saja persyaratan khusus untuk dapat mengikuti dan mendaftar seleksi PPPK Jabatan Fungsional Tenaga Kesehatan?",
					content: (
						<p>
							1. Memiliki persyaratan kualifikasi pendidikan sesuai SE Dirjen Nakes Nomor 1365 Tahun 2023 dan Nomor 2181
							Tahun 2023, memiliki pengalaman kerja sesuai dengan JF Kesehatan yang dilamar minimal 2 tahun, memenuhi
							syarat STR sesuai Keputusan Menteri PAN dan RB Nomor 654 Tahun 2023 serta memenuhi persyaratan lain sesuai
							peraturan perundangan. <br />
							2. Memiliki STR aktif dan masih berlaku (bukan STR Internship) bagi JF yang dipersyaratkan STR pada saat
							pelamaran <br />
							3. Memiliki pengalaman/masa kerja pelamar PPPK adalah minimal 2 tahun dan sesuai dengan jabatan/bidang
							tugas yang dilamar (sesuai Peraturan Menteri PAN RB Nomor 14 Tahun 2019 Pasal 6 Ayat 1 Huruf e) <br />
							4. Setiap pelamar wajib memiliki pengalaman di bidang kerja yang relevan dengan JF yang dilamar pada saat
							pendaftaran dengan ketentuan sebagai berikut: <br />
							a. paling singkat 2 tahun untuk jenjang pemula, terampil, mahir, penyelia dan ahli pertama. <br />
							b. paling singkat 3 tahun untuk jenjang muda <br />
							c. paling singkat 5 tahun untuk jenjang madya <br />
							d. paling singkat 7 tahun untuk jenjang utama <br />
							5. Masa kerja dihitung dari pengalaman kerja pelamar saat bekerja di fasilitas kesehatan milik Pemerintah
							maupun Swasta yang dibuktikan dengan Surat Keterangan dari pimpinan unit kerja. <br />
							6. Bagi Pelamar Dokter, masa kerja sebagai sebagai Dokter internship dapat diperhitungkan sebagai
							pengalaman masa kerja <br />
							7. Bagi pelamar penyandang disabilitas : <br />
							a. pelamar dapat melamar pada jabatan yang diinginkan jika memiliki kualifikasi pendidikan dan STR sesuai
							ketentuan dalam SE Dirjen Nakes <br />
							b. Selain harus memenuhi persyaratan umum, pelamar penyandang disabilitas harus memenuhi ketentuan
							tambahan sebagai berikut: <br />
							- melampirkan surat keterangan dari dokter rumah sakit pemerintah/puskesmas yang menerangkan jenis dan
							derajat kedisabilitasannya <br />- menyampaikan video singkat yang menunjukkan kegiatan sehari-hari dalam
							menjalankan aktivitas sesuai jabatan yang akan dilamar
						</p>
					),
				},

				{
					title: "Apa saja berkas yang harus disiapkan untuk dapat mengikuti dan mendaftar seleksi PPPK JF Kesehatan?",
					content: (
						<p>
							1. Pas Foto dengan latar belakang merah format JPEG/JPG dengan ukuran maksimal 200 KB <br />
							2. Surat pernyataan dengan ketentuan sebagai berikut: surat pernyataan diketik dengan komputer, bermaterai
							Rp10.000,- dan ditandatangani sendiri dengan tinta hitam, dibuat pada saat tanggal pendaftaran; <br />
							3. Scan Kartu Tanda Penduduk (KTP) ASLI atau Surat Keterangan ASLI telah melakukan perekaman kependudukan
							yang dikeluarkan oleh Dinas Kependudukan dan Pencatatan Sipil (Disdukcapil); <br />
							4. Scan Ijazah ASLI dan Transkrip Nilai ASLI jenjang DIII/D-IV/S-1 dan Surat Penyetaraan Ijazah Asli.{" "}
							<br />
							5. Scan Surat Tanda Registrasi (STR) bukan STR Internship ASLI bagi Jabatan Fungsional yang mensyaratkan
							STR; <br />
							6. Scan SK Penugasan yang ditandatangani oleh Kepala Unit Kerja terunggah; dan
							<br />
							7. Scan Surat Rekomendasi Pengalaman Kerja yang ditandatangani oleh atasan langsung, bermaterai
							Rp.10.000,- <br />
							8. Bagi pelamar penyandang disabilitas: <br />
							a. menambahkan surat keterangan penyandang disabilitas dari rumah sakit/puskesmas milik Pemerintah; <br />
							9. Melampirkan link video singkat melakukan kegiatan sehari-hari dalam menjalankan tugas sebagai tenaga
							kesehatan.
						</p>
					),
				},
			],
		},

		{
			section: "Kualifikasi Pendidikan",
			id: "kualifikasi-pendidikan",
			data: [
				{
					title:
						"Apakah boleh Sarjana Kesehatan Masyarakat dengan Peminatan/ Jurusan Gizi melamar pada Jabatan Fungsional Nutrisionis Jenjang Ahli Pertama?",
					content: (
						<p>
							Tidak boleh, <br />
							Mengacu kepada SE Dirjen Nakes Nomor 1365 Tahun 2023, Sarjana Kesehatan Masyarakat dengan Peminatan/
							Jurusan Gizi tidak dapat melamar pada Jabatan Fungsional Nutrisionis Jenjang Ahli Pertama karena rumpun
							keilmuan Gizi berbeda/terpisah dari rumpun keilmuan Kesehatan Masyarakat.
						</p>
					),
				},

				{
					title: "Apakah bisa jika S1 Farmasi melamar pada Jabatan Fungsional Apoteker?",
					content: (
						<p>
							Tidak bisa, <br />
							Mengacu kepada SE Dirjen Nakes Nomor 1365 Tahun 2023, S1 Farmasi tidak dapat melamar pada Jabatan
							Fungsional Apoteker karena S1 Farmasi merupakan pendidikan akademik bukan profesi. Sementara Jabatan
							Fungsional Apoteker hanya dapat diisi oleh pelamar dengan kualifikasi pendidikan Profesi Apoteker
						</p>
					),
				},

				{
					title: "Apakah bisa jika S1 Farmasi melamar pada Jabatan Fungsional Asisten Apoteker (Jenjang Terampil)?",
					content: (
						<p>
							Tidak bisa, <br />
							Mengacu kepada SE Dirjen Nakes, S1 Farmasi tidak dapat melamar down grade pada Jabatan Fungsional Asisten
							Apoteker (Jenjang Terampil) karena S1 Farmasi merupakan kualifikasi pendidikan akademik dengan kategori
							jenjang keahlian, sementara Asisten Apoteker adalah jabatan fungsional dengan kategori jenjang
							keterampilan yang mensyaratkan kualifikasi pendidikan vokasi, dimana terdapat perbedaan dalam level
							kompetensi diantara keduanya.
						</p>
					),
				},

				{
					title: "Apakah bisa jika S1 Farmasi melamar pada Jabatan Fungsional Asisten Apoteker (Jenjang Terampil)?",
					content: (
						<p>
							Tidak bisa, <br />
							Mengacu kepada SE Dirjen Nakes, S1 Farmasi tidak dapat melamar down grade pada Jabatan Fungsional Asisten
							Apoteker (Jenjang Terampil) karena S1 Farmasi merupakan kualifikasi pendidikan akademik dengan kategori
							jenjang keahlian, sementara Asisten Apoteker adalah jabatan fungsional dengan kategori jenjang
							keterampilan yang mensyaratkan kualifikasi pendidikan vokasi, dimana terdapat perbedaan dalam level
							kompetensi diantara keduanya.
						</p>
					),
				},

				{
					title:
						"Apakah tenaga kesehatan dengan kualifikasi pendidikan D3 Analis Farmasi dan Makanan (D3 ANAFARMA) bisa melamar pada Jabatan Fungsional Asisten Apoteker, karena selama ini sudah bekerja sebagai Asisten Apoteker dan memiliki STR Tenaga Teknis Kefarmasian?",
					content: (
						<p>
							Tidak bisa, <br />
							Mengacu kepada SE Dirjen Nakes Nomor 1365 Tahun 2023, lulusan D3 Analis Farmasi dan Makanan tidak dapat
							melamar Jabatan Fungsional Asisten Apoteker (Jenjang Terampil) meskipun memiliki STR TTK, karena
							kompetensi yang dimiliki lulusan D3 Analis Farmasi dan Makanan adalah dalam bidang laboratorium farmasi
							dan makanan, sementara kompetensi yang diperlukan untuk mengisi Jabatan Fungsional Asisten Apoteker adalah
							dalam bidang pelayanan kefarmasian
						</p>
					),
				},

				{
					title: "Apakah ada formasi untuk kualifikasi pendidikan D3 Analis Farmasi dan Makanan (ANAFARMA)?",
					content: (
						<p>
							Ada, <br />
							Mengacu kepada SE Dirjen Nakes Nomor 1365 Tahun 2023, D3 Analis Farmasi dan Makanan (Anafarma) dapat
							mengisi formasi Jabatan Fungsional Epidemiolog Kesehatan Jenjang Terampil atau Pranata Laboratorium
							Kesehatan jenjang Terampil atau Tenaga Promosi Kesehatan dan Ilmu Perilaku jenjang Terampil.
						</p>
					),
				},

				{
					title:
						"Apakah diperbolehkan pelamar yang telah memiliki ijazah S1 dan STR keahlian melamar menggunakan ijazahD3 dan STR keterampilan yang dimiliki untuk melamar pada formasi jenjang Terampil (downgrade jenjangjabatan yang dilamar)?",
					content: (
						<p>
							Boleh, <br />
							Sepanjang kualifikasi pendidikan dan STR pelamar tersebut linier dan setara dengan jenjang jabatan yang
							dilamar serta memenuhi persyaratan lainnya. <br />
							Namun hal tersebut (down grade jenjang jabatan yang dilamar) sangat tidak disarankan, mengingat kompetensi
							yang bersangkutan telah melampaui kompetensi yang diharapkan/dipersyaratkan dengan ijazah dan STR jenjang
							Keahlian yang dimiliki dan seharusnya mengisi formasi yang sesuai/setara dengan jenjang jabatan.
						</p>
					),
				},

				{
					title: "Apakah tenaga kesehatan bisa melamar apabila STR masih dalam proses perpanjangan?",
					content: (
						<p>
							Tidak bisa, <br />
							Untuk Jabatan Fungsional Kesehatan yang mensyaratkan STR, pelamar harus mengunggah STR yang masih aktif
							(tidak boleh mengunggah STR dalam masa perpanjangan) sesuai dengan Keputusan Menteri PAN dan RB Nomor 654
							Tahun 2023 Tentang Persayaratan STR Untuk Melamar Pada Jabatan Fungsional Kesehatan Dalam Pengadaaan PPPK
							Tahun Anggaran 2023 Dan untuk Jabatan Fungsional Kesehatan yang tidak mensyaratkan STR tidak perlu
							mengunggah STR.
						</p>
					),
				},

				{
					title:
						"Apakah tenaga kesehatan dengan kualifikasi pendidikan terakhir pada jenjang keahlian dapat digunakan untuk melamar pada jenjang terampil?",
					content: (
						<p>
							Tidak bisa, <br />
							Kecuali jika tenaga kesehatan tersebut memiliki dan menggunakan kualifikasi pendidikan dan STR jenjang
							terampil pada saat melamar pada Jabatan Fungsional Kesehatan Jenjang Terampil. Karena kompetensi (down
							grade jenjang jabatan yang dilamar) yang bersangkutan telah melampaui kompetensi yang
							diharapkan/dipersyaratkan dengan ijazah dan STR jenjang Keahlian yang dimiliki dan seharusnya mengisi
							formasi yang sesuai/setara dengan jenjang jabatan.
						</p>
					),
				},
				{
					title:
						"Apakah pelamar dengan kualifikasi pendidikan D4 Tenaga Promosi Kesehatan dan memiliki STR AhliKesehatan Masyarakat bisa melamar pada Jabatan Fungsional Tenaga Promosi Kesehatan dan Ilmu Perilakujenjang Ahli Pertama?",
					content: (
						<p>
							Bisa, <br />
							Berdasarkan Keputusan Menteri PAN RB Nomor 654 Tahun 2023 menyatakan untuk Jabatan Fungsional Tenaga
							Promosi Kesehatan dan Ilmu Perilaku jenjang ahli pertama tidak dipersyaratkan STR pada saat melamar.
						</p>
					),
				},
				{
					title:
						"Mengapa Instansi Daerah tidak diperbolehkan memilih kualifikasi pendidikan untuk Jabatan FungsionalAdministrator Kesehatan sementara Kementerian Kesehatan diperbolehkan?",
					content: (
						<p>
							Karena Instansi Daerah merupakan Instansi Pengguna, sementara Kementerian Kesehatan sebagai Instansi
							Pembina Jabatan Fungsional Kesehatan memiliki tugas dan kewenangan menyusun regulasi/kebijakan bidang
							kesehatan sesuai fungsi masing-masing Unit Teknis Kementerian Kesehatan <br />
							Contoh: <br />
							Direktorat Farmasi dan Alat Kesehatan memerlukan tenaga lulusan S1 Farmasi/ Profesi Apoteker untuk
							Menyusun kebijakan terkait obat dan alat kesehatan
						</p>
					),
				},
			],
		},

		{
			section: "STR Pelamar",
			id: "str-pelamar",
			data: [
				{
					title:
						"Apakah STR Keahlian dapat digunakan untuk melamar pada JF Kesehatan Jenjang Terampil yang mensyaratkan STR?",
					content: (
						<p>
							Tidak dapat, karena STR harus setara dengan kualifikasi pendidikan dan jenjang jabatan yang akan dilamar.
						</p>
					),
				},

				{
					title: "Bagaimana cara mengurus dan mengecek STR tenaga medis dan tenaga kesehatan?",
					content: (
						<p>
							Untuk tenaga medis, bisa mengurus dan mengecek STR melalui web resmi Konsil Kedokteran Indonesia (KKI)
							yaitu
							<a href="https://registrasi.kki.go.id/">https://registrasi.kki.go.id/</a> <br />
							Untuk tenaga kesehatan, bisa mengurus dan mengecek STR melalui web resmi Konsil Tenaga Kesehatan Indonesia
							(KTKI) yaitu
							<a href="https://ktki.kemkes.go.id/">https://ktki.kemkes.go.id/</a>
						</p>
					),
				},

				{
					title: "Berapa lamakah waktu yang dibutuhkan untuk mengurus STR?",
					content: (
						<p>
							STR bisa diperoleh dengan mudah dan cepat, karena saat ini pengurusan STR dilakukan melalui e-STR online
							yang dapat diterbitkan dalam jangka waktu maksimal 15 hari sesuai janji layanan KTKI dan maksimal 14 hari
							sesuai janji layanan KKI sepanjang tenaga kesehatan telah memenuhi syarat administrasi dan mengunggah
							berkas yang dipersyaratkan.
						</p>
					),
				},

				{
					title:
						"Apakah tenaga kesehatan yang melamar pada formasi Jabatan Fungsional Kesehatan dengan kualfikasi pendidikan yang tidak mensyaratkan STR saat mendaftar/saat melamar, kemudian diwajibkan memiliki STR setelah dinyatakan diterima PPPK Tenaga Kesehatan Tahun 2023?",
					content: (
						<p>
							Ketentuan STR bagi pelamar PPPK Jabatan Fungsional Tenaga Kesehatan saat mendaftar/saat melamar mengacu
							kepada Keputusan Menteri PAN dan RB Nomor 654 Tahun 2023 Ketentuan STR bagi pelamar setelah dinyatakan
							lulus seleksi PPPK Tenaga Kesehatan mengacu kepada SE Dirjen Nakes Nomor 1635 Tahun 2023, dimana STR akan
							diterbitkan berdasarkan kualifikasi pendidikan sebagai syarat melakukan pekerjaan. Bagi jabatan fungsional
							yang kualifikasi pendidikannya Akademik (S1/S2/S3 Non Profesi) tidak diwajibkan mengurus dan memiliki STR
							setelah diangkat dan bekerja sebagai PPPK Jabatan Fungsional Kesehatan.
						</p>
					),
				},

				{
					title: "Saya sudah melamar secara online, apakah perlu mengirimkan berkas fisik untuk seleksi administrasi?",
					content: (
						<p>
							Untuk seleksi Administrasi, instansi dapat mendyaratkan dokumen fisik yang diatur dalam persyaratan.
							Instansi yang mensyaratkan dokumen fisik disarankan tidak menyulitkan pelamar, dikarenakan sudah terdapat
							fitur unggah dokumen pada SSCASN, berkas fisik ataupun pemeriksaan fisik hanya dilakukan jika terdapat
							ketentuan khusus.
						</p>
					),
				},

				{
					title: "Apakah saya dapat mengganti dokumen yang sudah saya unggah?",
					content: <p>Dokumen yang sudah diunggah masih dapat diganti selama Anda belum klik “Akhiri Pendaftaran”.</p>,
				},

				{
					title:
						"Apakah tenaga kesehatan yang melamar pada formasi JF Kesehatan yang mensyaratkan STR saat melamar, kemudian diwajibkan memiliki STR setelah dinyatakan diterima PPPK Tenaga Kesehatan Tahun 2023?",
					content: (
						<p>
							Ketentuan STR bagi pelamar PPPK Jabatan Fungsional Tenaga Kesehatan saat melamar mengacu kepada Keputusan
							Menteri PAN dan RB Nomor 654 Tahun 2023 Ketentuan STR bagi pelamar setelah dinyatakan lulus seleksi PPPK
							Tenaga Kesehatan mengacu kepada SE Dirjen Nakes Nomor 1635 Tahun 2023, dimana STR akan diterbitkan
							berdasarkan kualifikasi pendidikan sebagai syarat melakukan pekerjaan. Bagi jabatan fungsional yang
							kualifikasi pendidikannya Vokasi (D3) atau Sarjana Terapan (D4) atau Profesi diwajibkan mengurus dan
							memiliki STR setelah diangkat dan bekerja sebagai PPPK Jabatan Fungsional Kesehatan.
						</p>
					),
				},

				{
					title:
						"Terkait persyaratan STR, menurut UU Kesehatan Nomor 17 Tahun 2023, Pasal 260 ayat 4 menyatakan bahwa STR berlaku seumur hidup. Bagaimana jika saat melamar (mendaftar pada SSCASN) STR tersebut sudah tidak aktif (habis masa berlakunya)?",
					content: (
						<p>
							Bagi tenaga kesehatan yang melamar pada formasi jabatan fungsional yang mensyaratkan STR sesuai SE Dirjen
							Nakes Nomor 1365 Tahun 2023, maka saat mendaftar pelamar harus menyertakan/mengunggah STR aktif yang masih
							berlaku. Apabila tidak mengunggah STR aktif atau mengunggah STR yang sudah tidak aktif, maka pelamar
							tersebut tidak lulus Seleksi Administrasi Dalam masa transisi implementasi UU Kesehatan Nomor 17 Tahun
							2023 dan sembari menunggu terbitnya Rancangan Peraturan Pemerintah sebagai regulasi turunan UU, maka
							ketentuan mengenai STR mengacu kepada SE Menteri Kesehatan Nomor HK.02.01/MENKES/1911/2023 Tentang
							Penyelenggaraan Registrasi dan Perizinan Tenaga Medis dan Tenaga Kesehatan Pasca Terbitnya Undang-Undang
							Nomor 17 Tahun 2023 Tentang Kesehatan.
						</p>
					),
				},

				{
					title: "Apakah terdapat regulasi atau kebijakan yang mengatur tentang tata cara pengurusan STR?",
					content: (
						<p>
							Dalam masa transisi implementasi UU Kesehatan Nomor 17 Tahun 2023 dan sembari menunggu terbitnya Rancangan
							Peraturan Pemerintah sebagai regulasi turunan UU, maka ketentuan mengenai STR mengacu kepada SE Menteri
							Kesehatan Nomor HK.02.01/MENKES/1911/2023 Tentang Penyelenggaraan Registrasi dan Perizinan Tenaga Medis
							dan Tenaga Kesehatan Pasca Terbitnya Undang-Undang Nomor 17 Tahun 2023 Tentang Kesehatan.
						</p>
					),
				},

				{
					title:
						"Apakah pelamar dengan STR Ahli Kesehatan Masyarakat dapat melamar pada formasi Jabatan Fungsional Tenaga Promosi Kesehatan dan Ilmu Perilaku?",
					content: (
						<p>
							Dapat, <br />
							Berdasarkan Keputusan Menteri PAN RB Nomor 654 Tahun 2023, untuk Jabatan Fungsional Tenaga Promosi
							Kesehatan dan Ilmu Perilaku jenjang Ahli Pertama tidak dipersyaratkan STR pada saat melamar/saat mendaftar
						</p>
					),
				},
			],
		},

		{
			section: "Pengalaman Kerja",
			id: "pengalaman-kerja",
			data: [
				{
					title:
						"Apakah pelamar dengan pengalaman/masa kerja kurang dari 1 tahun bisa melamar pada PPPK JF Kesehatan Tahun 2023?",
					content: (
						<p>
							Tidak bisa, karena syarat pengalaman/masa kerja pelamar PPPK adalah minimal 2 tahun dan harus
							sesuai/relevan dengan jabatan/bidang tugas yang dilamar (sesuai Peraturan Menteri PAN RB Nomor 14 Tahun
							2019 Pasal 6 Ayat 1 Huruf e). <br />
							Syarat ini berlaku pula bagi pelamar PPPK JF KesehatanTidak bisa, karena syarat pengalaman/masa kerja
							pelamar PPPK adalah minimal 2 tahun dan harus sesuai/relevan dengan jabatan/bidang tugas yang dilamar
							(sesuai Peraturan Menteri PAN RB Nomor 14 Tahun 2019 Pasal 6 Ayat 1 Huruf e). Syarat ini berlaku pula bagi
							pelamar PPPK JF Kesehatan
						</p>
					),
				},

				{
					title:
						"Apakah pengalaman/masa kerja sebelum di tempat bekerja saat ini dapat diperhitungkan sebagai syarat pengalaman/masa kerja untuk melamar PPPK JF Kesehatan (akumulasi pengalaman/masa kerja sebelumnya dan saat ini)?",
					content: (
						<p>
							Dapat diperhitungkan, karena untuk memenuhi syarat pengalaman/masa kerja pelamar PPPK JF Kesehatan, dapat
							diperoleh (dapat dihitung) dari pengalaman/masa kerja sebelumnya selain pengalaman/masa kerja di fasilitas
							kesehatan tempat bekerja saat ini (dapat diakumulasi/bersifat kumulatif), sepanjang pengalaman/masa kerja
							tersebut sesuai/relevan dengan jabatan/bidang tugas yang dilamar
						</p>
					),
				},

				{
					title:
						"Apakah pengalaman/masa kerja dokter selama menjalankan program internship bisa diperhitungkan sebagai pengalaman/masa kerja dokter?",
					content: (
						<p>
							Masa kerja sebagai dokter internship dapat diperhitungkan untuk memenuhi syarat pengalaman/masa kerja
							untuk melamar pada formasi Jabatan Fungsional Dokter.Masa kerja sebagai dokter internship dapat
							diperhitungkan untuk memenuhi syarat pengalaman/masa kerja untuk melamar pada formasi Jabatan Fungsional
							Dokter.
						</p>
					),
				},

				{
					title:
						"Apakah tenaga kesehatan yang saat ini sedang tidak aktif bekerja namun memiliki pengalaman/masa kerja minimal 2 tahun (terakumulasi dari pengalaman/masa kerja sebelumnya) bisa melamar sebagai PPPK JF Kesehatan Tahun 2023?",
					content: (
						<p>
							Tenaga Kesehatan yang saat ini tidak aktif bekerja dapat melamar PPPK JF Kesehatan Tahun 2023 pada formasi
							umum, sepanjang memenuhi persyaratan kualifikasi pendidikan sesuai SE Dirjen Nakes Nomor 1365 Tahun 2023
							dan Nomor 2181 Tahun 2023, memiliki pengalaman kerja sesuai dengan Jabatan Fungsional Kesehatan yang
							dilamar minimal 2 tahun, memenuhi syarat STR sesuai Keputusan Menteri PAN dan RB Nomor 654 Tahun 2023
							serta memenuhi persyaratan lain sesuai peraturan perundangan.Tenaga Kesehatan yang saat ini tidak aktif
							bekerja dapat melamar PPPK JF Kesehatan Tahun 2023 pada formasi umum, sepanjang memenuhi persyaratan
							kualifikasi pendidikan sesuai SE Dirjen Nakes Nomor 1365 Tahun 2023 dan Nomor 2181 Tahun 2023, memiliki
							pengalaman kerja sesuai dengan Jabatan Fungsional Kesehatan yang dilamar minimal 2 tahun, memenuhi syarat
							STR sesuai Keputusan Menteri PAN dan RB Nomor 654 Tahun 2023 serta memenuhi persyaratan lain sesuai
							peraturan perundangan.
						</p>
					),
				},

				{
					title: "Apakah pengalaman/masa kerja harus sesuai dengan formasi jabatan yang dilamar saat ini?",
					content: (
						<p>
							Pengalaman/masa kerja yang dimiliki pelamar harus sesuai/relevan dengan jabatan/bidang tugas yang dilamar
							saat ini, kecuali untuk JF Administrator Kesehatan dimana pelamar boleh memiliki pengalaman kerja di
							bidang kesehatan dan tidak harus dalam bidang administrasi kesehatan.
						</p>
					),
				},

				{
					title:
						"Apakah pengalaman kerja pelamar harus secara terus menerus tidak pernah terputus di tempat kerja saat ini?",
					content: (
						<p>
							Pengalaman kerja tidak harus secara terus menerus di tempat kerja saat ini, namun dapat diakumulasi dari
							pengalaman kerja di tempat kerja sebelumnya, terpenting harus memenuhi syarat minimal 2 tahun dan
							sesuai/relevan dengan jabatan/bidang tugas yang dilamar. Namun apabila pelamar tersebut memiiliki
							pengalaman kerja minimal 2 tahun secara terus menerus di instansi tempat bekerja saat ini, maka yang
							bersangkutan dapat melamar pada formasi khusus
						</p>
					),
				},

				{
					title:
						"Adakah regulasi yang mengatur tentang syarat pengalaman kerja bagi pelamar PPPK Jabatan Fungsional Kesehatan?",
					content: (
						<p>
							Ada, Yaitu Peraturan Menteri PAN dan RB Nomor 14 tahun 2019 tentang Pembinaan Pegawai Pemerintah dengan
							Perjanjian Kerja yang Menduduki Jabatan Fungsional
						</p>
					),
				},
			],
		},

		{
			section: "Pengadaan Seleksi",
			id: "pengadaan-seleksi",
			data: [
				{
					title: "Bagaimana mekanisme Pengadaan PPPK Jabatan Fungsional Kesehatan?",
					content: (
						<p>
							Merujuk pada Peraturan Menteri PAN RB Nomor 14 Tahun 2023 Tentang Pengadaan Pegawai Pemerintah Dengan
							Perjanjian Kerja Untuk Jabatan Fungsional Kesehatan, rangkaian proses Pengadaan PPPK Jabatan Fungsional
							Kesehatan meliputi: <br />
							1. Perencanaan: perencanaan kebutuhan tenaga kesehatan oleh masing-masing instansi (K/L dan Pemda),
							validasi rencana kebutuhan tenaga kesehatan oleh instansi dan Kemenkes, pengusulan kebutuhan/formasi
							tenaga kesehatan oleh masing-masing instansi (K/L dan Pemda), pertimbangan teknis oleh BKN dan
							pertimbangan alokasi anggaran penggajian oleh Kemenkeu, serta penetapan kebutuhan/formasi tenaga kesehatan
							oleh Kementerian PAN dan RB <br />
							2. Pengumuman Lowongan: dilakukan oleh panitia seleksi instansi <br />
							3. Pelamaran oleh tenaga kesehatan non ASN di SSCASN BKN <br />
							4. Seleksi, yang diselenggarakan oleh Pansel masing-masing instansi ( K/L dan Pemda) <br />
							a. Seleksi Administrasi b. Seleksi Kompetensi menggunakan CAT BKN yang terdiri dari Kompetensi
							Manajerial,Kompetensi Sosial Kultural, Kompetensi Teknis <br />
							5. Pengumuman Hasil Seleksi oleh Pansel masing-masing instansi (K/L dan Pemda)
							<br />
							a. Pengumuman Hasil Seleksi Administrasi (Pengumuman Awal Pra-Sanggah Administrasi dan Pengumuman Pasca
							Sanggah Administrasi) <br />
							b. Pengumuman Hasil Seleksi Kompetensi <br />
							6. Pengangkatan PPPK oleh BKN (setelah ada pengumuman seleksi kompetensi akhir oleh BKN)
						</p>
					),
				},

				{
					title: "Bagaimana cara tenaga kesehatan Non ASN dapat melamar/mendaftar PPPK?",
					content: (
						<p>
							Proses pelamaran/pendaftaran PPPK Tenaga Kesehatan terdiri dari: <br />
							1. Mendaftar pada laman/portal SSCASN BKN <br />
							2. Melengkapi dan mengecek semua berkas/dokumen administrasi persyaratan pelamar PPPK JF Kesehatan sesuai
							ketentuan
							<br />
							3. Mengunggah/submit semua berkas/dokumen administrasi persyaratan pelamar PPPK JF Kesehatan dalam
							laman/portal SSCASN BKN sesuai ketentuan
							<br />
							4. Perhatikan batas waktu pelamaran yang telah ditentukan (jangan sampai melewati batas waktu)!
							<br />
							5. Tunggu pengumuman hasil seleksi administrasi (ingat ada masa sanggah)
							<br />
							6. Kelulusan seleksi administrasi ditentukan setelah ada pengumuman hasil seleksi pasca sanggah
							<br />
							7. Peserta yang lulus seleksi administrasi pasca sanggah selanjutnya dapat mengikuti seleksi kompetensi
							<br />
							8. Seleksi kompetensi terdiri dari seleksi kompetensi teknis, seleksi kompetensi manajerial, dan seleksi
							kompetensi sosial kultural yang seluruhnya menggunakan CAT BKN
						</p>
					),
				},

				{
					title:
						"Bagaimana mekanisme pelaksanaan Seleksi Administrasi bagi pelamar PPPK Jabatan Fungsional Tenaga Kesehatan?",
					content: (
						<p>
							Proses pelaksanaan seleksi administrasi terhadap pelamar PPPK Jabatan Fungsional Tenaga Kesehatan meliputi
							: <br />
							1. Mendaftar pada laman/portal SSCASN BKN <br />
							2. Melengkapi dan mengecek semua berkas/dokumen administrasi persyaratan pelamar PPPK JF Kesehatan sesuai
							ketentuan
							<br />
							3. Mengunggah/submit semua berkas/dokumen administrasi persyaratan pelamar PPPK JF Kesehatan dalam
							laman/portal SSCASN BKN sesuai ketentuan
							<br />
							4. Verifikasi persyaratan umum dan khusus dilakukan oleh Panitia Seleksi Instansi baik Pusat maupun Daerah
							(Panselda)
							<br />
							5. Hasil verifikasi dan validasi seleksi administrasi diumumkan pada laman SSCASN BKN
						</p>
					),
				},

				{
					title: "Apa saja jenis seleksi yang akan diikuti oleh pelamar PPPK Jabatan Fungsional Kesehatan?",
					content: (
						<p>
							Seleksi dalam Pengadaan PPPK, termasuk Jabatan Fungsional Kesehatan terdiri dari : <br />
							1. Seleksi Administrasi <br />
							2. Seleksi Kompetensi <br />
							3. Wawancara (tambahan)
						</p>
					),
				},

				{
					title: "Apa saja penilaian seleksi kompetensi bagi pelamar PPPK Jabatan Fungsional Kesehatan?",
					content: (
						<p>
							Seleksi kompetensi bagi pelamar PPPK JF Kesehatan terdiri dari: <br />
							1. Kompetensi Teknis; <br />
							2. Kompetensi Manajerial; dan <br />
							3. Kompetensi Sosial Kultural
						</p>
					),
				},

				{
					title: "Bagaimana mekanisme pelaksanaan seleksi kompetensi teknis?",
					content: (
						<p>
							Seleksi Kompetensi Teknis PPPK Jabatan Fungsional Tenaga Kesehatan : <br />
							1. Seleksi kompetensi dilaksanakan menggunakan Computer Assisted Test (CAT) BKN
							<br />
							2. Penyelenggaraan seleksi kompetensi bagi calon PPPK JF Kesehatan yang melamar pada fasilitas kesehatan
							milik Instansi Daerah dilaksanakan oleh Panitia Seleksi Instansi Daerah (Panselda) yaitu BKD/BKPSDM/BKPP
							bekerjasama OPD terkait (Dinas Kesehatan)
							<br />
							3. Penyelenggaraan seleksi kompetensi bagi calon PPPK Jabatan Fungsional Kesehatan yang melamar pada
							fasilitas kesehatan milik Instansi Pusat akan dilaksanakan oleh Panitia Seleksi Instansi (Pansel Instansi)
							Pusat yaitu Biro OSDM K/L
							<br />
							4. Seleksi kompetensi hanya dapat diikuti oleh pelamar yang lulus seleksi administrasi pasca sanggah
							seleksi administrasi
						</p>
					),
				},
			],
		},

		{
			section: "Gaji dan Tunjangan",
			id: "gaji-dan-tunjangan",
			data: [
				{
					title:
						"Penggajian PPPK Jabatan Fungsional Tenaga Kesehatan dibebankan kepada Pemerintah Pusat atau Pemerintah Daerah?",
					content: (
						<p>
							Penggajian dan pemberian tunjangan bagi PPPK Jabatan Fungsional Tenaga Kesehatan mengacu kepada Peraturan
							Presiden Nomor 98 Tahun 2020 tentang Gaji dan Tunjangan PPPK : <br />
							Penggajian PPPK Jabatan Fungsional Tenaga Kesehatan yang bekerja pada fasilitas kesehatan di lingkungan
							Instansi Pusat dibebankan kepada APBN masing-masing Instansi (Kementerian/Lembaga) <br />
							Penggajian PPPK yang bekerja pada fasilitas kesehatan di lingkungan Instansi Daerah dibebankan kepada APBD
							masing-masing Instansi Daerah (Pemerintah Daerah Provinsi/Kabupaten/Kota)
						</p>
					),
				},

				{
					title: "Apakah PPPK Jabatan Fungsional Kesehatan mendapatkan kenaikan gaji berkala?",
					content: (
						<p>
							Ya, <br />
							Sebagaimana ketentuan dalam Peraturan Menteri PAN dan RB Nomor 7 Tahun 2023 Pasal 2 yang menyatakan bahwa
							kenaikan gaji berkala diberikan kepada PPPK yang memiliki masa perjanjian kerja lebih dari 2 (dua) tahun.
							Dalam hal Gaji ditetapkan pada golongan gaji V, kenaikan gaji berkala untuk pertama kali diberikan kepada
							PPPK yang memiliki masa perjanjian kerja lebih dari 1 (satu) tahun.
						</p>
					),
				},
			],
		},

		{
			section: "Konsekuensi",
			id: "konsekuensi",
			data: [
				{
					title:
						"Jika sekarang masih berstatus PPPK, apakah diperkenankan untuk mendaftar kembali formasi ASN yaitu CPNS atau PPPK (pada formasi jabatan yang sama dengan jenjang jabatan yang lebih tinggi), SEBELUM masa perjanjian kerja selesai?",
					content: (
						<p>
							Tidak bisa, <br />
							Karena PPPK wajib melaksanakan tugas sampai dengan berakhirnya Masa Hubungan Perjanjian Kerja (MHPK). Jika
							yang bersangkutan telah menyelesaikan MHPK maka diperbolehkan melamar/mendaftar ASN kembali sepanjang
							memenuhi persyaratan pelamaran sesuai ketentuan peraturan perundangan dan sudah tidak berstatus sebagai
							ASN.
						</p>
					),
				},

				{
					title: "Apakah PPPK JF Kesehatan dapat dimutasi ke unit kerja lain?",
					content: (
						<p>
							Tidak dapat, <br />
							Selama Masa Hubungan Perjanjian Kerja (MHPK) belum berakhir, seorang PPPK termasuk PPPK JF Kesehatan tidak
							dapat dimutasi, termasuk oleh PPK Instansi kecuali adanya perampingan organisasi pemerintah
						</p>
					),
				},

				{
					title:
						"Apakah terdapat konsekuensi bagi pelamar yang Jabatan Fungsional mengundurkan diri setelah dinyatakan lulus seleksi atau ditetapkan NIPPPK nya?",
					content: (
						<p>
							Berdasarkan pada Peraturan Menteri PAN dan RB Nomor 14 Tahun 2023, pelamar yang sudah mendapatkan NIPPPK
							dan kemudian mengundurkan diri, maka yang bersangkutan tidak boleh melamar pada penerimaan PPPK untuk 1
							(satu) periode berikutnya.
						</p>
					),
				},

				{
					title:
						"Jika sekarang masih berstatus PPPK, apakah diperkenankan untuk mendaftar kembali formasi ASN yaitu CPNS atau PPPK (pada formasi jabatan yang berbeda), SEBELUM masa perjanjian kerja selesai?",
					content: (
						<p>
							Tidak bisa, <br />
							Karena PPPK wajib melaksanakan tugas sampai dengan berakhirnya Masa Hubungan Perjanjian Kerja (MHPK). Jika
							yang bersangkutan telah menyelesaikan MHPK maka diperbolehkan melamar/mendaftar ASN kembali sepanjang
							memenuhi persyaratan pelamaran sesuai ketentuan peraturan perundangan dan sudah tidak berstatus sebagai
							ASN.
						</p>
					),
				},

				{
					title:
						"Jika sekarang masih berstatus PPPK, apakah diperkenankan untuk mendaftar kembali formasi ASN yaitu CPNS atau PPPK (pada formasi jabatan yang berbeda), SETELAH masa perjanjian kerja selesai?",
					content: (
						<p>
							Bisa, <br />
							Namun apabila yang bersangkutan melamar sebagai PPPK, hanya dapat melamar pada formasi Jabatan Fungsional
							Administrator Kesehatan dan memiliki kualifikasi pendidikan minimal D4/S1 bidang kesehatan karena PPPK
							mensyaratkan pengalaman kerja sesuai dengan jabatan dan sesuai/relevan dengan jabatan/bidang tugas yang
							dilamar. Jika yang bersangkutan melamar sebagai CPNS yang tidak mensyaratkan pengalaman kerja maka tetap
							harus memenuhi persyaratan pelamaran CPNS sesuai ketentuan dalam peraturan perundangan.
						</p>
					),
				},
			],
		},

		{
			section: "Ketentuan Nilai Ambang Batas (NAB)",
			id: "nab",
			data: [
				{
					title: "Apakah yang dimaksud dengan Nilai Ambang Batas (NAB)?",
					content: (
						<p>
							Nilai Ambang Batas (NAB) dalam Seleksi PPPK melekat pada Seleksi Kompetensi Teknis Pada Pengadaan PPPK
							Tahun 2023, bagi pelamar pada formasi/kebutuhan khusus tidak diberlakukan NAB Seleksi Kompetensi Teknis{" "}
							<br />
							NAB Seleksi Kompetensi Teknis PPPK Tahun 2023 merupakan nilai batas paling rendah kelulusan seleksi
							kompetensi teknis yang harus dipenuhi/dicapaioleh setiap pelamar pada formasi/kebutuhan umum.
						</p>
					),
				},

				{
					title:
						"Apakah diberlakukan NAB untuk seluruh pelamar PPPK JF Kesehatan Tahun 2023 pada seleksi kompetensi teknis?",
					content: (
						<p>
							Tidak, <br />
							Berdasarkan Keputusan Menteri PAN dan RB Nomor 648 Tahun 2023, NAB Seleksi Kompetensi Teknis hanya
							diberlakukan bagi pelamar yang melamar pada formasi/kebutuhan umum. Berdasarkan Keputusan Menteri PAN dan
							RB Nomor 652 Tahun 2023, NAB Seleksi Kompetensi Teknis bagi pelamar PPPK Jabatan Fungsional Tenaga
							Kesehatan adalah sebesar 35% dari nilai maksimal seleksi kompetensi teknis (450), yaitu 158.
						</p>
					),
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
		<div className="w-screen h-screen scroll-smooth">
			<div className="container mx-auto p-10 md:px-20 grid gap-10">
				<h1 className="text-center font-bold text-3xl text-[#40588A]">Frequently Asked Questions (PPPK Tenaga Kesehatan)</h1>

				<div className="grid grid-cols-12 gap-5">
					<div className="col-span-4 flex flex-col">
						<div className="w-full flex flex-col border-2 rounded-lg">
							{link.map((e, i) => (
								<span
									key={i}
									onClick={() => scroolTo(e.id)}
									className={`text-blue-700 hover:text-blue-800 hover:font-semibold px-4 py-2 ${
										e.title !== "Ketentuan Nilai Ambang Batas (NAB)" && "border-b-2"
									}`}
								>
									{e.title}
								</span>
							))}
						</div>
					</div>

					{/* ACCORDION */}
					<div className="col-span-8 border-2 rounded-lg px-3 h-[350px] overflow-y-scroll flex flex-col gap-5">
						{data.map((e, i) => (
							<div key={i} id={e.id}>
								<h1 className="text-xl font-bold text-slate-700 px-3 py-2">{e.section}</h1>

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
