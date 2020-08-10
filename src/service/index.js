import axios from 'axios'

export default class AccountingService {
    _URL: process.env.REACT_APP_DB_URL

    postIncome = async (data) => {
        const res = await axios.post(`${this._URL}/incomes.json`,data)
        console.log(res.data)
    }
}