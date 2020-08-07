const addIncome = (payload) => {
    return {
        type: 'ADD_INCOME',
        payload
    }
}
const updateIncome = (id,payload) => {
    return {
        type: 'UPDATE_INCOME',
        id,
        payload
    }
}
const deleteIncome = (payload) => {
    return {
        type: 'DELETE_INCOME',
        payload
    }
}
const addExpense = (payload) => {
    return {
        type: 'ADD_EXPENSE',
        payload
    }
}
const updateExpense = (id,payload) => {
    return {
        type: 'UPDATE_EXPENSE',
        id,
        payload
    }
}
const deleteExpense = (payload) => {
    return {
        type: 'DELETE_EXPENSE',
        payload
    }
}


export {
    addIncome,
    addExpense,
    updateIncome,
    deleteIncome,
    updateExpense,
    deleteExpense
}