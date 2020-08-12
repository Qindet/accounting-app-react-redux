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
    service.getData('incomes').then((itemsData) => {
        Object.keys(itemsData.data).forEach(item=>items.push({...itemsData.data[item],id:item}))
        dispatch(incomesLoaded(items))
    })
        .catch((e)=>dispatch(incomesFailed(e)))
}

const loadIncome = (item) => (dispatch) => {
    dispatch(incomesRequested())
    service.postData(item,'incomes').then((response) => dispatch(addIncome({...item, id:response.data.name})))
        .catch((e) => dispatch(incomesFailed(e)))
}

const loadUpdatedIncome = (id,item) => (dispatch) => {
    dispatch(incomesRequested())
    service.putData(id,item,'incomes').then((response) => dispatch(updateIncome(id,item)))
        .catch((e) => dispatch(incomesFailed(e)))
}

const loadDeletedIncome = (id) => (dispatch) => {
    dispatch(incomesRequested())
    service.deleteData(id,'incomes').then((response) => dispatch(deleteIncome(id)))
        .catch((e) => dispatch(incomesFailed(e)))
}

export {
    fetchIncomes,
    loadDeletedIncome,
    loadUpdatedIncome,
    loadIncome
}