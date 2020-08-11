import AccountingService from "../service";
import {withMobileDialog} from "@material-ui/core";
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
          Object.keys(itemsData.data).forEach(item=>items.push({...itemsData.data[item],id:item}))
          dispatch(incomesLoaded(items))
    })
        .catch((e)=>dispatch(incomesFailed(e)))
}

const loadIncome = (item) => (dispatch) => {
    dispatch(incomesRequested())
    service.postIncome(item).then((response) => dispatch(addIncome({...item, id:response.data.name})))
        .catch((e) => dispatch(incomesFailed(e)))
}

const loadUpdatedIncome = (id,item) => (dispatch) => {
    dispatch(incomesRequested())
    service.putIncome(id,item).then((response) => dispatch(updateIncome(id,item)))
        .catch((e) => dispatch(incomesFailed(e)))
}

const loadDeletedIncome = (id) => (dispatch) => {
    dispatch(incomesRequested())
    service.deleteIncome(id).then((response) => dispatch(deleteIncome(id)))
        .catch((e) => dispatch(incomesFailed(e)))
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
    loadUpdatedIncome,
    loadDeletedIncome
}