import AccountingService from "../service";
const service = new AccountingService()


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

const addGoal = (name,cost) => {
    return{
        type: 'ADD_GOAL',
        name,
        cost
    }
}




const incomesRequested = () => {
    return{
        type: 'FETCH_INCOMES_REQUESTED'
    }
}

const incomesLoaded = (items) => {
    return{
        type: 'FETCH_INCOMES_LOADED',
        items
    }
}

const incomesFailed = () => {
    return{
        type: 'FETCH_INCOMES_FAILED'
    }
}

const fetchIncomes = () => (dispatch) => {
    let items=[]
    dispatch(incomesRequested())
    service.getIncomes().then((itemsData) => {
          Object.keys(itemsData.data).forEach(item=>items.push(itemsData.data[item]))
          dispatch(incomesLoaded(items))
    })
        .catch((e)=>dispatch(incomesFailed(e)))
}

const loadIncome = (item) => (dispatch) => {
    dispatch(incomesRequested())
    service.postIncome(item).then((response) => dispatch(addIncome({...item, id:response.data.name})))
        .catch((e) => dispatch(incomesFailed(e)))
}

const loadUpdatedIncome = (item,id) => (dispatch) => {
    console.log(item)
}


export {
    addIncome,
    addExpense,
    updateIncome,
    deleteIncome,
    updateExpense,
    deleteExpense,
    addGoal,
    fetchIncomes,
    loadIncome,
    loadUpdatedIncome
}