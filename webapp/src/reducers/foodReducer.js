import {DELETE_FOOD, GET_FOOD, SAVE_FOOD, SELECT_FOOD} from '../actions/index';
const initialState = {
    foods: [
        {
            id: 1,
            name: '음식명',
            mainCategory: '카테고리',
            status: 'ABLE',
            selectCount: 0
        }
    ],
    selectFood: []
}

export default function foodReducer(state = initialState, action) {
    switch (action.type) {
        case GET_FOOD:
            return {
                foods: action.data,
                selectFood: action.data
            }
        case SAVE_FOOD:
            return {
                foods: state.foods.concat(action.saveData)
            }
        case DELETE_FOOD:
            return {
                ...state,
                foods: state.foods.filter(row =>
                    row.id !== action.id)
            }
        case SELECT_FOOD:
            return state
        default:
            return state
    }
}