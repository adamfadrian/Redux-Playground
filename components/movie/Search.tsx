import React, { FC } from 'react'

interface Props {
    onSearch?: React.ChangeEventHandler<HTMLInputElement>
}

const Search: FC<Props> = ({ onSearch }) => {
    return (
        <div className="mx-auto max-w-md">
            <form action="" className="relative mx-auto w-full">
                <input type="search"
                    onChange={onSearch}
                    className="peer cursor-pointer relative z-10 h-10 w-10 rounded-xl 2xl:dark:border border border-black bg-transparent pl-12 outline-none  focus:cursor-text focus:w-full focus:border-black focus:pl-16 focus:pr-4 text-black  transition-all" placeholder='Masukkan kata'
                    style={{ transition: "width 0.5s ease-in-out, padding 0.5s ease-in-out" }}
 />
                <svg xmlns="http://www.w3.org/2000/svg" className="absolute  inset-y-0 my-auto 2xl:h-6 2xl:w-12 h-6 2xl:border-r border-transparent stroke-black px-3.5 peer-focus:border-black peer-focus:stroke-black " fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
            </form>
        </div>
    )
}

export default Search