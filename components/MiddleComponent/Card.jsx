export default function Card ({buy1, buy2, sell1, sell2, variation1, variation2, name1, name2}) {

  return(
    <div className="bg-[#fff] rounded-md border border-sky-500">
      <div className="flex">
        <div className="basis-1/2">
          <h2 className=" font-roboto flex justify-center text-[#959595]">
            {name1}
          </h2>
        </div>
        <div className="basis-1/2">
          <h2 className=" font-roboto flex justify-center text-[#959595]">
            {name2}
          </h2>
        </div>
      </div>
      <div>
        <div className="flex">
          <div className="basis-1/2">
            <p className=" flex justify-center text-[#959595] font-roboto mx-3">COMPRA</p>
            <h3 className=" flex justify-center text-[#18937e]">{buy1}</h3>
          </div>
          <div className="basis-1/2">
            <p className="  flex justify-center text-[#959595] font-roboto mx-3">VENTA</p>
            <h3 className="  flex justify-center text-[#18937e]">{sell1}</h3>
          </div>
          <div className="basis-1/2">
            <p className=" flex justify-center text-[#959595] font-roboto mx-3">COMPRA</p>
            <h3 className=" flex justify-center text-[#18937e]">{buy2}</h3>
          </div>
          <div className="basis-1/2">
            <p className="  flex justify-center text-[#959595] font-roboto mx-3">VENTA</p>
            <h3 className="  flex justify-center text-[#18937e]">{sell2}</h3>
          </div>
        </div>
        <div className="flex">
          <div className="basis-1/2">
          <p className="flex justify-center text-[#959595] font-roboto ">VARIACIÓN</p>
          <h2 className="flex justify-center text-[#18937e] ">{variation1}</h2>
          </div>
          <div className="basis-1/2">
          <p className="flex justify-center text-[#959595] font-roboto ">VARIACIÓN</p>
          <h2 className="flex justify-center text-[#18937e] ">{variation2}</h2>
          </div>
        </div>
        </div>
    </div>
  )

}