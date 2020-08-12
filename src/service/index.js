import axios from 'axios'

export default class AccountingService {
    constructor() {
        this._URL=process.env.REACT_APP_DB_URL
    }

    postData = async (data,type) => {

        const res = await axios.post(`${this._URL}/${type}.json`,data)
        if (res.status !== 200) {
            throw new Error('Something went wrong')
        }
        return res
    }
    getData = async (type) => {

        const res = await axios.get(`${this._URL}/${type}.json`)
        if (res.status !== 200) {
            throw new Error('Something went wrong')
        }
        return res
    }
    putData = async (id,item,type) => {

        const res = await axios.put(`${this._URL}/${type}/${id}.json`,item)
        if (res.status !== 200) {
            throw new Error('Something went wrong')

        }
        return res
    }
    deleteData = async (id,type) => {

        const res = await axios.delete(`${this._URL}/${type}/${id}.json`)
        if (res.status !== 200) {
            throw new Error('Something went wrong')
        }
        return res
    }

}