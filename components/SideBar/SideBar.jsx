import React from "react";
import { IoNewspaperOutline } from 'react-icons/io5'
import { BiCategoryAlt } from 'react-icons/bi'
import Link from "next/link";
import { useRouter } from 'next/router'
import LogOutWithFirebase from "../Login/LogOutWithFirebase";

const SideBar = () => {
  const router = useRouter()
  const { uid } = router.query;
  return (
    <div className="flex h-full">
      <div className="w-full">
        <div className="flex flex-no-wrap h-full">
          <div className="w-64 h-screen sticky top-0 bg-gray-800 shadow flex-col justify-between hidden sm:flex">
            <div className="px-8 flex flex-col gap-10 sticky top-0">
              <div className="py-5">
                <Link href={'/'}>
                  <img src="/Logo.png" alt="" />
                </Link>
              </div>
              <ul className="flex flex-col gap-8 items-stretch">
                <li>
                  <Link href={`/admin/dashboard/${uid}/noticias`} className="flex flex-row">
                      <div className="pr-3 cursor-pointer">
                        <IoNewspaperOutline color="white" size='30px' />
                      </div>
                      <span className="basis-[20%] text-2xl font-roboto text-gray-400 hover:text-gray-300 cursor-pointer">Noticias</span>
                  </Link>
                </li>
                <li>
                  <Link href={`/admin/dashboard/${uid}/categorias`} className="flex flex-row">
                    <div className="pr-3 cursor-pointer">
                      <BiCategoryAlt color="white" size='30px' />
                    </div>
                    <span className="basis-[20%] text-2xl font-roboto text-gray-400 hover:text-gray-300 cursor-pointer">Categorias</span>
                  </Link>
                </li>
              </ul>
              <div>
                <LogOutWithFirebase/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
