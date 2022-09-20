import logo from './Léonard de Vinci.jpg'
const Header = (props) =>{
    return(
      <div>
        <h1>{props.course}</h1>
        <img src={logo} alt="baroni"/>
      </div>
    )
  }

  export default Header