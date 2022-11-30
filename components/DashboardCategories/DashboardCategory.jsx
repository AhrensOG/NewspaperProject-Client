import axios from "axios";
import { useEffect, useState } from "react";
import Loader from '../Loader'


const SERVER_URL = process.env.NEXT_PUBLIC_SERVER_BASE_URL;

const DashboardCategory = () => {
  const [allCategories, setAllCategories] = useState([]);
  const [newCategory, setNewCategory] = useState(false);

  useEffect(() => {
    const getCategories = async () => {
      const categories = await axios.get(`${SERVER_URL}/category`);
      setAllCategories(categories.data);
    };
    getCategories();
  }, []);

  const handleDelete = async (name) => {
    const newCategories = allCategories.filter( e => e.name !== name.target.value )
    const deleteCategory = allCategories.filter(e => e.name === name.target.value )
    const data = await axios.delete(`${SERVER_URL}/category?id=${ deleteCategory[0].id}`,)
    setAllCategories(newCategories)
  }
  const handlerChange = (e) => {
    setNewCategory(e.target.value)
  }

  const handlerSubmit = async (e) => {
    e.preventDefault()
    await axios.post(`${SERVER_URL}/category?name=${newCategory}`,)
    const categories = await axios.get(`${SERVER_URL}/category`);
    setAllCategories(categories.data);
  }


  return (
    <div className="flex flex-col">
      <div className='flex flex-col justify-center items-center px-4 py-2 divide-y divide-blue-200'>
          <h1 className='text-4xl font-roboto w-full text-center p-4'>Categorias</h1>
          <span className='w-full'></span>
        </div>
      <div>
        <form  className='flex flex-row justify-center px-2 py-6 gap-4' onSubmit={ e => handlerSubmit(e)}>
          <input className='basis-[70%] border border-blue-200 rounded focus:outline-none focus:border-blue-200 focus:ring-1 p-1' type="text" name="category" placeholder="Ingresa una nueva categoría" onChange={e => handlerChange(e)}/>
          <button className='basis-[30%] bg-blue-200 hover:bg-white hover:text-blue-200 text-white text-lg font-bold tracking-widest w-full font-roboto py-1 px-3 rounded border border-blue-200' >Crear</button>
        </form>
      </div>
      <div className="px-2">
        {
          allCategories.length > 0 ?
          <div className="flex flex-col gap-3">
            {allCategories.map((c) => {
              return (
                <div key={c.name}  className="flex flex-row justify-between border border-blue-200 p-3 rounded-md">
                  <span className="text-2xl font-roboto tracking-widest uppercase text-gray-400">{c.name}</span>
                  <button className="h-full font-roboto text-2xl text-white bg-red-400 px-2 rounded" value={c.name} onClick={(e) => handleDelete(e)}>
                    X
                  </button>
                </div>
              );
            })}
          </div>
          : <Loader />
        }
      </div>
    </div>
  );
};

export default DashboardCategory;
