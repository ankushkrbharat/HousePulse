'use client'

import { usePathname } from 'next/navigation'
import MaxWidthWrapper from './MaxWidthWrapper'
// import { Icons } from './Icons'
import Link from 'next/link'
import { Button } from './ui/button'
import { Input } from "@/components/ui/input"

const Footer = () => {
  const pathname = usePathname()
  const pathsToMinimize = [
    '/verify-email',
    '/sign-up',
    '/sign-in',
  ]

  return (
    <footer className='  flex-grow-0'>
      <MaxWidthWrapper>
        <div className=''>
            <div>
              <div className='relative flex items-center px-6 py-6 sm:py-8 lg:mt-0'>
                <div className='overflow-hidden rounded-lg'>
                  <div
                    aria-hidden='true'
                    className=' bg-primary  bg-gradient-to-br bg-opacity-90'
                  />
                </div>

                <div className='text-center bg-secondary py-10 rounded-lg flex flex-col items-center w-full'>
                  <div className='max-w-lg'>
                  <h3 className='font-bold text-2xl text-secpndary'>
                    Join Our Newsletter
                  </h3>
                  <div className='mt-6 flex gap-2 w-[300px] md:w-[400px] lg:w-[600px]'><Input  type='email' placeholder='email' className='' />
                  <Button variant={"default"} className='w-[100px]'> Join</Button>
                  </div>
                  </div>
                  
                </div>
              </div>
            </div>
        
        </div>

        <div className='py-10 md:flex md:items-center md:justify-between'>
          <div className='text-center md:text-left'>
            <p className='text-sm text-muted-foreground'>
              &copy; {new Date().getFullYear()} All Rights
              Reserved
            </p>
          </div>
         

          <div className='mt-4 flex items-center justify-center md:mt-0'>
            <div className='flex space-x-8'>
              <Link
                href='#'
                className='text-sm text-muted-foreground hover:text-gray-600'>
                Terms
              </Link>
              <Link
                href='#'
                className='text-sm text-muted-foreground hover:text-gray-600'>
                Privacy Policy
              </Link>
              <Link
                href='#'
                className='text-sm text-muted-foreground hover:text-gray-600'>
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </footer>
  )
}

export default Footer