import React, { Component } from 'react'
import Table from '../Component/table'
import Master from '../Component/mastertable';
import Header from './header'
import { assetsImages } from '../Constant/images';

export class Home extends Component {
  render() {
    return (
      <div className='home'>
          <img
                  className="background"
                  src={assetsImages.bg}
                  alt="Catersmart Logo"
                /> 
          <Header />
          <Master />
      </div>
    )
  }
}

export default Home