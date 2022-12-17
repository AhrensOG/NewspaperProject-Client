export default function Card ({buy1, buy2, sell1, sell2, variation1, variation2, name1, name2}) {

  const Item = ({ buy, sell, variation, name }) => {
    return (
      <div className="basis-1/2">
        <div>
          <h2 className="font-roboto lg:text-xl md:text-base md:tracking-normal flex justify-center text-gray-500 lg:tracking-wide font-semibold">{name}</h2>
        </div>
        <div className="flex flex-row">
          <div className="basis-1/2">
            <h2 className="flex justify-center text-gray-500 lg:text-lg md:text-base lg:tracking-wide md:tracking-normal text-lg tracking-wide font-roboto mx-3">Compra</h2>
            <span className=" flex justify-center text-[#18937e] font-roboto text-lg">{buy}</span>
          </div>
          <div className="basis-1/2">
            <span className="flex justify-center text-gray-500 lg:text-lg md:text-base lg:tracking-wide md:tracking-normal text-lg tracking-wide font-roboto mx-3">Venta</span>
            <span className=" flex justify-center text-[#18937e] font-roboto text-lg">{sell}</span>
          </div>
        </div>
        <div>
          <span className="flex justify-center text-gray-500 font-roboto text-lg tracking-wide">Variacion</span>
          <span className="flex justify-center text-[#18937e] font-roboto text-lg">{typeof variation !== 'string' ? '...' : variation }</span>
        </div>
      </div>
    )
  }

  return(
    <div className="lg:p-2 sm:py-1 rounded-md border md:border-[#18937e] border-[#68d2c0]">
      <div className="flex flex-row">
        <Item buy={buy1} sell={sell1} variation={variation1} name={name1}/>
        <Item buy={buy2} sell={sell2} variation={variation2} name={name2}/>
      </div>
    </div>
  )

}