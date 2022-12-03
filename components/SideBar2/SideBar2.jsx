import axios from "axios";
import { Sidebar } from "flowbite-react";
import React, { useEffect, useState } from "react";
import jsCookies from "js-cookies";

const SERVER_URL = process.env.NEXT_PUBLIC_SERVER_BASE_URL;

const SideBar2 = () => {
  const [categories, setCategories] = useState([])
  const [flag, setFlag] = useState(false)
  
  useEffect(() => {
    const getCategories = async () => {
      const categories = await axios.get(`${SERVER_URL}/category`)
      setCategories(categories.data)
    }
    const cookie = jsCookies.getItem('set-admin-cookie')
    if(cookie === true) {
      setFlag(true)
    }
    setFlag(true)
    getCategories()
  }, [])


  return (
    <div className="w-fit">
      <Sidebar aria-label="Sidebar 123123123">
          <Sidebar.Logo
          href="#"
          img="/Logo.png"
          imgAlt="Logo"
        >
          Op. Formoseña
        </Sidebar.Logo>
        <Sidebar.Items>
          <Sidebar.ItemGroup>
            {flag?<Sidebar.Item href="http://localhost:3000/admin/dashboard/noticias">Admin Dashboard</Sidebar.Item>: <Sidebar.Item href="http://localhost:3000/admin/dashboard/noticias">CATEGORÍAS:</Sidebar.Item>}
            {categories?.length ? (
              categories.map(e => {
                return (
                  <Sidebar.Item href={`http://localhost:3000/categorias/${e.name}`}>{e.name}</Sidebar.Item>
                )
              })
            ) : (
              <Sidebar.Item>Cargando categorias...</Sidebar.Item>
            )}
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
    </div>
  );
};

export default SideBar2;
