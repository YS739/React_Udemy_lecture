import "./ExpenseItem.css";

function ExpenseItem(props) {
  return (
    <div className="expense-item">
      <div>
        <div>Month</div>
        <div>Year</div>
        <div>Day</div>
      </div>
      <div className="expense-item_description">
        <h2>{props.name}</h2>
        <div className="expense-item_price">${props.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
