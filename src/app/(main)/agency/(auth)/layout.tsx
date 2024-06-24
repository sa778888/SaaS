import React, { Children } from 'react'

const AuthLayout = ({children}:{children:React.ReactNode}) => {
  return (
    <div className='h-full flex items-center justify-center bg-amber-50'>{children}</div>
  )
}

export default AuthLayout