import { AiOutlineMenu, AiFillHome } from "react-icons/ai";
import { AiOutlineMonitor } from "react-icons/ai";
import { BsPlusLg } from "react-icons/bs";
import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import NextNProgress from "nextjs-progressbar";
import jsCookies from "js-cookies";
import { useAuth } from "../../context/authContext";

const SERVER_URL = process.env.NEXT_PUBLIC_SERVER_BASE_URL;

export default function NavBar({ nav, setNav }) {
  const [categories, setCategories] = useState([]);
  const [cookies, setCookies] = useState(null);
  const [showCategories, setShowCategories] = useState([])
  const { user } = useAuth();

  useEffect(() => {
    try {
      const getCategories = async () => {
        const res = await axios.get(`${SERVER_URL}/category`);
        setCategories(res.data);
        const cookie = jsCookies.getItem("adminCookie");
        setCookies(cookie);
        const randomCategories = res.data?.map(() => res?.data[Math.floor(Math.random() * res?.data?.length)] )
        const filteredRandomCategories = randomCategories.filter((value, index, self) => self.indexOf(value) === index )
        setShowCategories(filteredRandomCategories)
      };
      getCategories();
    } catch (error) {
      console.log(error);
    }
  }, []);

  const handleSidebar = () => {
    setNav(!nav);
  };

  return (
    <div className="flex flex-row w-full bg-slate-50 shadow-md shadow-slate-300">
      <NextNProgress color="#3b82f1" />
      <div className="flex basis-[60%] flex-row sm:gap-4 py-2">
        <div className="basis-[10%] items-center flex flex-row">
          <div
            onClick={handleSidebar}
            className="lg:hidden pl-6 hover:cursor-pointer"
          >
            <AiOutlineMenu />
          </div>
          <div className="hidden lg:flex lg:pl-12 pl-6 hover:cursor-pointer">
            <Link href="/">
              <AiFillHome height="50px" width="50px" />
            </Link>
          </div>
        </div>
        <div className="basis-[75%] w-full flex flex-nowrap h-50 items-center justify-start">
          <div className="hidden sm:flex flex-nowrap sm:gap-4 md:gap-6 lg:gap-8 h-full items-center w-full">
            {categories.length > 0 
              ?
                <div className="md:hidden flex flex-row justify-center items-center">
                  <Link href={`/categorias/${showCategories[0]?.name}`}>
                    <span className="text-start text-base font-roboto uppercase text-black py-2 px-2 font-medium h-15 hover:cursor-pointer">
                      {showCategories[0]?.name}
                    </span>
                  </Link>
                  <Link href={`/categorias/${showCategories[1]?.name}`}>
                    <span className="text-start text-base font-roboto uppercase text-black py-2 px-2 font-medium h-15 hover:cursor-pointer">
                      {showCategories[1]?.name}
                    </span>
                  </Link>
                  <Link href={`/categorias/${showCategories[2]?.name}`}>
                    <span className="text-start text-base font-roboto uppercase text-black py-2 px-2 font-medium h-15 hover:cursor-pointer">
                      {showCategories[2]?.name}
                    </span>
                  </Link>
                  <span onClick={handleSidebar} className="text-start text-base font-roboto uppercase text-black py-2 px-2 font-medium h-15 hover:cursor-pointer">
                    <BsPlusLg height="50px" width="50px" color="#67E8F9"/>
                  </span>
                </div>
              : <div></div>
            }
            <div className="md:flex flex-row gap-4 hidden">
              {categories?.map((c, i) => {
                return (
                  <div key={i}>
                    <Link href={`/categorias/${c.name}`}>
                      <span
                        key={i}
                        className="text-start text-base font-roboto uppercase text-black py-2 font-medium h-15 hover:cursor-pointer"
                      >
                        {c.name}
                      </span>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="flex space-x-4 basis-[40%] items-center justify-end md:">
        <div className="flex flex-row space-x-4">
          <div className="hidden lg:flex lg:pl-12 pl-6 hover:cursor-pointer">
            <button>
              <AiOutlineMonitor height="500px" width="500px" />
            </button>
          </div>
          {cookies && user?.uid === "X9awpVbYfpXl6FA7hrjtuBdU9Ay1" ? (
            <Link href={`/admin/dashboard/noticias`}>
              <button className=" text-black px-3 py-2 font-medium h-15 rounded-md ">
                Dashboard
              </button>
            </Link>
          ) : (
            <div className=" text-black px-1 py-1 font-medium h-15 rounded-md "></div>
          )}
        </div>
      </div>
    </div>
  );
}
