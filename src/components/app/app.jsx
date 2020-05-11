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
          <Route path="/MacOk-Landing-Page" exact component={HomePage} />
          <Route path="/MacOk-Landing-Page/about" component={AboutPage} />
          <Route path="/MacOk-Landing-Page/service" component={ServicePage} />
        </Switch>

        <Footer />
      </Router>

    )
  }

}


export default App