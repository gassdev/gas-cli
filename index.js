import mongoose from 'mongoose'
import Customer from './models/customer.js'

// connect to db
mongoose.connect('mongodb://localhost:27017/customercli')

// Add Customer
export const addCustomer = (customer) => {
  Customer.create(customer).then((customer) => {
    console.info('New Customer Added')
    mongoose.disconnect()
  })
}

// Find Customer
export const findCustomer = (name) => {
  const search = new RegExp(name, 'i')
  Customer.find({ $or: [{ firstname: search }, { lastname: search }] }).then(
    (customer) => {
      console.info(customer)
      console.info(`${customer.length} matches`)
      mongoose.disconnect()
    },
  )
}

// Update Customer
export const updateCustomer = (_id, customer) => {
  Customer.updateOne({ _id }, customer).then((customer) => {
    console.info('Customer has been updated')
    mongoose.disconnect()
  })
}

// Remove Customer
export const removeCustomer = (_id, customer) => {
  Customer.deleteOne({ _id }).then((customer) => {
    console.info('Customer has been deleted')
    mongoose.disconnect()
  })
}

// List Customers
export const listCustomers = () => {
  Customer.find().then((customers) => {
    console.info(customers)
    console.info(`${customers.length} customers`)
    mongoose.disconnect()
  })
}
