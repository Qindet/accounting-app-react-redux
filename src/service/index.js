import axios from 'axios'

export default class AccountingService {
    constructor() {
        this._URL=process.env.REACT_APP_DB_URL
    }

    postIncome = async (data) => {
        const res = await axios.post(`${this._URL}/incomes.json`,data)
        if (res.status !== 200) {
            throw new Error('Something went wrong')
        }
        console.log(res)
        return res
    }

    getIncomes = async () => {
        const res = await axios.get(`${this._URL}/incomes.json`)
        if (res.status !== 200) {
            throw new Error('Something went wrong')
        }
        return res
    }

    putIncome = async (id) => {
        const res = await axios.put(`${this._URL}/incomes/${id}.json`)
        console.log(res)
    }
}