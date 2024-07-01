import Tutor from "../assets/tutor.mp4";
export default function About() {
	return (
		<section className="min-w-screen px-5 md:px-20 bg-[#1c7c54] dark:bg-[#065471]">
			<div className="container mx-auto py-10 text-white grid grid-cols-1 gap-8">
				<div className="grid grid-cols-1 gap-8">
					<div className="grid grid-cols-1 gap-8 text-base md:text-[1.1rem]">
						<h3 className="text-2xl md:text-[1.8rem] font-bold text-center">
							Penyesuaian Rentang Waktu Pendaftaran Seleksi PPPK Guru Tahun Anggaran 2023
						</h3>

						<p>
							<b>Informasi Selengkapnya : </b>
							<a
								className="underline"
								target="_blank"
								href="https://drive.google.com/file/d/1kxhOzjqthGvEHQFETjMZAeMLsX7sCS8C/view"
							>
								Penyesuaian Rentang Waktu Pendaftaran Seleksi PPPK Guru
							</a>
							&nbsp;Penyesuaian Rentang Waktu Pendaftaran Seleksi PPPK Guru
						</p>
					</div>

					<div className="grid grid-cols-1 gap-8 text-base md:text-[1.1rem]">
						<h1 className="text-2xl md:text-[1.8rem] font-bold text-center">
							Perubahan Jadwal Pelaksanaan Seleksi CASN Tahun Anggaran 2023
						</h1>

						<p>
							Sehubungan masih berlangsungnya proses optimalisasi PPPK Teknis TA 2022 di sejumlah instansi sesuai
							Kepmenpanrb 571/2023 dan proses verval kebutuhan formasi CASN 2023 di masing-masing instansi, Panselnas
							melalui BKN menjadwalkan ulang pembukaan pendaftaran seleksi CASN 2023.
						</p>
						<p>
							Informasi Selengkapnya :{" "}
							<a className="underline" href="https://drive.google.com/file/d/1b_rlohWDA12aim1yr1CX283t9K7H-g1M/view">
								Perubahan Jadwal Seleksi
							</a>
						</p>
					</div>

					<div className="grid grid-cols-1 gap-8 text-base md:text-[1.1rem]">
						<h1 className="text-2xl md:text-[1.8rem] font-bold text-center">Implementasi Materai Elektronik</h1>

						<p>
							Berdasarkan Surat Edaran Plt. Kepala BKN Nomor 9 Tahun 2021 Tentang Penggunaan Materai Pada Dokumen
							Seleksi Calon Aparatur Sipil Negara, dimana terdapat beberapa aturan dalam penggunaan materai, antara lain
							:
						</p>
						<p>
							1. Wajib menggunakan materai tempel atau kertas materai yang masih baru atau belum pernah digunakan
							sebelumnya / materai bekas pakai. <br />
							2. Tidak diperkenankan menggunakan materai yang bentuk dan cirinya tidak sesuai ketentuan peraturan
							perundang-undangan, misalnya materai berupa hasil unduh atau hasil edit gambar dari internet dan
							sejenisnya.
						</p>
						<p>
							Sebagai tindak lanjut dari Surat Edaran Tersebut, SSCASN pada tahun ini membuat kebijakan pada dokumen
							yang menggunakan materai akan diimplementasikan penggunaan materai elektronik (e-materai) yang
							terintegrasi SSCASN dengan PERUM PERURI dalam pembubuhan materainya.
						</p>
						<p>
							Setelah dilakukan pembelian/top up kuota materai, pembubuhan e-materai dapat dilakukan langsung pada
							&nbsp;
							<a href="https://meterai-elektronik.com">
								<u>https://meterai-elektronik.com</u>
							</a>{" "}
							atau pada akun SSCASN masing-masing setelah dilakukan pembelian.
						</p>
						<a className="underline" href="https://drive.google.com/file/d/1plJv833NkWC9CMD4PQIGGDS3rd1gVMJZ/view">
							Klik untuk unduh SE Nomor 9 Tahun 2021
						</a>
					</div>

					<div>
						<h1>Penyesuaian Rentang Waktu Pendaftaran Seleksi PPPK Guru Tahun Anggaran 2023</h1>
					</div>
				</div>

				<div className="flex justify-center items-center">
					<video src={Tutor} className="w-full sm:w-10/12 lg:w-8/12 xl:w-1/2" controls muted autoPlay></video>
				</div>
			</div>
		</section>
	);
}
