// import logo from './logo.svg';
// import ExpenseForm from './components/ExpenseForm/ExpenseForm';
import React, { useState } from 'react';
import UserForm from './components/SharpenerReactFirstProject/UserForm';
import UserList from './components/SharpenerReactFirstProject/UserList';
// import './App.css';
// import Expenses from './components/Expenses/Expenses';
// import NewExpense from './components/ExpenseForm/NewExpense';
// import UserForm from './components/SharpenerReactFirstProject/UserForm';

//   const DUMMY_EXPENSES = [
//     {
//       id: 'e1',
//       title: 'Toilet Paper',
//       amount: 94.12,
//       date: new Date(2020, 7, 14),
//       location:'India'
//     },
//     { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12),location:'USA' },
//     {
//       id: 'e3',
//       title: 'Car Insurance',
//       amount: 294.67,
//       date: new Date(2021, 2, 28),
//       location:'UK'
//     },
//     {
//       id: 'e4',
//       title: 'New Desk (Wooden)',
//       amount: 450,
//       date: new Date(2021, 5, 12),
//       location:'London'
//     },
//   ];
  
  const App=() =>{
    const[usersList,setUsersList]=useState([]);

    const addUserHandler=(uName,uAge)=>{
      setUsersList((prevUsersList)=>{
        return [...prevUsersList,{name:uName,age:uAge,id:Math.random().toString()}];
      });
    };
//     const[expenses,setExpenses]=useState(DUMMY_EXPENSES);

//   const addExpenseHandler=(expense)=>{
// // console.log("In App.js");
// // console.log(expense);
// setExpenses(prevExpenses=>{
//   return [expense,...prevExpenses]
// });
//   };
    return (
      <div>
      {/* <h2>Let's get started!</h2> */}
      {/* <ExpenseForm onSaveExpenseData/> */}
      {/* <NewExpense onAddExpense={addExpenseHandler}/>
        <Expenses items={expenses}/> */}
       <UserForm onSaveUser={addUserHandler}/>
       <UserList users={usersList}/>
      </div>
     );
}

export default App;
