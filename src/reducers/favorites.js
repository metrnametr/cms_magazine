const initialState = {
    favorites: [
        {
            id: 56
        }
    ]
}


const favoritesReducer = (state = initialState, { type, payload }) => {
    switch(type) {
        case 'ADD_FAVORITE': {
            return { ...state, favorites: [ ...state.favorites, payload.favorite ] };
        }
        case 'DELETE_FAVORITE': return { ...state, favorites: state.favorites.filter(it => it.id !== payload.id )};
        default: return state;
    }
}

export default favoritesReducer;