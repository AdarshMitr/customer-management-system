import React, { useState } from 'react'
import Swal from 'sweetalert2';

function Edit({ customers, selectedCustomer, setCustomers, setIsEditing }) {

    const id = selectedCustomer.id;

    const [firstName, setFirstName] = useState(selectedCustomer.firstName);
    const [lastName, setLastName] = useState(selectedCustomer.lastName);
    const [email, setEmail] = useState(selectedCustomer.email);
    const [purchase, setPurchase] = useState(selectedCustomer.purchase);
    const [date, setDate] = useState(selectedCustomer.date);

    const handleUpdate = e => {
        e.preventDefault();

        if (!firstName || !lastName || !email || !purchase || !date) {
            return Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: 'All fields are required.',
                showConfirmButton: true
            });
        }

        const customer = {
            id,
            firstName,
            lastName,
            email,
            purchase,
            date
        };

        for (let i = 0; i < customers.length; i++) {
            if (customers[i].id === id) {
                customers.splice(i, 1, customer);
                break;
            }
        }

        setCustomers(customers);
        setIsEditing(false);

        Swal.fire({
            icon: 'success',
            title: 'Updated!',
            text: `${customer.firstName} ${customer.lastName}'s data has been updated.`,
            showConfirmButton: false,
            timer: 1500
        });
    };

    return (
        <div className="small-container">
            <form onSubmit={handleUpdate}>
                <h1>Edit Customer</h1>
                <label htmlFor="firstName">First Name</label>
                <input
                    id="firstName"
                    type="text"
                    name="firstName"
                    value={firstName}
                    onChange={e => setFirstName(e.target.value)}
                />
                <label htmlFor="lastName">Last Name</label>
                <input
                    id="lastName"
                    type="text"
                    name="lastName"
                    value={lastName}
                    onChange={e => setLastName(e.target.value)}
                />
                <label htmlFor="email">Email</label>
                <input
                    id="email"
                    type="email"
                    name="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <label htmlFor="purchase">Purchase ($)</label>
                <input
                    id="purchase"
                    type="number"
                    name="purchase"
                    value={purchase}
                    onChange={e => setPurchase(e.target.value)}
                />
                <label htmlFor="date">Date</label>
                <input
                    id="date"
                    type="date"
                    name="date"
                    value={date}
                    onChange={e => setDate(e.target.value)}
                />
                <div style={{ marginTop: '30px' }}>
                    <input type="submit" value="Update" />
                    <input
                        style={{ marginLeft: '12px' }}
                        className="muted-button"
                        type="button"
                        value="Cancel"
                        onClick={() => setIsEditing(false)}
                    />
                </div>
            </form>
        </div>
    );
}

export default Edit