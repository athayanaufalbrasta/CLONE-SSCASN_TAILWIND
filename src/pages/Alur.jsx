import Logo1 from "../assets/alur.webp";
import Logo2 from "../assets/guru.webp";
import Logo3 from "../assets/nakes.webp";
import Logo4 from "../assets/teknis.webp";

export default function Alur() {
  return (
    <section className="slideDown container mx-auto grid grid-cols-1 gap-5 py-12 text-center dark:bg-black">
      <h1 className="text-4xl font-bold text-blue-800">Alur Seleksi SSCASN</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:px-[15%] gap-5">
        <a target="_blank" href={Logo1}><img className="lg:hover:scale-[175%] cursor-pointer transition-all duration-200 ease-in" src={Logo1} alt="" /></a>
        <a target="_blank" href={Logo2}><img className="lg:hover:scale-[175%] cursor-pointer transition-all duration-200 ease-in" src={Logo2} alt="" /></a>
        <a target="_blank" href={Logo3}><img className="lg:hover:scale-[175%] cursor-pointer transition-all duration-200 ease-in" src={Logo3} alt="" /></a>
        <a target="_blank" href={Logo4}><img className="lg:hover:scale-[175%] cursor-pointer transition-all duration-200 ease-in" src={Logo4} alt="" /></a>
      </div>
    </section>
  );
}
