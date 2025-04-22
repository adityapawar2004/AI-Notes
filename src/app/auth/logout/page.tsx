'use client'
import React, { useEffect } from 'react'
import { useRouter } from 'next/navigation';
const LogoutPage = () => {
    const router = useRouter();
    useEffect(() => {
       setTimeout(()=>router.push("/"), 2000);
    }, []);
  return (
    <div>You've been logged out </div>
  )
}

export default LogoutPage;