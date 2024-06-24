import { BiErrorCircle } from "react-icons/bi";
import { Link } from "react-router-dom";

export default function error() {
  return (
    <div className="w-screen h-screen flex justify-center items-center absolute top-0 bg-white">
      <div className="grid gap-5 -mt-28 slideUp px-10 text-center">
        <BiErrorCircle className="mx-auto size-40 text-slate-600" />
        <h1 className="font-bold text-4xl mx-auto text-slate-600">Sorry This Pages Is Not Avaible</h1>
        <Link to={"/"} className="mx-auto">
          <button className="bg-slate-600 hover:bg-slate-500 mt-6 text-white font-bold text-2xl px-20 py-2 rounded-full">
            Home
          </button>
        </Link>
      </div>
    </div>
  );
}
