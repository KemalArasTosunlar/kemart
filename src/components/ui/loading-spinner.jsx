import React from 'react'

export function LoadingSpinner({ className = '' }) {
  return (
    <div className={`flex justify-center items-center ${className}`}>
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#23A6F0]"></div>
    </div>
  )
}
