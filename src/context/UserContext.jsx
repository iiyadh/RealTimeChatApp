import { createContext, useState } from "react";

export const ContextU = createContext(null);
function UserContext(props){
    const [userData,setUserData] = useState(null);

    const contextValue = {
        userData,
        setUserData
    }

    return(
        <ContextU.Provider value={contextValue}>
            {props.children}
        </ContextU.Provider>
    )
}

export default UserContext;