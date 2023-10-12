import React from 'react'
function ListITems(){
   const customers = ['Tony', 'Ema', "Jenifer", 'Victory'];
  const  CustomerListItems = customers.map((customer)=>{
        console.log(customer);
    })
}
export default ListITems;