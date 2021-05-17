import classes from "./Logo.module.css";
import logo from "../../../images/laptop.svg";

const Logo = () => {
  return (
    <div className={classes.Logo}>
      <img src={logo} alt="Logotip" />
      <div>Online store</div>
    </div>
  );
}

export default Logo;