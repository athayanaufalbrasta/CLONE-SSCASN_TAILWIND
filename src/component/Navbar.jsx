import { useState,useEffect } from "react";
import Logo from "../assets/logobkn.webp";
import { NavLink } from "react-router-dom";
import { FiMenu, FiX, FiChevronDown } from "react-icons/fi";
import { MdLightMode, MdDarkMode } from "react-icons/md";

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

  const [theme, setTheme] = useState(() => localStorage.getItem("tema") === "true");

  useEffect(() => {
    const html = document.querySelector("html");
    if (theme) {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }
  }, [theme]);

  function switchTheme() {
    setTheme((prevTheme) => {
      const newTheme = !prevTheme;
      localStorage.setItem("tema", newTheme);
      return newTheme;
    });
  }
	return (
		<nav className={`w-screen shadow-lg grid transition-transform transform dark:bg-[#26282B] dark:text-white z-[99] relative`}>
			{/* LG KEATAS */}
			<div className="hidden lg:flex justify-between font-bold items-center ml-6">
				<img src={Logo} className="w-24" alt="" />

				{/* THEME TOGGLE */}
				<div className="flex gap-2 lg:gap-7">
					<div
						onClick={switchTheme}
						className={`w-14 h-7 rounded-full dark:bg-white ${
							!theme ? "shadow-outer" : "shadow-inner"
						} flex p-0.5 transition-all my-4`}
					>
						<div
							className={`size-6 bg-gray-300 rounded-full shadow-lg transition-all p-1 ${
								theme && "translate-x-7"
							} flex justify-center items-center`}
						>
							{theme ? <MdDarkMode color="#000" size={25} /> : <MdLightMode color="#000" size={25} />}
						</div>
					</div>

					{path.map((e, i) => (
						<NavLink
							className={`${
								e.name === "SSCASN" && "bg-blue-600 dark:bg-[#393E6F] px-10 text-white hover:bg-blue-400"
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
									} bg-white z-50 dark:text-black absolute top-10 -ml-6 rounded-lg shadow-lg`}
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

			{/* LG KEBAWAH */}
			<div className="flex lg:hidden justify-between p-4 mr-4 items-center">
				<img src={Logo} className="w-24" alt="" />

				{/* THEME TOGGLE */}
				<div className="flex gap-5 items-center">
					<div className="flex gap-2">
						<div onClick={switchTheme} className={`w-14 rounded-full outline shadow-md flex p-0.5 transition-all`}>
							<div
								className={`size-6 bg-gray-300 rounded-full shadow-lg transition-all p-1 ${
									theme && "translate-x-7"
								} flex justify-center items-center`}
							>
								{!theme ? <MdLightMode color="" size={25} /> : <MdDarkMode color="#000" size={25} />}
							</div>
						</div>
					</div>

					<div onClick={handleOpen}>{!open ? <FiMenu className="size-8" /> : <FiX className="size-8 " />}</div>
				</div>
			</div>

			{/* RENDER ELEMENT MD KEBAWAH */}
			{open && (
				<div className="grid gap-5" onMouseLeave={handleOpen}>
					{path.map((e, i) => (
						<NavLink
							className={`${e.name === "SSCASN" && "bg-blue-600 hover:bg-blue-400 text-white text-center py-4"} px-4`}
							// onClick={e.child.length !== 0 ? () => handleIsClick(e.name) : null}
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
									className={`${(e.name === "FAQ" ? faq : sscasn) ? "flex" : "hidden"} ${e.name === "SSCASN" && 'bg-blue-500'} ${e.name === "FAQ" && 'bg-gray-700'} flex-col rounded-lg shadow-lg`}
								>
									{e.child.map((x, y) => (
										<NavLink className={"hover:bg-slate-200 hover:text-slate-900 px-4 py-2 rounded-lg"} key={y} to={x.path}>
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
