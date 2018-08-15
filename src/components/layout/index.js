import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { MainContainer } from '../../containers'

class Layout extends React.Component {
  render() {
    return (
      <div>
        <div className="container-fluid">
          <div className="row">
            <Header />
          </div>
        </div>

        <div className="container-fluid mt-5 pt-1 custom-height">
          <div className="row">
            <div className="col-md-12">
              <MainContainer />
            </div>
          </div>
          <Footer />
        </div>
      </div>
    )
  }
}

export default Layout
