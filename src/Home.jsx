import React from 'react';
import { useEffectOnce, useLocalStorage } from 'react-use';
import { userDetail } from './lib/api/UserApi';
import { useNavigate } from 'react-router';

export default function Home() {
    const [token, setToken] = useLocalStorage('token', '');
    const navigate = useNavigate();

    async function checkUserAuth() {
        try {
            if (!token) {
                navigate('/login', { replace: true });
                return;
            }

            const response = await userDetail(token);

            if (response.status === 200) {
                navigate('/dashboard/contacts', { replace: true });
            } else {
                setToken('');
                navigate('/login', { replace: true });
            }
        } catch (err) {
            console.error('Auth check failed', err);
            setToken('');
            navigate('/login', { replace: true });
        }
    }

    useEffectOnce(() => {
        checkUserAuth();
    });

    return (
        <>
        </>
    );
}
