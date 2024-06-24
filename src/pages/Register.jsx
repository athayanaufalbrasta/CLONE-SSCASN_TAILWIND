import Logo from "../assets/gbr_dftr.png";

export default function Register() {
  return (
    <section className="w-screen py-12 mb-10 px-20 gap-10">
      {/* form */}
      <div className="container mx-auto grid lg:grid-cols-2 gap-10">
        <div>
          <div className="grid grid-cols-1 gap-5">
            <div className="grid grid-cols-1 ">
              <h1 className="text-4xl text-red-600 font-semibold mb-8">PENDAFTARAN SSCASN 2023 TELAH DITUTUP</h1>
              <h2 className="text-xl font-semibold">Pendaftaran Akun SSCASN 2023</h2>
              <h3 className="text-md">Langkah 1: Pengecekan identita</h3>
            </div>

            <div className="border-b-2 border-red-600 text-sm italic text-red-600 font-medium">
              <p>PERHATIAN:</p>
              <p>
                Penggunaan NIK dan Data Pribadi orang lain untuk mendaftar akun pada SSCASN merupakan tindak kejahatan
                dan akan mendapatkan hukuman sesuai dengan peraturan yang berlaku.
              </p>
            </div>

            <div className="grid">
              <label className="text-xl font-medium">Nomor Induk Kependudukan (sesuai KTP)</label>
              <input
                type="text"
                className="px-4 py-1 border border-red-600 focus:outline-none focus:outline outline-blue-600"
              />
            </div>

            <div className="grid">
              <label className="text-xl font-medium">Nomor Kartu Keluarga</label>
              <input
                type="text"
                className="px-4 py-1 border border-red-600 focus:outline-none focus:outline outline-blue-600"
              />
            </div>

            <div className="grid">
              <label className="text-xl font-medium">Nomor Lengkap sesuai KTP</label>
              <input
                type="text"
                className="px-4 py-1 border border-red-600 focus:outline-none focus:outline outline-blue-600"
              />
            </div>

            <div className="grid">
              <label className="text-xl font-medium">Tempat Lahir sesuai KTP</label>
              <input
                type="text"
                className="px-4 py-1 border border-red-600 focus:outline-none focus:outline outline-blue-600"
              />
            </div>

            <div className="grid">
              <label className="text-xl font-medium">Tanggal Lahir sesuai KTP</label>
              <input
                type="date"
                className="px-4 py-1 border border-red-600 focus:outline-none focus:outline outline-blue-600"
              />
            </div>

            <div className="grid">
              <label className="text-xl font-medium">Nomor Induk Kependudukan (sesuai KTP)</label>
              <input
                type="text"
                className="px-4 py-1 border border-red-600 focus:outline-none focus:outline outline-blue-600"
              />
              <small className="text-red-600 italic font-semibold text-xs">
                Pastikan nomor handphone yang diinput sampai dengan proses seleksi selesai.
              </small>
            </div>

            <div className="grid">
              <label className="text-xl font-medium">Nomor Induk Kependudukan (sesuai KTP)</label>
              <input
                type="text"
                className="px-4 py-1 border border-red-600 focus:outline-none focus:outline outline-blue-600"
              />
              <small className="text-red-600 italic font-semibold text-xs">
                Pastikan nomor handphone yang diinput sampai dengan proses seleksi selesai.
              </small>
            </div>

            <button className="bg-red-600 px-4 py-2 rounded-md font-bold text-white lg:w-[50%]">Register</button>
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
