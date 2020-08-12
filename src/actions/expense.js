import AccountingService from "../service";

const service = new AccountingService()
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

const expensesRequested = () => {
    return{
        type: 'FETCH_EXPENSES_REQUESTED'
    }
}

const expensesLoaded = (items) => {
    return{
        type: 'FETCH_EXPENSES_LOADED',
        items
    }
}

const expensesFailed = () => {
    return{
        type: 'FETCH_EXPENSES_FAILED'
    }
}

const fetchExpenses = () => (dispatch) => {
    let items=[]
    dispatch(expensesRequested())
    service.getData('expenses').then((itemsData) => {
        Object.keys(itemsData.data).forEach(item=>items.push({...itemsData.data[item],id:item}))
        dispatch(expensesLoaded(items))
    })
        .catch((e)=>dispatch(expensesFailed(e)))
}

const loadExpense = (item) => (dispatch) => {
    dispatch(expensesRequested())
    service.postData(item,'expenses').then((response) => dispatch(addExpense({...item, id:response.data.name})))
        .catch((e) => dispatch(expensesFailed(e)))
}

const loadUpdatedExpense = (id,item) => (dispatch) => {

    dispatch(expensesRequested())
    service.putData(id,item,'expenses').then((response) =>{
        dispatch(updateExpense(id,item))})
        .catch((e) => dispatch(expensesFailed(e)))
}

const loadDeletedExpense = (id) => (dispatch) => {
    dispatch(expensesRequested())
    service.deleteData(id,'expenses').then((response) => dispatch(deleteExpense(id)))
        .catch((e) => dispatch(expensesFailed(e)))
}

export {
    fetchExpenses,
    loadExpense,
    loadDeletedExpense,
    loadUpdatedExpense
}