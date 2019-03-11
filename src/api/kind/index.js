import axios from 'axios';
import URL from '@/api';

const api = {
    requestData (pageCode, pageNumber) {
        return new Promise((resolve, reject) => {
            axios.get(URL.baseUrl + '/api/product?pageCode=' + pageCode +'&pageNumber=' + pageNumber )
            .then(data => {
                resolve(data.data.data)
            })
            .catch(err => {
                reject(err)
            })
        })
    },
    requestDataPrice (number, pageNumber) {
        return new Promise((resolve, reject) => {
            axios.get(URL.baseUrl + '/api/product/sort?sortType=discountPrice&num=' + number +'&pageNumber=' + pageNumber)
            .then(data => {
                resolve(data.data)
            })
            .catch(err => {
                reject(err)
            })
        })
    },
    requestDataSale (number, pageNumber) {
        return new Promise((resolve, reject) => {
            axios.get(URL.baseUrl + '/api/product/sort?sortType=salenum&num=' + number + '&pageNumber=' + pageNumber)
            .then(data => {
                resolve(data.data)
            })
            .catch(err => {
                reject(err)
            })
        })
    }
}

export default api
