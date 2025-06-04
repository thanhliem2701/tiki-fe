'use client';

import { useEffect, useRef } from 'react';
import { signIn, useSession } from 'next-auth/react';
import Commet from "react-loading-indicators/Commet";

export default function AuthPopup() {
    const { data: session, status } = useSession();
    const hasSignedIn = useRef(false);
    useEffect(() => {
        // call login func just in case user not login and have not call login func before
        if (status === 'unauthenticated' && !hasSignedIn.current) {
            hasSignedIn.current = true;
            signIn('google');
        }

        if (status === 'authenticated' && session?.user) {
            window.opener?.postMessage(
                {
                    type: 'google-login-success',
                    user: session.user,
                },
                window.location.origin
            );
            window.close();
        }
    }, [status, session]);

    return (
        <div className="w-screen h-screen flex items-center justify-center bg-white">
            <Commet color="#32cd32" size="medium" text="" textColor="#333" />
        </div>
    );

}