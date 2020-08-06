const initialState = {
    items: [{name:'Dima', value: 300, date: '01.02.02'}]
}


export default function incomeReducer(state=initialState,action) {
    switch (action.type) {
        case 'ADD_INCOME':
            return {
                ...state,
                items: [...state.items,action.payload]
            }
        default: {
            return state
        }
    }
}