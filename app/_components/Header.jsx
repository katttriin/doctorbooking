"use client";
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import React, { useEffect } from 'react';
import { LoginLink, LogoutLink } from '@kinde-oss/kinde-auth-nextjs/components'; // Імпортуємо LoginLink
import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs';

function Header() {
    const Menu = [
        { id: 1, name: 'Home', path: '/' },
        { id: 2, name: 'Explore', path: '/' },
        { id: 3, name: 'Contact Us', path: '/' },
    ];

    const {user} = useKindeBrowserClient();
    useEffect(()=>{
console.log(user); 
    },[user]) 
    return (
        <div className='flex items-center justify-between p-4 shadow-sm'>
            <div className='flex items-center gap-10'>
                <img 
                    src='/logo.svg' 
                    alt='logo'
                    width={180} 
                    height={80}
                />
                <ul className='md:flex gap-8 hidden'>
                    {Menu.map((item, index) => (
                        <li key={index} className='hover:text-blue-500 cursor-pointer hover:scale-105 transition-all ease-in-out'>
                            <Link href={item.path}>{item.name}</Link>
                        </li>
                    ))}
                </ul>
            </div>
            
        
    
            {/* Використовуємо LoginLink для авторизації */}
            <LoginLink>
                <button
                    className='bg-blue-500 text-white py-2 px-6 rounded hover:bg-blue-600 transition-all ease-in-out'
                >
                    Get Started
                </button>
            </LoginLink>
           
        </div>
    );
}

export default Header;
