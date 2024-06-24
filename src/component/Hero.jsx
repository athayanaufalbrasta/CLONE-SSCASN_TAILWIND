import HeroLogo from "../assets/hero.webp";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="w-screen px-5 lg:px-20 dark:bg-black">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-10 md:mb-5 md:py-8 ">
          <div className="slideRight flex flex-col gap-2 md:gap-4 pt-6 md:pt-10">
            <h1 className="text-[#5776ba] text-2xl md:text-4xl font-bold">Selamat Datang di Portal ASN Karier!</h1>
            <p className="dark:text-white">
              Portal ASN Karier merupakan portal informasi untuk Calon Aparatur Sipil Negara Indonesia. Temukan lowongan
              formasi terbaru dari instansi pemerintah di seluruh Indonesia. Mudah, transparan, dan informatif.
            </p>
            <p className="text-red-500">Data formasi yang tersedia merupakan Data Formasi TA 2023.</p>
            <Link to={'/dasar-hukum'}>
              <button className="slide text-base w-1/3 md:w-1/2 mt-12 md:mt-10 bg-[#5776ba] rounded-sm py-2 text-white font-bold">
                Dasar Hukum
              </button>
            </Link>
          </div>
          <div className="slideLeft col-md-6 -mt-8 md:mt-0">
            <img src={HeroLogo} className="translate-y-8 md:translate-x-0 scale-[80%] aspect-[16/11] md:aspect-auto" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
