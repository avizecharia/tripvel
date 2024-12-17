import { RouterProvider } from "react-router-dom";
import routes from "./pages/routes";
import Navbar from "./pages/Navbar";
import ExpenseForm from "./pages/expenseForm/ExpenseForm";
import { useState } from "react";

export default function App() {
  return (<>
  <Navbar />
  <ExpenseForm />
  <RouterProvider router={routes}/>
  </>
  )
}
