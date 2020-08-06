const addIncome = (payload) => {
    console.log(payload)
    return {
        type: 'ADD_INCOME',
        payload
    }
}



export {
    addIncome
}