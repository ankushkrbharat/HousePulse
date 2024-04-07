import FormPage from "@/components/FormPage";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";

import {getKindeServerSession} from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from 'next/navigation';

const page = async () => {

  const { isAuthenticated }=getKindeServerSession()
  const t=await isAuthenticated()
  if (!t) {
    redirect('/')
  }
  return (
    <>


        <MaxWidthWrapper className="" >
            <div className="w-full mt-6 flex items-start align-middle justify-center">
                <div>
                <h1 className="md:text-6xl text-3xl font-bold mt-10 text-center ">Current Value of home</h1>
                <FormPage/>
                </div>
            </div>
        </MaxWidthWrapper>

    </>
  )
}

export default page