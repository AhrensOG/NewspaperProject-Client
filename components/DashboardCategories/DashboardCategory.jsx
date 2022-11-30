import axios from "axios";
import { useEffect, useState } from "react";


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
    console.log(deleteCategory[0])
    const data = await axios.delete(`${SERVER_URL}/category?id=${ deleteCategory[0].id}`,)
    console.log(data)
    setAllCategories(newCategories)
    console.log(allCategories)
  }
  const handlerChange = (e) => {
    setNewCategory(e.target.value)
    console.log(newCategory)
  }

  const handlerSubmit = async (e) => {
    e.preventDefault()
    await axios.post(`${SERVER_URL}/category?name=${newCategory}`,)
    const categories = await axios.get(`${SERVER_URL}/category`);
    setAllCategories(categories.data);
  }


  return (
    <div>
      <div>
        {
        allCategories.length > 0 ?
        <ul>
          {allCategories.map((c) => {
            return (
              <div  className="flex">
                <button className="mr-[10px]" value={c.name} onClick={(e) => handleDelete(e)}>
                  X
                </button>
                <li key={c.name}>{c.name}</li>
              </div>
            );
          })}
        </ul>
        : <p>Loading</p>
      }
      </div>
      <div>
        <form onSubmit={ e => handlerSubmit(e)}>
          <input type="text" name="category" placeholder="Ingresa una nueva categoría" onChange={e => handlerChange(e)}/>
          <button>Crear</button>
        </form>
      </div>
    </div>
  );
};

export default DashboardCategory;
