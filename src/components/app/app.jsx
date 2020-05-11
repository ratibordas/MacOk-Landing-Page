import React from 'react'
import HomePage from './home-page'
import Header from './header'
import Footer from './footer'
import AboutPage from './about-page'
import ServicePage from './service-page'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

class App extends React.Component {
  

  render() {
    return (
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/service" component={ServicePage} />
        </Switch>

        <Footer />
      </Router>

    )
  }

}


export default App