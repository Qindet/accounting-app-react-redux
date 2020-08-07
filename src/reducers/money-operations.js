const initialState = {
    balance: null,
    incomeItems: [{name:'Dima', value: 300, date: '01.02.02',id: 1}],
    expenseItems: [{name:'Dima', value: 300, date: '01.02.02', id: 1}],
}

function updateList(itemList,action,type) {
    let items
    let index
    if (type === 'update') {
         index = itemList.findIndex((item) => item.id === action.id)
         items = [...itemList.slice(0,index),
            {name: action.payload.name, value: action.payload.value, date: action.payload.date, id:action.id},
            ...itemList.slice(index+1)]
        return items
    } else if (type === 'delete') {
        const index = itemList.findIndex((item) => item.id === action.payload)
        const items = [...itemList.slice(0,index),
            ...itemList.slice(index+1)]
        return items
    }
}


export default function moneyReducer(state=initialState,action) {
    let items
    let index
    switch (action.type) {
        case 'ADD_INCOME':
            return {
                ...state,
                incomeItems: [...state.incomeItems,action.payload]
            }
        case 'ADD_EXPENSE':
            return {
                ...state,
                expenseItems: [...state.expenseItems,action.payload]
            }
        case 'UPDATE_INCOME':
            return {
                ...state,
                incomeItems: updateList(state.incomeItems,action,'update')
            }
        case 'DELETE_INCOME':
            return {
                ...state,
                incomeItems: updateList(state.incomeItems,action,'delete')
            }
        case 'UPDATE_EXPENSE':
            return {
                ...state,
                expenseItems: updateList(state.expenseItems,action, 'update')
            }
        case 'DELETE_EXPENSE':
            return {
                ...state,
                expenseItems: updateList(state.expenseItems,action, 'delete')
            }
        default: {
            return state
        }
    }
}