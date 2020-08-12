import AccountingService from "../service";







const addGoal = (name,cost) => {
    return{
        type: 'ADD_GOAL',
        name,
        cost
    }
}









export {


    addGoal,

}