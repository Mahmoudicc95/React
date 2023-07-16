import './Header.css'
import logo from '../../assets/images/logo.png'

const Header = () => {
  return (
    <div className="navbar navbar-expand-md bg-dark navbar-dark ">
        <div className="container">
             <a href="#" className="navbar-brand"><img  id= "logo" src={logo} alt="" /></a> 
  
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainmenu">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="mainmenu">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item"><a href="#hero" className="nav-link">Home</a></li>
                    <li className="nav-item"><a href="#features" className="nav-link">Features</a></li>
                    <li className="nav-item dropdown">
                        <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Learn</a>
                        <ul className="dropdown-menu">
                            <li><a href="#learn" className="dropdown-item">Learn Bootstrap</a></li>
                            <li><a href="#next" className="dropdown-item">Where to go next</a></li>
                        </ul>
                    </li>
                    <li className="nav-item"><a href="#faq" className="nav-link">Ask Me</a></li>
                    {/* <li className="nav-item"><a href="./index-ar.html" className="nav-link">Hydropro</a></li> */}
                    <li><button data-text="Awesome" className="button">
                        <span className="actual-text">&nbsp;Hydropro&nbsp;</span>
                        <span className="hover-text" aria-hidden="true">&nbsp;Hydropro&nbsp;</span>
                    </button></li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Header