import meetupContext from '../../Context/TextContext'
import './index.css'

const Home = props => {
  const onRegister = () => {
    const {history} = props
    history.replace('/register')
  }

  return (
    <meetupContext.Consumer>
      {value => {
        const {userDetails} = value
        return (
          <div>
            <img src="" alt="" className="logo" />
            {userDetails === {} ? (
              <div>
                <h1>Welcome to Meetup</h1>
                <p>Please register for the topic</p>
                <button type="button" onClick={onRegister}>
                  Register
                </button>
              </div>
            ) : (
              <div>
                <h1>{userDetails.username}</h1>
                <p>{userDetails.topic}</p>
              </div>
            )}
          </div>
        )
      }}
    </meetupContext.Consumer>
  )
}

export default Home
