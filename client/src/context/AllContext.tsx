import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import axios from "axios"


interface NetflixContextType {
    tvShowId:number;
    setTvShowId: (tvShowId:number)=> void;
    movieId:number;
    setMovieId:(movieId:number)=>void;
    searchedValue:string;
    setSearchedValue:(searchedValue:string)=>void;
    user:User | null;
}
type User ={
    username:string,
    email:string
}

const NetflixContext = createContext<NetflixContextType | undefined>(undefined);


type NetflixProviderProps ={
    children:ReactNode;
}

export const NetfixProvider :React.FC<NetflixProviderProps> =({children})=>{
    const [tvShowId,setTvShowId] = useState<number>(0);
    const [movieId,setMovieId] = useState<number>(0);
    const [searchedValue,setSearchedValue] = useState<string>("");
    const [user, setUser] = useState<User | null>(null);

    const getCurrentUser = async () => {
        try {
            const response = await axios.get("http://localhost:5000/api/auth/getcurrent", {
                withCredentials: true
            });
            console.log(response);
            
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(()=>{
        getCurrentUser();
    },[])
    return(
        <NetflixContext.Provider value={{tvShowId,setTvShowId,movieId,setMovieId,searchedValue,setSearchedValue,user}}>
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