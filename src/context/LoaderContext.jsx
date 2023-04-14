import React, { createContext } from 'react'
import ContentLoader from "react-content-loader";

export const LoaderContext = createContext()

export const LoaderProvider = ({children}) => {

    const LoaderCarousel = () => (
        <ContentLoader 
          speed={1.2}
          width={2000}
          height={480}
          backgroundColor="#ffffff"
          foregroundColor="#e6e6e6"
        >
          <rect x="0" y="0" rx="0" ry="0" width="2000" height="480" />
        </ContentLoader>
      );



    return(
        <LoaderContext.Provider value={{LoaderCarousel}}>
            {children}
        </LoaderContext.Provider>
    )
}

