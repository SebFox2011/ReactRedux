import {ITEM_ADD,ITEM_REMOVE} from "../actions/todo";

const initialState = { //initialisation à vide des items
    items:[]
};

function todoApp(state=initialState,action) { //etat initial de l'applicaiton initialisé a initialState par défaurt
    switch (action.type) { // switch ItemADD ou Itelm remove
        case ITEM_ADD:
            return {items:[...state.items,action.payload]}; // ...state.item est un tableau
                                                            // : est equivalent à == mais pour un objet
        case ITEM_REMOVE:
            return {items:[state.items.filter(i =>i !== action.payload)]};

        default:
            return state;
    }
}
