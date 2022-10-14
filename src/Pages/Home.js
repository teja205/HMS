import React, { Component } from 'react'
import Table from '../Component/table'
import Header from './header'
//import Sidebar from './Sidebar';
import { assetsImages } from '../Constant/images';

export class Home extends Component {
  render() {
    return (      
      <div className='home row'>
        <div className="col-12">
        <Header />
        </div>
        <div className="col-3">
          Hello
        </div>
        <div className="col-9">          
          <Table />
        </div>
      </div>
    )
  }
}

export default Home