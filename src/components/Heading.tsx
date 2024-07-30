import React from 'react'

const Heading = ({ heading } : any) => {
  return (
    <div>
        <h2 className="mb-2 text-3xl font-bold">{ heading }</h2>
    </div>
  )
}

export default Heading