import React from 'react'

function Header() {
  return (
    <div className="flex w-full px-3 py-4">
      <div className="flex items-start gap-2 ">
        <button type="button" className="w-3 h-3 bg-[#ED6A5E] rounded-full" />
        <button type="button" className="w-3 h-3 bg-[#F4BF4F] rounded-full" />
        <button type="button" className="w-3 h-3 bg-[#61C554] rounded-full" />
      </div>
    </div>
  )
}

export default Header