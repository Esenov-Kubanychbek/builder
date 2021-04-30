import classes from "./Logo.module.css";
import logo from "../../../images/laptop.svg";

const Logo = () => {
  return (
    <div className={classes.Logo}>
      <img src={logo} alt="Logo of the Pizza project" />
      <div>Online Supermarket</div>
    </div>
  );
}

export default Logo;