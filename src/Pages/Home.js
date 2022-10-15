import React, { Component } from 'react'
import Table from '../Component/table'
import Master from '../Component/mastertable';
import Header from './header';
import Sidebar from './Sidebar'
import { assetsImages } from '../Constant/images';

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