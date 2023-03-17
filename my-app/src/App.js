import React from 'react'
import './App.css'
import Header from './components/common/heading/Header'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/home/Home'
import About from './components/about/About';
import CourseHome from './components/allcourses/CourseHome';
import { Footer } from './components/footer/Footer';

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' exact component={About} />
          <Route path='/courses' exact component={CourseHome} />

        </Switch>
        <Footer />
      </Router>
    </>
  )
}

export default App;