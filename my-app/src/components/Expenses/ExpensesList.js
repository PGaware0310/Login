import React from 'react';
import './ExpensesList.css';
import ExpenseItem from './ExpenseItem';
const ExpensesList=(props)=>{
   
    if(props.items.length===0){
    return <h2>Found no expenses.</h2>
   }
   return(
    <div className='expenses-list'>
    
    { props.items.map((ele)=>(
        
    <ExpenseItem 
    key={ele.id}
    title={ele.title}
     amount={ele.amount}  
     location={ele.location}
     date={ele.date}/>   
      
     )) }
    
    </div>
   );
    }
export default ExpensesList;