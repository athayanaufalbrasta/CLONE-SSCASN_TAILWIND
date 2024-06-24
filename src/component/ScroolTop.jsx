import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

export default function ScroolTop() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 25 ? true : false);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleLokasi = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {showButton && (
        <div
          onClick={handleLokasi}
          className="fixed p-4 bg-blue-700 hover:bg-blue-800 text-white rounded-full cursor-pointer bottom-5 right-5"
        >
          <FaArrowUp />
        </div>
      )}
    </>
  );
}
