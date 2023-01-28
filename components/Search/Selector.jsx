import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { BiChevronDown } from "react-icons/bi";

const SERVER_URL = process.env.NEXT_PUBLIC_SERVER_BASE_URL;

const Selector = () => {
  const [news, setNews] = useState(null);
  const [inputValue, setInputValue] = useState("");
  const [selected, setSelected] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get(`${SERVER_URL}/post`)
        setNews(res.data)
      } catch (error) {
        console.log(error)
      }
    }
    getData();
  }, []);
  return (
    <div className="md:w-[25rem] mt-[-18px] font-medium h-0">
      <div
        onClick={() => setOpen(!open)}
        className={`bg-slate-50 w-full border md:pl-2 md:rounded-xl md:p-1 pl-4 rounded-lg p-3 border-gray-300 focus:border-cyan-300 focus:ring-cyan-300 flex items-center justify-between cursor-pointer ${
          !selected && "text-gray-700"
        }`}
      >
        {selected
          ? selected?.length > 20
            ? selected?.substring(0, 20) + "..."
            : selected
          : "Noticias"}
        <BiChevronDown size={20} className={`${open && "rotate-180"}`} />
      </div>
      <ul
        className={`bg-slate-50 relative z-10 overflow-y-auto pl-0 ${
          open ? "max-h-60" : "max-h-0"
        } `}
      >
        <div className="flex items-center py-1 sticky top-0 bg-slate-50">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value.toLowerCase())}
            placeholder="Buscar noticia..."
            className="placeholder:text-gray-500 w-full p-2 outline-none border-gray-300 focus:border-cyan-300 bg-slate-50 rounded-xl"
          />
        </div>
        {news?.map((n) => (
          <div
            key={n?.title}
            className={`flex flex-row gap-1 p-2 md:text-base sm:text-xs text-[10px] font-roboto uppercase hover:bg-sky-500 hover:text-white
            ${
              n?.title?.toLowerCase() === selected?.toLowerCase() &&
              "bg-sky-600 text-white"
            }
            ${
              n?.title?.toLowerCase().includes(inputValue)
                ? "block"
                : "hidden"
            }`}
            onClick={() => {
              if (n?.title?.toLowerCase() !== selected.toLowerCase()) {
                setSelected(n?.title);
                setOpen(false);
                setInputValue("");
              }
            }}
          >
            <div className="sm:basis-[20%] basis-[15%]">
              <Link href={`/detalle/${n?.id}?tag=${n?.tag?.name}`}>
                <img src={n?.image} alt="img" className="w-full md:h-[80px] sm:h-[60px] h-[45px] rounded-md" />
              </Link>
            </div>
            <div className="sm:basis-[80%] basis-[85%] flex flex-row items-center">
              <Link href={`/detalle/${n?.id}?tag=${n?.tag?.name}`}>
                {n?.title}
              </Link>
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Selector;