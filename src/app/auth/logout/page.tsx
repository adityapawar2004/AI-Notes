"use client"
import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const LogoutPage = () => {
    const router = useRouter();
    
    useEffect(() => {
        const timer = setTimeout(() => router.push("/"), 2000);
        return () => clearTimeout(timer); // Cleanup timer on unmount
    }, [router]); // Include router as a dependency

    return (
        <div>You&apos;ve been logged out</div> 
    );
}

export default LogoutPage;