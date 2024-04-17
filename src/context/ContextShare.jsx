import React, { createContext } from 'react'
import { useState } from 'react';

 export const addReviewResponseContext = createContext();
 export const editReviewResponseContext = createContext();
 export const isAuthTokenContext = createContext()
function ContextShare({ children }) {

     // children is a pre-defined props used to share data between all components
    // create a state that need to shared
    const [addReviewResponse, setAddReviewResponse] = useState({})
    const [editReviewResponse, setEditReviewResponse] = useState({})
    const [isAuthToken, setIsAuthToken] = useState(false)
  return (
   <>
   
   <addReviewResponseContext.Provider value={{ addReviewResponse, setAddReviewResponse }}>
<editReviewResponseContext.Provider value={{ editReviewResponse, setEditReviewResponse }}>

<isAuthTokenContext.Provider value= {{isAuthToken, setIsAuthToken}}>
                        {children}
                    </isAuthTokenContext.Provider>
   
   </editReviewResponseContext.Provider>
  
   </addReviewResponseContext.Provider>
   
   </>
  )
}

export default ContextShare