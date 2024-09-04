import React from 'react'

const HeadingCompSignin = ({first,second}) => {
  return (
    <div>
        <h1 className='text-center sign-in-heading col-lg-8 column d-flex justify-content-center align-items-center col-right' >
                            {first} <br /> {second}
                        </h1>
    </div>
  )
}

export default HeadingCompSignin;