import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import { Button } from '@/components/ui/button'
import React from 'react'
import {getKindeServerSession} from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from 'next/navigation';

const Home = async () => {

  const { isAuthenticated }=getKindeServerSession()
  const t=await isAuthenticated()
  if (t) {
    redirect('/dashboard')
  }
  
  return (
    <>
     <MaxWidthWrapper>
        <div className='py-20 mx-auto text-center flex flex-col items-center max-w-3xl'>
          <h1 className='text-4xl font-bold tracking-tight dark:text-white light:text-gray-900 sm:text-6xl'>
            We Made House Prices {' '}
            <span className='text-blue-600'>
               Transparent  {' '}
            </span>
            For You.
          </h1>
          <p className='mt-6 text-lg max-w-prose text-muted-foreground'>
          Whether you are a first-time buyer, seasoned investor, or simply curious about the housing market, HousePulse is here to help you uncover the true value of properties. Say goodbye to guesswork 
          </p>
          <div className='mt-6 flex gap-4'>
            <Button>Get Started</Button>
            <Button variant={"secondary"}>Read News</Button>
          </div>
        </div>
      </MaxWidthWrapper>
    </>
  )
}

export default Home