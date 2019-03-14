import axios from 'axios'
import URL from '@/api'

const api = {
  requestDetail (id) {
    return new Promise((resolve, reject) => {
      console.log(URL.baseUrl,'/product/searchI?postID=', id)
      axios.get(URL.baseUrl + '/api/product/searchI?postID=' + id)
        .then(data => resolve(data))
          .catch(err => reject(err))
    })
  }
}

export default api
