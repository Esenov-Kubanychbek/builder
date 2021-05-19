import Button from "../../UI/Button/Button"
import classes from "./CheckoutForm.module.css"

const CheckoutForm = ({ cancelCallback, submitCallback }) => {
  return (
    <form className={classes.CheckoutForm} onSubmit={submitCallback}>
      <div>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" placeholder="Kubanychbek" required />
      </div>
      <div>
        <label htmlFor="address">Address</label>
        <input type="text" name="address" id="address" placeholder="Kyrgyztan" required />
      </div>
      <div>
        <label htmlFor="phone">Phone</label>
        <input type="text" name="phone" id="phone" placeholder="+996704447955" required pattern="0[0-9]{9}" />
      </div>
      <Button>Checkout</Button>
      <Button onClick={cancelCallback}>Cancel</Button>
    </form>
  );
}
 
export default CheckoutForm;