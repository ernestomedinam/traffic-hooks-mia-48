import React, { useCallback, useReducer } from "react";
import { appInitializer, appReducer } from "./OurContext.reducer";

export const StoreContext = React.createContext();
export const ActionsContext = React.createContext();

export const OurContext = (props) => {
    const [state, dispatch] = useReducer(
        appReducer,
        {},
        appInitializer
    );
    const changeColor = useCallback((index, color) => {
        dispatch({
            type: "CHANGE_COLOR",
            payload: {
                index: index,
                color: color
            }
        });
    }, [dispatch]);
    return (
        <ActionsContext.Provider value={{
            changeColor: changeColor
        }}>
            <StoreContext.Provider value={state}>
                {props.children}
            </StoreContext.Provider>
        </ActionsContext.Provider>
    );
};
