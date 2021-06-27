

export const initialState = {
    restaurants: [],

    basket: [],
    restaurant_b: [],
    offers: null,
    order: [],
    user: null

};
const reducer = (state = { initialState }, action) => {

    switch (action.type) {
        case 'SET_USER':
            return { ...state, user: action.user }
        case 'SET_RESTAURANTS':
            return { ...state, restaurants: action.restaurants }
        case 'SET_OFFERS':
            return { ...state, offers: action.offers }
        case 'SET_BRESTAURANT':
            return { ...state, restaurant_b: [...state.restaurant_b, action.restaurant] }


        case 'REMOVE_USER':
            return { ...state, user: null }
        case 'ADD_ORDER':
            const newOrderA = [state.order, action.item]

            return { ...state, order: newOrderA }

        case 'REMOVE_ORDER':

            let newOrder = state.order.filter((item, id) => {

                return action.id !== item.id

            })

            return { ...state, order: newOrder }

        case 'ADD_TO_BASKET':
            return { ...state, basket: [...state.basket, action.item] }
        case 'REMOVE_BASKET':
            return { ...state, basket: [] }

        case 'REMOVE_FROM_BASKET':
            let newBasket = state.basket.filter((item) => {
                return action.id !== item.id
            })
            return { ...state, basket: newBasket }

        default:
            return state;
    }
}
export default reducer;