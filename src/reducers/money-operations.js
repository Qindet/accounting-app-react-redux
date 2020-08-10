
const initialState = {
    incomeItems: [],
    expenseItems: [],
    balance: 0,
    nameOfGoal: '',
    costOfGoal: 0,
    loading: true,
    error: false
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
    } else if (type === 'add') {
        return [...itemList,action.payload]
    }
}

function updateBalance(incomes, expenses) {
    return incomes.reduce((s,item)=>s+Number(item.value),0) - expenses.reduce((s,item)=>s+Number(item.value),0)
}

export default function moneyReducer(state=initialState,action) {
    switch (action.type) {
        case 'ADD_INCOME':
            return {
                ...state,
                incomeItems: updateList(state.incomeItems,action,'add'),
                balance: updateBalance(updateList(state.incomeItems,action,'add'),state.expenseItems)
            }
        case 'ADD_EXPENSE':
            return {
                ...state,
                expenseItems:updateList(state.expenseItems,action,'add'),
                balance: updateBalance(state.incomeItems,updateList(state.expenseItems,action,'add'))
            }
        case 'UPDATE_INCOME':
            return {
                ...state,
                incomeItems: updateList(state.incomeItems,action,'update'),
                balance: updateBalance(updateList(state.incomeItems,action,'update'),state.expenseItems)
            }
        case 'DELETE_INCOME':
            return {
                ...state,
                incomeItems: updateList(state.incomeItems,action,'delete'),
                balance: updateBalance(updateList(state.incomeItems,action,'delete'),state.expenseItems)
            }
        case 'UPDATE_EXPENSE':
            return {
                ...state,
                expenseItems:  updateList(state.expenseItems,action, 'update'),
                balance: updateBalance(state.incomeItems, updateList(state.expenseItems,action,'update'))
            }
        case 'DELETE_EXPENSE':
            return {
                ...state,
                expenseItems: updateList(state.expenseItems,action, 'delete'),
                balance: updateBalance(state.incomeItems,updateList(state.expenseItems,action,'delete'))
            }
        case 'ADD_GOAL':
            return {
                ...state,
                nameOfGoal: action.name,
                costOfGoal: action.cost
            }

        case 'FETCH_INCOMES_REQUESTED':
            return {
                ...state,
                loading: true,
                error: false
            }
        case 'FETCH_INCOMES_LOADED':
            return {
                ...state,
                loading: false,
                error: false
            }
        case 'FETCH_INCOMES_FAILED':
            return {
                ...state,
                loading: false,
                error: true
            }
        default: {
            return state
        }
    }
}