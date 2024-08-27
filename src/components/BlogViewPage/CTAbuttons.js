import React from 'react'

export default function CTAbuttons({username}) {
  return (
    <>
      <div className="flex justify-center text-center gap-5 my-3">
      <button className=" min-w-[116px] text-white border-2 border-[rgba(19,19,19,1)]  py-1 bg-black px-5 rounded">
        Share
      </button>
      <button className=" min-w-[116px] text-white border-2 border-[rgba(19,19,19,1)]  py-1 bg-black px-5 rounded">
        Save
      </button>
      <div className=" font-semibold text-white border-2 border-[rgba(19,19,19,1)]  py-1 bg-black px-5 rounded">
      {username}
      </div>
      <button className="min-w-[116px] text-white border-2 border-[rgba(19,19,19,1)]  py-1 bg-black px-5 rounded">
        Follow
      </button>
      <button className="min-w-[116px] text-white border-2 border-[rgba(19,19,19,1)]  py-1 bg-black px-5 rounded">
        Bookmark
      </button>
    </div>
    </>
  )
}
