import React, { createContext, useContext, useState, ReactNode } from 'react';


interface NetflixContextType {
    tvShowId:number;
    setTvShowId: (tvShowId:number)=> void;
}

const NetflixContext = createContext<NetflixContextType | undefined>(undefined);


type NetflixProviderProps ={
    children:ReactNode;
}

export const NetfixProvider :React.FC<NetflixProviderProps> =({children})=>{
    const [tvShowId,setTvShowId] = useState<number>(0);

    return(
        <NetflixContext.Provider value={{tvShowId,setTvShowId}}>
            {children}
        </NetflixContext.Provider>
    )
}

export const useNetflixContext = () => {
    const context = useContext(NetflixContext);
    if (!context) {
        throw new Error("useNetflixContext must be used within a NetflixProvider");
    }
    return context;
};