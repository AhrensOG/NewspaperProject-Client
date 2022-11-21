import React from 'react'
import { Oval } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className="w-full h-screen pt-36">
      <Oval
        height={80}
        width={80}
        color="black"
        wrapperStyle={{}}
        wrapperClass='justify-center'
        visible={true}
        ariaLabel='oval-loading'
        secondaryColor="gray"
        strokeWidth={4}
        strokeWidthSecondary={4}
      />
    </div>
  )
}

export default Loader