import classes from "./Logo.module.css"
import logo from "../../images/logo.svg"

const Logo = ()=>{
    return(
        <div className={classes.Logo}>
            <img alt="image" src={logo} />
            <span>Pizza</span>
        </div>
    )
}

export default Logo;