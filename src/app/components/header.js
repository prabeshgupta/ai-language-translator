import {
    SignInButton,
    SignedIn,
    SignedOut,
    UserButton,
} from '@clerk/nextjs'
import { BookA } from 'lucide-react'
import { MenuBtn } from './menu-btn'
import Link from 'next/link'

export const Header = () => {
    return (
        <header className='sticky inset-x-0 top-0 z-30 w-full transition-all bg-white backdrop-blur-sm'>
            <div className="w-full max-w-screen-xl px-2 lg:px-20 relative mx-auto">
                <div className="flex h-14 items-center justify-between">
                    <Link href='/'>
                        <BookA className='h-7 w-7 text-purple-700' />
                    </Link>
                    <SignedOut>
                        <SignInButton >
                            <button className='bg-purple-700 px-2 py-2 text-white rounded-md'>Sign In</button>
                        </SignInButton>
                    </SignedOut>
                    <SignedIn>
                        <div className="flex">
                            <MenuBtn />
                            <UserButton />
                        </div>
                    </SignedIn>
                </div>
            </div>
        </header>
    )
}