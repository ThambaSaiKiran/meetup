import {Component} from 'react'
import meetupContext from '../../Context/TextContext'
import './index.css'

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

class Register extends Component {
  state = {
    name: '',
    topic: topicsList[0].id,
    userData: {},
    isError: false,
    errMsg: '',
  }

  onChangeName = event => {
    this.setState({name: event.target.value})
  }

  onChangeTopic = event => {
    this.setState({topic: event.target.value})
  }

  render() {
    const {name, topic, isError, errMsg} = this.state
    return (
      <meetupContext.Consumer>
        {value => {
          const {changeUserDetails} = value

          const onRegistered = () => {
            const {userData} = this.state
            changeUserDetails(userData)
            const {history} = this.props
            history.replace('/')
          }

          const onSubmitForm = event => {
            event.preventDefault()
            if (name === '') {
              this.setState({isError: true, errMsg: 'Please enter your name'})
            } else {
              this.setState({userData: {name, topic}}, onRegistered)
            }
          }

          return (
            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/meetup/website-logo-img.png"
                alt="website logo"
                className="logo"
              />
              <div className="bg1">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/meetup/website-register-img.png"
                  alt="website register"
                  className="register"
                />
                <div>
                  <h1>Let us join</h1>
                  <form onSubmit={onSubmitForm}>
                    <label htmlFor="name">NAME</label>
                    <input
                      type="text"
                      placeholder="Your name"
                      onChange={this.onChangeName}
                      value={name}
                      id="name"
                    />
                    <label htmlFor="topic">Topics</label>
                    <select
                      id="topic"
                      value={topic}
                      onChange={this.onChangeTopic}
                    >
                      {topicsList.map(eachItem => (
                        <option key={eachItem.id} value={eachItem.id}>
                          {eachItem.displayText}
                        </option>
                      ))}
                    </select>
                    <button type="submit">Register Now</button>
                  </form>
                  {isError && <p className="err">{errMsg}</p>}
                </div>
              </div>
            </div>
          )
        }}
      </meetupContext.Consumer>
    )
  }
}

export default Register
