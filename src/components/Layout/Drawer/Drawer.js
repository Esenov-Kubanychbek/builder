
import classes from "./Drawer.module.css";
import Logo from "../../Logo/Logo";
import Nav from "../../Nav/Nav";

const Drawer = (open) => {
    const drawerClasses = [classes.content];
    if(open){
        drawerClasses.push(classes.open);
    }
    else{
        drawerClasses.push(classes.close)
    }
    return (
        <div className={classes.Drawer}>
            <div className={drawerClasses.join(" ")}>
                <Logo/>
                <Nav/>
            </div>
        </div>
    );
}

export default Drawer;