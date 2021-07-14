import { ITEM_ADDER } from "../actions/itemActions";

const itemReducer = (state = { item: {} }, action) => {
    switch (action.type) {
        case ITEM_ADDER:
            return {...state, item: action.payload};
        default:
            return {...state};
    }
}

export default itemReducer
