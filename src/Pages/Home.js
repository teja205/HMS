import React, { Component } from 'react'
import Table from '../Component/table'
import Header from './header'
import { assetsImages } from '../Constant/images';
import Sidebar from './Sidebar';

export class Home extends Component {
  render() {
    return (
      <div className='home row'>        
            <Sidebar /> 
      </div>
    )
  }
}

export default Home