const initialState = {
    name: '',
    seats: 0
}

const infoReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case 'ADD_INFO': {
            return {
                ...payload
            }
        }
        default: {
            return state;
        }
    }
}

export default infoReducer;
