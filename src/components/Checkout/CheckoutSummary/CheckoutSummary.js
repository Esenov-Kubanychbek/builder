import classes from "./CheckoutSummary.module.css";
import Preview from "../../Menu/Preview/Preview";
import Button from "../../UI/Button/Button";
import CheckoutForm from "./ChekoutForm/ChekoutForm";

const CheckoutSummary = ({ submitCallback, cancelCallback }) => {
  return (
    <div className={classes.CheckoutSummary}>
      <div>
        <Preview ingredients={{
          tomato: 5, 
          salami: 10,
          greenOlive: 50,
        }} price={150} />
      </div>
      <CheckoutForm
        submitCallback={submitCallback}
        cancelCallback={cancelCallback} />
    </div>
  );
}
 
export default CheckoutSummary;