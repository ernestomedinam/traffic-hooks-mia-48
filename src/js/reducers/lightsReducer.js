export function lightsInitializer(initialArg) {
    return initialArg || [];
};

export function lightsReducer(state, action) { // {type: "TYPE_OF_ACTION", payload: []}
    switch(action.type) {
        case "NEXT": 
            // find the index for the currently on light
            const _currentIndex = state.findIndex((light) => light.current); // light.current === true
            // calculate the index for the next light to turn on
            const _nextIndex = _currentIndex === state.length - 1 ? 0 : _currentIndex + 1;
            // update lights array changing only current property values
            return state.map((light, index) => {
                return {
                    color: light.color,
                    duration: light.duration,
                    current: index === _nextIndex
                        ? true
                        : false
                };
            });
        default:
            return [];
    };
};
