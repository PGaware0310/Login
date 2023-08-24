import React from 'react';
import ExpenseItem from './ExpenseItem';
const ExpensesList=(props)=>{
   
    if(props.items.length===0){
    return <h2>Found no expenses.</h2>
   }
   return(
    <ul>
    { props.items.map((ele)=>{
        return(
    <ExpenseItem 
    key={ele.id}
    title={ele.title}
     amount={ele.amount}  
     location={ele.location}
     date={ele.date}/>   
        );
     }) }
    </ul>
   );
    }
export default ExpensesList;