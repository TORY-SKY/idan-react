
function ListITems(){
   const customers = ['Tony', 'Ema', "Jenifer", 'Victory'];
  const  CustomerListItems = customers.map((customer, index)=>{
        console.log(customer);
        return <li key={index}>{customer }</li>
        
    })
    return <li>{CustomerListItems}</li>
}
export default ListITems;