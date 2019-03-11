import React, { Component } from 'react'
import Search from '@/pages/Search/Search.jsx'
import { Route } from 'react-router-dom'

class SearchApp extends Component {
  render () {
    return (
      <Route path='/search' component= { Search }></Route>    
    )
  }
}

export default SearchApp
