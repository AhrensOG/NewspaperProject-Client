import React from 'react'

const SearchBar = () => {
  return (
    <div class="relative flex flex-col justify-center">
        <div class="mx-auto max-w-md p-2">

          <form action="" class="relative mx-auto w-max">
            <input type="search" class="peer cursor-pointer relative z-10 h-8 w-8 rounded-full border border-gray-400 bg-transparent pl-12 outline-none focus:w-full focus:cursor-text focus:border-cyan-100 focus:pl-16 focus:pr-4" />
            <svg xmlns="http://www.w3.org/2000/svg" class="absolute inset-y-0 my-auto h-8 w-12 border-r border-transparent stroke-gray-400 px-3.5 peer-focus:border-cyan-100 peer-focus:stroke-cyan-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </form>

      </div>
    </div>
  )
}

export default SearchBar