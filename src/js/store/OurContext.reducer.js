export function appInitializer(initialArg) {
    return Object.assign({
        demo: [{
            title: "FIRST",
            background: "white",
            initial: "white"
        }, {
            title: "SECOND",
            background: "white",
            initial: "white"
        }]
    }, initialArg);
};

export function appReducer(state, action) {
    switch(action.type) {
        case "CHANGE_COLOR": // payload: {index, color}
            return {
                ...state,
                demo: state.demo.map((element, index) => {
                    if (index === action.payload.index) element.background = action.payload.color;
                    return element;
                })
            };
    };
};
