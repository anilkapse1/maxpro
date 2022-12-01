import React, { createContext, useState } from 'react'

export const Stepcontext = createContext();


const Context = ({children}) => {
    const [activeSteps, setActiveSteps] = useState(0);

  return (
    <Stepcontext.Provider value={{activeSteps,setActiveSteps}}>
        {children}
    </Stepcontext.Provider>
    )
}

export default Context