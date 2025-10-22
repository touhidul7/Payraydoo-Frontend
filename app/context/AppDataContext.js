'use client';
import React, { createContext, useContext, useState } from 'react';
import Header from '../Components/Header';

const AppDataContext = createContext();

export const useAppData = () => useContext(AppDataContext);

export const AppDataProvider = ({ children }) => {

    /* Base URL */
    const VITE_SERVER_API = process.env.NEXT_PUBLIC_SERVER_API;

    const testdata ="Hello from context!";


    return (
        <AppDataContext.Provider value={{ testdata }}>{/* Add Context Data Here */}
            <>
                <Header/>
                {children}{/* Layout Section */}
            </>
        </AppDataContext.Provider>
    );
};


/* 
use case example:
import { useAppData } from "./context/AppDataContext";
const { testdata } = useAppData();
console.log("Context Data:", testdata);


*/