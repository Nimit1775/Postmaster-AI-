import { SignIn } from '@clerk/nextjs'

export default function SignInPage() {
  return (
    <div className='justify-center items-center min-h-screen bg-black'>
        <SignIn 
        appearance={{
            elements : {
                formButtonPrimary : 'bg-blue-500 hover:bg-blue-600 text-small normal-case',
            }
        }}
        />
    </div>
  )
}