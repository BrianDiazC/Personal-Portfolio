import { atom, useAtom } from "jotai";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

export const currentPageAtom = atom("intro");

export const UI = () => {

  const [currentPage, setCurrentPage] = useAtom(currentPageAtom);
  const navigate = useNavigate();

  const handlerClickRedirect = async () => {
    setCurrentPage("portfolio");
    setInterval(()=> {
      navigate('/portfolio');
    }, 2000)
  }

  return (
    <div className="fixed inset-0 pointer-events-none">
      <section
        className={`flex w-full h-full flex-col items-center justify-center 
    duration-500
    ${currentPage === "home" ? "" : "opacity-0"}`}
      >
        <div className="h-[66%]"></div>
        <Link
          onClick={handlerClickRedirect}
          className="pointer-events-auto py-4 px-8 bg-orange-400 text-white font-black rounded-full hover:bg-orange-600 cursor-pointer transition-colors duration-500"
        >
          ENTER
        </Link>
      </section>
    </div>
  );
};
