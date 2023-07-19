import './NavItem.css'



const NavItem = (props) => {
  return (
    <li className="Nav-item">
        {props.children}
     </li>
  )
}

const NavItemDropDown = (props) => {
    return (
      <li className="Nav-item dropdown">
          {props.children}
         </li>
    )
  }
export default NavItem
export {NavItemDropDown}