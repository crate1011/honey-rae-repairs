import { useEffect, useState } from "react"
import "./Customers.css"

export const CustomerList = () => {

const [customers, setCustomers] = useState([])

useEffect(
    () => {
        fetch('http://localhost:8088/users?isStaff=false')
        .then(response => response.json())
        .then((customerArray) => {
            setCustomers(customerArray)
        })
    }
)

return <article className="customers">
{
    customers.map(customer => {
        return <section className="customer" key={`customer--${customer.id}`}>
            <div>Name: {customer.fullName}</div>
            <div>Email: {customer.email}</div>
        </section>
    })
}

</article>
}