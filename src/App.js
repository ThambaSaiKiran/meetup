import {Redirect, Route, Switch} from 'react-router-dom'
import {Component} from 'react'
import Home from './components/Home'
import NotFound from './components/NotFound'
import Register from './components/Register'
import meetupContext from './Context/TextContext'
import './App.css'

// These are the lists used in the application. You can move them to any component needed.
const topicsList = [
  {
    id: 'ARTS_AND_CULTURE',
    displayText: 'Arts and Culture',
  },
  {
    id: 'CAREER_AND_BUSINESS',
    displayText: 'Career and Business',
  },
  {
    id: 'EDUCATION_AND_LEARNING',
    displayText: 'Education and Learning',
  },
  {
    id: 'FASHION_AND_BEAUTY',
    displayText: 'Fashion and Learning',
  },
  {
    id: 'GAMES',
    displayText: 'Games',
  },
]

// Replace your code here
class App extends Component {
  state = {userDetails: {}}

  changeUserDetails = userData => {
    this.setState({userDetails: userData})
  }

  render() {
    const {userDetails} = this.state
    return (
      <meetupContext.Provider
        value={{userDetails, changeUserDetails: this.changeUserDetails}}
      >
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="register" component={Register} />
          <Route path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </meetupContext.Provider>
    )
  }
}

export default App
