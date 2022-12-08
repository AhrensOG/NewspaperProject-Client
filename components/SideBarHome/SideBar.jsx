import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";
import jsCookies from "js-cookies";
import axios from "axios";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { MdDashboardCustomize } from "react-icons/md";
import { useAuth } from "../../context/authContext";
import { useRouter } from 'next/router'


const SERVER_URL = process.env.NEXT_PUBLIC_SERVER_BASE_URL;

const SideBar = ({ nav, setNav }) => {
  const [categories, setCategories] = useState([]);
  const [cookies, setCookies] = useState(null);
  const { user } = useAuth();
  const router = useRouter()


  useEffect(() => {
    try {
      const getCategories = async () => {
        const res = await axios.get(`${SERVER_URL}/category`);
        setCategories(res.data);
        const cookie = jsCookies.getItem("adminCookie");
        setCookies(cookie);
      };
      getCategories();
    } catch (error) {
      console.log(error);
    }
  }, []);

  const handleNav = () => {
    setNav(!nav);
  };

  const handleChange = (e) => {
    const data = e.target.value 
    router.push(`/categorias/${data}`)

  }

  return (
    <div
      className={
        nav
          ? "lg:hidden z-10 fixed left-0 top-0 w-full h-screen bg-black/70"
          : ""
      }
    >
      <div
        className={
          nav
            ? "fixed left-0 top-0 w-[75%] sm:w-[50%] md:w-[65%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
            : "z-10 fixed left-[-100%] top-0 p-10 ease-in duration-500"
        }
      >
        <div>
          <div className="flex w-full items-center justify-between">
            <Link href="/" onClick={() => setNav(false)}>
              <Image src="/Logo.png" width="140" height="60" alt="/" />
            </Link>
            <div
              onClick={handleNav}
              className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
            >
              <AiOutlineClose />
            </div>
          </div>
          <div className="border-b border-gray-300 my-4">
            <p className="w-[85%] md:w-[90%] py-4">Opinion Formoseña</p>
          </div>
        </div>
        <div className="py-4 flex flex-col">
          <div className="uppercase flex flex-col gap-3">
            {/* {
              categories?.length > 0 && categories?.map(c => {
                return (
                  <div key={c.name}>
                    <Link href={`/categorias/${c.name}`}>
                      <span onClick={() => setNav(false)} className="py-4 text-xs hover:text-cyan-400">
                        {c.name}
                      </span>
                    </Link>
                  </div>
                )
              })
            } */}
            <select name="categories" id="cat" onChange={(e) => handleChange(e)}>
              <option value="categorie">Selecciona una categoría</option>
              {categories?.length > 0 &&
                categories?.map((c) => {
                  return (
                        <option
                          onClick={() => setNav(false)}
                          className="py-4 text-xs hover:text-cyan-400"
                        >
                          {c.name}
                        </option>
                  );
                })}
            </select>

            {cookies && user?.uid === "X9awpVbYfpXl6FA7hrjtuBdU9Ay1" ? (
              <Link href={`/admin/dashboard/noticias`}>
                <div className="flex flex-row items-center pt-8 gap-2">
                  <MdDashboardCustomize color="#22d3ee" />
                  <span className=" text-black rounded-md ">Dashboard</span>
                </div>
              </Link>
            ) : (
              <div></div>
            )}
          </div>
          <div className="pt-14">
            <p className="uppercase tracking-widest text-[#22d3ee]">
              Contactanos
            </p>
            <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
              <a
                href="https://www.linkedin.com/in/ahrensog-fullstack"
                target="_blank"
                rel="noreferrer"
              >
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <FaFacebookF color="#22d3ee" />
                </div>
              </a>
              <a
                href="https://github.com/AhrensOG"
                target="_blank"
                rel="noreferrer"
              >
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <FaInstagram color="#22d3ee" />
                </div>
              </a>
              <Link href="/#contact">
                <div
                  onClick={() => setNav(!nav)}
                  className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300"
                >
                  <FaTwitter color="#22d3ee" />
                </div>
              </Link>
              <a href="CV-OGA-C.pdf" download="CV-Gabriel-Ahrens.pdf">
                <div
                  onClick={() => setNav(!nav)}
                  className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300"
                >
                  <FaYoutube color="#22d3ee" />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
