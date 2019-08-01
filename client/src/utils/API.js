import axios from "axios";
import { connectableObservableDescriptor } from "rxjs/internal/observable/ConnectableObservable";

export default {
  // APPOINTMENTS-------------------
  getAppointments: function() {
    return axios.get("/api/appointments");
  },
  // Gets the book with the given id
  getAppointment: function(id) {
    return axios.get("/api/appointments/" + id);
  },
  // Deletes the book with the given id
  deleteAppointment: function(id) {
    return axios.delete("/api/appointments/" + id);
  },
  // Saves a book to the database
  saveAppointment: function(appointmentsData) {
    console.log(appointmentsData);
    return axios.post("/api/appointments", appointmentsData);
  },
//   ______________________________________________________
// CLIENTS-----------------------------
  getClients: function() {
    return axios.get("/api/clients");
  },
  // Gets the book with the given id
  getClient: function(id) {
    return axios.get("/api/clients/" + id);
  },
  // Deletes the book with the given id
  deleteClient: function(id) {
    return axios.delete("/api/clients/" + id);
  },
  // Saves a book to the database
  saveClient: function(clientsData) {
    return axios.post("/api/clients", clientsData);
  },
//   _______________________________________________
// TASKS____________________________________
   getTasks: function() {
    return axios.get("/api/tasks");
  },
  // Gets the book with the given id
  getTask: function(id) {
    return axios.get("/api/tasks/" + id);
  },
  // Deletes the book with the given id
  deleteTask: function(id) {
    return axios.delete("/api/tasks/" + id);
  },
  // Saves a book to the database
  saveTask: function(tasksData) {
    return axios.post("/api/tasks", tasksData);
  },
//   ___________________________________________
// Payment________________________________________
  getPayments: function() {
    return axios.get("/api/payments");
  },
  // Gets the payments with the given id
  getPayment: function(id) {
    return axios.get("/api/payments/" + id);
  },
  // Deletes the payments with the given id
  deletePayment: function(id) {
    return axios.delete("/api/payments/" + id);
  },
  // Saves a payment to the database
  savePayment: function(paymentsData) {
    return axios.post("/api/payments", paymentsData);
  },
//   ___________________________________________
// USERS________________________________________
  getUsers: function() {
    return axios.get("/api/users");
  },
  // Gets the book with the given id
  getUser: function(id) {
    return axios.get("/api/users/" + id);
  },
  // Deletes the book with the given id
  deleteUser: function(id) {
    return axios.delete("/api/users/" + id);
  },
  // Saves a book to the database
  saveUser: function(usersData) {
    return axios.post("/api/users", usersData);
  },

  //Auth.Users
  
  signUp: function(body) {
    console.log(body);
    return axios.post('/api/auth/signup', body);
  },

  signIn: function(body) {
    return axios.post('/api/auth/signin', body);
  },

  getSignOut: function() {
    return axios.get('/api/signout')


  signOut: function() {
    return axios.post('/api/auth/signout', {});

  }
};
