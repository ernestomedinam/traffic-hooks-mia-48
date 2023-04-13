import { useReducer, useEffect } from "react";
import { lightsInitializer, lightsReducer } from "../reducers/lightsReducer";

export function useTrafficLight(initialLights) {
    const [lights, lightsDispatch] = useReducer(
        lightsReducer, initialLights, lightsInitializer
    );
    useEffect(() => {
        const _duration = lights.find((light) => light.current).duration; // seconds
        setTimeout(() => {
            lightsDispatch({
                type: "NEXT"
            });
        }, _duration * 1000); // miliseconds
    }, [lights, lightsDispatch]);
    return lights;
};
