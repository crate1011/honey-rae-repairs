import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"


export const CustomerDetails = () => {

    const { customerId } = useParams()
    const [customer, updateCustomer] = useState()

    useEffect(
        () => {
            fetch(`http://localhost:8088/customers?_expand=user&userId=${customerId}`)
            .then(response => response.json())
            .then((data) => {
                const singleCustomer = data[0]
                updateCustomer(singleCustomer)
            })
        },
        [customerId]
    )

    return <section className="customer">
    <header className="customer__header">{customer?.user.fullName}</header>
    <div>Email: {customer?.user.email}</div>
    <div>Phone Number: {customer?.phoneNumber}</div>
    <div>Address: {customer?.address}</div>
</section>
}