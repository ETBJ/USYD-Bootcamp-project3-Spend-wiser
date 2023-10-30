import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Budget from "../components/budget";
import Remaining from "../components/Remaining";
import ExpenseTotal from "../components/expenseTotal";
import ExpenseList from "../components/expenseList";
import AddExpenseForm from "../components/AddExpenseForm";
import AddBudgetForm from '../components/AddBudgetForm'
import { AppProvider } from "../context/AppContext";

const Expenses = () => {
  return (
    <AppProvider>
      <div className="container">
        <h2 className="mt-3">My Budget Planner</h2>
        <div className="row mt-3">
          <div className="col-sm">
            <Budget />
          </div>
          <div className="col-sm">
            <Remaining />
          </div>
          <div className="col-sm">
            <ExpenseTotal />
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-sm">
            <AddBudgetForm />
          </div>
        </div>
        <h3 className="mt-3">Expenditure</h3>
        <div className="row mt-3">
          <div className="col-sm">
            <ExpenseList />
          </div>
        </div>
        <h3 className="mt-3">Add Expense</h3>
        <div className="row mt-3">
          <div className="col-sm">
            <AddExpenseForm />
          </div>
        </div>
      </div>
    </AppProvider>
  );
};

export default Expenses;
