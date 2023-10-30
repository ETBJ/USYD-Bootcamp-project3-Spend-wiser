import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

const AddBudgetForm = () => {
  const { dispatch } = useContext(AppContext);

  const [budgetamount, setBudget] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();

    const budget = parseInt(budgetamount);
    console.log(budget);
    dispatch({
      type: "SET_BUDGET",
      payload: budget,
    });

    // setBudget("");
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="row">
        <div class="col-sm-6">
          <label for="budget">Budget</label>
          <input
            required="required"
            type="number"
            className="form-control"
            id="budget"
            value={budgetamount}
            onChange={(event) => setBudget(event.target.value)}
          />
        </div>
        <div class="col-md-offset-2 col-sm-4 mt-3">
          <div class="col-sm mt-3">
            <button type="submit" class="btn btn-primary">
              Save
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default AddBudgetForm;
