import axios from 'axios'

const api = {
  requestBanner () {
    return new Promise((resolve,reject) => {
      axios.get('/banner/data')
        .then(data => resolve(data))
         .catch(err => reject(err))
    })
  }
}

export default api
