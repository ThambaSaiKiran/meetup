import React from 'react'

const meetupContext = React.createContext({
  userDetails: {},
  changeUserDetails: () => {},
})

export default meetupContext
