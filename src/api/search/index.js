import axios from 'axios'
import Url from './../index'

const api = {
  requestSearch (name) {
    return new Promise((resolve, reject) => {
      axios.get(Url.baseUrl + 'api/product/searchK?goodsName=' + name)
        .then(data => resolve(data))
        .catch(err => reject(err))
    })
  }
}

export default api
