import React, { useMemo } from "react";
import PropTypes from "prop-types";

export const Light = ({light, ...props}) => {
    // useMemo(() => {}, []);
    const color = useMemo(() => {
        const _colors = { 
            red: {
                on: "#ff0000",
                off: "#960000"
            },
            yellow: {
                on: "#ffff00",
                off: "#e7cc01"
            },
            green: {
                on: "#00ff00",
                off: "#059033"
            }
        };
        return light.current
            ? _colors[light.color]["on"]
            : _colors[light.color]["off"]
    }, [light]);
    return (
        <div 
            className="my-2"
            style={{
                width: "6rem",
                height: "6rem",
                borderRadius: "50%",
                boxShadow: !light.current
                    ? "none"
                    : `0 0 25px 10px ${color}`,
                backgroundColor: color
            }} />
    );
};

Light.propTypes = {
    light: PropTypes.shape({
        color: PropTypes.oneOf(["red", "yellow", "green"]),
        current: PropTypes.bool
    })
};
