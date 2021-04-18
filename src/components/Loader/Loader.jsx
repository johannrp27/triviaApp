import React from 'react'

const Loader = () => {
  return (
    <div className="card data shadow-lg">
      <div className="d-flex justify-content-center py-5">
        <div className="spinner-border my-5"
          style={
            {
              width: 5 + 'rem',
              height: 5 + 'rem',
              border: 0.5 + 'rem solid #5256a1',
              borderRightColor: 'transparent'
            }}
          role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    </div>
  )
}

export default Loader
