import React, { useCallback, useEffect, useReducer, useState } from "react";
import { Light } from "./Light";
import { lightsInitializer, lightsReducer } from "../reducers/lightsReducer";
import { useTrafficLight } from "../hooks/useTrafficLight";

export const TrafficLight = ({initialLights, props}) => {
    const lights = useTrafficLight(initialLights);
    return (
        <div className="bg-dark p-4 w-auto m-2">
            {lights.map((light, index) => {
                return (
                    <Light
                        key={index}
                        light={light} />
                );
            })}
        </div>
    );
};
