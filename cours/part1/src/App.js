import React from "react"

const footer = () => {
  return (
    <div>
      greeting app created by <a href='https://github.com/mluukkai'>mluukkai</a>
    </div>
  )
}

const Hello = (props) => {
  return (
      <p>Hello {props.name}, you are {props.age} year old</p>
  )
}
const App = () => {
  return(
    <div>
      <h1>Greeting</h1>
      <Hello name = 'Maya' age ={26 + 10}/>
      <footer />
    </div>
  )
}

export default App;
