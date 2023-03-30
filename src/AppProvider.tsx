import React, { createContext, useEffect, useState } from 'react';
import { useCallback } from 'react';

type AppContextState ={

};

type AppProviderProps = {
	children: React.ReactNode;
};

export const AppContext =
createContext<AppContextState>({} as AppContextState);

export const AppProvider = ({children}:AppProviderProps):JSX.Element => {
    return (
        <AppContext.Provider
        value>
            {children}
        </AppContext.Provider>
    )

}