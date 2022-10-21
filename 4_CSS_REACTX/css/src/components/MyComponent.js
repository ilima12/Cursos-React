import "./MyComponet.css"

import React from 'react'

const MyComponent = () => {
  return (
    <div>
        <h1>CSS de componente</h1>
        <p>Este é o paragráfo do componente</p>
        <p className="my-comp-paragraph">Esse também é do componente</p>
    </div>
  )
}

export default MyComponent;