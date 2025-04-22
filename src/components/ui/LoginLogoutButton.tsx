// src/components/ui/LoginLogoutButton.tsx
"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { signout } from "@/lib/auth-actions";
import { Button } from "./button";
import { createClient } from "../../../utils/supabase/client";
import { User } from "@/lib/types";


const LoginButton = () => {
    const [user, setUser] = useState<User | null>(null); // Use the User type
    const router = useRouter();
    const supabase = createClient();

    useEffect(() => {
        const fetchUser = async () => {
            const { data: { user } } = await supabase.auth.getUser();
            setUser(user); // This should now match the User type
        };
        fetchUser();
    }, [supabase.auth]); // Include supabase.auth as a dependency

    if (user) {
        return (
            <Button
                onClick={() => {
                    signout();
                    setUser(null);
                }}
            >
                Log out
            </Button>
        );
    }
    return (
        <Button
            variant="outline"
            onClick={() => {
                router.push("/auth/login");
            }}
        >
            Login
        </Button>
    );
};

export default LoginButton;