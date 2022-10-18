// @flow
import * as React from 'react';

type TokenShape = {
    access: string,
    refresh: string
}
export const useAuthTokens = () => {
    const Tokens = localStorage.getItem('authTokens')
    if (!Tokens) return {access: null, refresh: null}

    const {access, refresh} = JSON.parse(Tokens) as TokenShape


    return {
        access,
        refresh
    };
};

export default useAuthTokens