import React from 'react'

const HeadingCompSignup = ({first,second}) => {
  return (
    <div>
        <h1 className='text-center sign-up-heading col-lg-8 column d-flex justify-content-center align-items-center' >
                            {first} <br /> {second}
                        </h1>
    </div>
  )
}

export default HeadingCompSignup;