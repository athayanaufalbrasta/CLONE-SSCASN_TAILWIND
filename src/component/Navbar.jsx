import { useState} from "react";
import Logo from "../assets/logobkn.webp";
import { NavLink } from "react-router-dom";
import { FiMenu, FiX, FiChevronDown } from "react-icons/fi";

const path = [
  { name: "HOME", path: "/", child: [], current: true },
  { name: "ALUR", path: "/alur", child: [], current: false },
  {
    name: "FAQ",
    child: [
      { name: "CPNS", path: "/cpns", current: false },
      { name: "PPPK GURU", path: "/pppk-guru", current: false },
      { name: "PPPK TEKNIS", path: "/pppk-teknis", current: false },
      { name: "PPPK TENAGA KESEHATAN", path: "/pppk-tenaga-kesehatan", current: false },
    ],
    current: false,
  },
  { name: "HELDESK", path: "/helpdesk", child: [], current: false },
  { name: "DASAR HUKUM", path: "/dasar-hukum", child: [], current: false },
  { name: "BUKU PETUNJUK", path: "/buku-petunjuk", child: [], current: false },
  {
    name: "SSCASN",
    child: [
      { name: "LOGIN", path: "/login", current: false },
      { name: "REGISTER", path: "/register", current: false },
    ],
    current: false,
  },
];
export default function Nav() {
  const [faq, setFaq] = useState(false);
  const [sscasn, setSSCASN] = useState(false);
  const [open, setOpen] = useState(false);

  function handleOpen() {
    setOpen(!open);
  }

  function handleIsClick(path) {
    path === "FAQ" ? setFaq(!faq) : setSSCASN(!sscasn);
  }

  function change(){
    const html = document.querySelector('html')
    html.classList.toggle('dark')
  }
  return (
    <nav
      className={`w-screen shadow-lg grid transition-transform transform`}
    >
      {/* lg keatas */}
      <div className="hidden lg:flex justify-between font-bold bg-white items-center ml-6">
        <img src={Logo} className="w-24" alt="" />

        <div className="flex gap-2 lg:gap-7">
          {path.map((e, i) => (
            <NavLink
              className={`${
                e.name === "SSCASN" && "bg-blue-600 px-10 text-white hover:bg-blue-400"
              } py-4 text-lg lg:text-lg`}
              onMouseEnter={e.child.length !== 0 ? () => handleIsClick(e.name) : null}
              onClick={e.child.length !== 0 ? () => handleIsClick(e.name) : null}
              onMouseLeave={e.child.length !== 0 ? () => handleIsClick(e.name) : null}
              key={i}
              to={e.path}
            >
              <span className="flex items-center gap-2">
                {e.name} {(e.name === "FAQ" || e.name === "SSCASN") && <FiChevronDown className="size-4" />}
              </span>

              {/* KALAU ADA CHILD */}
              {e.child.length !== 0 && (
                // MAKA BUAT SEBUAH DIV UNTUK MENAMPUNG ELEMENT YANG ADA DIDALAM CHILD NYA
                <div
                  className={`${
                    (e.name === "FAQ" ? faq : sscasn) ? "" : "hidden"
                  }  absolute top-10 -ml-6 bg-white text-black rounded-lg shadow-lg`}
                >
                  <div className=" flex flex-col py-4">
                    {e.child.map((x, y) => (
                      <NavLink className={"hover:bg-slate-200 px-4 py-2"} key={y} to={x.path}>
                        {x.name}
                      </NavLink>
                    ))}
                  </div>
                </div>
              )}
            </NavLink>
          ))}
        </div>
      </div>
      {/* MD KEATAS END */}

      {/* lg kebawah */}
      <div className="flex bg-white lg:hidden justify-between p-4 mr-4 items-center">
        <img onClick={change} src={Logo} className="w-24" alt="" />
        {/*  */}
        <div onClick={handleOpen}>{!open ? <FiMenu className="size-8" /> : <FiX className="size-8" />}</div>
      </div>

      {/* RENDER ELEMENT MD KEBAWAH */}
      {open && (
        <div className=" bg-white grid gap-5" onMouseLeave={handleOpen}>
          {path.map((e, i) => (
            <NavLink
              className={`${e.name === "SSCASN" && "bg-blue-600 hover:bg-blue-400 text-white text-center py-4"} px-4`}
              onMouseEnter={e.child.length !== 0 ? () => handleIsClick(e.name) : null}
              onMouseLeave={e.child.length !== 0 ? () => handleIsClick(e.name) : null}
              key={i}
              to={e.path}
            >
              <span
                className={`${
                  e.name === "SSCASN" ? "justify-center py-2" : "hover:text-blue-600"
                } flex gap-1 items-center font-bold  text-xl`}
              >
                {e.name} {(e.name === "FAQ" || e.name === "SSCASN") && <FiChevronDown className="size-4" />}
              </span>

              {/* KALAU ADA CHILD */}
              {e.child.length !== 0 && (
                // MAKA BUAT SEBUAH DIV UNTUK MENAMPUNG ELEMENT YANG ADA DIDALAM CHILD NYA
                <div
                  className={`${
                    (e.name === "FAQ" ? faq : sscasn) ? "flex" : "hidden"
                  } bg-white flex-col text-black  rounded-lg shadow-lg`}
                >
                  {e.child.map((x, y) => (
                    <NavLink className={"hover:bg-slate-200 px-4 py-2 rounded-lg"} key={y} to={x.path}>
                      {x.name}
                    </NavLink>
                  ))}
                </div>
              )}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
}
