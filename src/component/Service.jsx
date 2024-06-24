import { SlMagnifier } from "react-icons/sl";

export default function Service() {
	return (
		<section className="w-screen bg-[#5776ba] dark:bg-[#393E6F] px-16 lg:px-20">
			<div className="container mx-auto grid gap-3 lg:grid-cols-12 text-white py-10">
				<div className="grid grid-cols-1 md:grid-cols-4 gap-3 lg:col-span-10">
					<div className="slideDown flex flex-col col-span-2 lg:col-span-1">
						<select className="px-4 py-2 rounded-sm text-slate-600">
							<option value="">--Pilih Tingkat Pendidikan--</option>
							<option value="">SLTA/SMK/MA/D-I</option>
							<option value="">DII</option>
							<option value="">DIII</option>
							<option value="">S-1/D-IV/PROFESI</option>
							<option value="">S-2/SPESIALIS</option>
							<option value="">S-3</option>
							<option value="">TENAGA KESEHATAN</option>
						</select>
					</div>

					<div className="slideUp flex flex-col col-span-2 lg:col-span-1">
						<input className="px-4 focus:outline-none focus:outline-lime-700 py-2 rounded-sm text-slate-600" type="text" placeholder="Cari program studi." />
					</div>

					<div className="slideDown flex flex-col col-span-2 lg:col-span-1">
						<input className="px-4 focus:outline-none focus:outline-lime-700 py-2 rounded-sm text-slate-600" type="text" placeholder="Cari instansi." />
						<small>*Optional</small>
					</div>

					<div className="slideUp flex flex-col col-span-2 lg:col-span-1">
						<select className="px-4 py-2 rounded-sm text-slate-600">
							<option value="">Semua Jenis Pengadaan</option>
							<option value="">CPNS</option>
							<option value="">PPPK Guru</option>
							<option value="">PPPK Teknis</option>
							<option value="">PPPK TENAGA KESEHATAN</option>
						</select>
						<small>*Optional</small>
					</div>
					<small className="col-span-2 text-sm">
						*) PPPK Guru <b>CUKUP</b> memilih Jenis Pengadaan & Instansi
					</small>
				</div>

				<button className="slideDown lg:h-[35%] xl:h-[43%] lg:col-span-2 bg-slate-800 rounded-sm text-white py-2 flex gap-1 justify-center items-center">
					<SlMagnifier size={15} />
					<span>Cari</span>
				</button>
			</div>
		</section>
	);
}
