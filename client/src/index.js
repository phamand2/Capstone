import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/pages/App';
import ProductCategoryVegetable from './components/pages/ProductCategoryVegetable'
import ProductCategoryFruits from './components/pages/ProductCategoryFruits'
import ProductCategoryFlowers from './components/pages/ProductCategoryFlowers'
import ProductDetails from './components/pages/ProductDetails'
import MyCart from './components/pages/MyCart'
import ProductManage from '../src/components/pages/ProductManage'
import BaseLayout from './components/pages/BaseLayout';
import CustRegisterPage from './components/pages/CustRegisterPage'
import AddStaffPage from './components/pages/AddStaffPage'
import CustLoginPage from './components/pages/CustLoginPage'
import AdminLoginPage from './components/pages/AdminLoginPage'
import StaffLoginPage from './components/pages/StaffLoginPage'
import CustForgotPswdPage from './components/pages/CustForgotPswdPage'
import AdminForgotPswdPage from './components/pages/AdminForgotPswdPage'
import StaffForgotPswdPage from './components/pages/StaffForgotPswdPage'
import CustResetPswdPage from './components/pages/CustResetPswdPage.js'
import AdminResetPswdPage from './components/pages/AdminResetPswdPage.js'
import StaffResetPswdPage from './components/pages/StaffResetPswdPage.js'
import ProductUpdate from '../src/components/pages/UpdateProduct'
import reportWebVitals from './reportWebVitals';
import { createStore, applyMiddleware, compose } from 'redux'
import reducer from '../src/stores/reducer';
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { Router, Route, Switch } from 'react-router-dom'
import { createBrowserHistory } from 'history'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(
  applyMiddleware(thunk) 
))

const history = createBrowserHistory()


ReactDOM.render(
  <React.StrictMode>
    <Provider store = {store}>
      <Router history = {history}>
        <BaseLayout>
          <Switch>
            <Route exact path = "/product-manage" component = {ProductManage} />
            <Route exact path = "/update-product/:_id" component = {ProductUpdate} />
            <Route exact path = "/" component = {App} />
            <Route exact path = "/vegetables" component = {ProductCategoryVegetable} />
            <Route exact path = "/fruits" component = {ProductCategoryFruits} />
            <Route exact path = "/flowers" component = {ProductCategoryFlowers} />
            <Route exact path = "/product-detail/:title/:Uniqueidzitem" component = {ProductDetails} />
            <Route exact path = "/mycart" component = {MyCart} />
            <Route exact path = '/auth/customer-register' component = {CustRegisterPage}/>
            <Route exact path = '/admin/add-staff' component = {AddStaffPage}/>
            <Route exact path = '/auth/customer-login' component = {CustLoginPage}/>
            <Route exact path = '/auth/admin-login' component = {AdminLoginPage}/>
            <Route exact path = '/auth/staff-login' component = {StaffLoginPage}/>
            <Route exact path = '/auth/customer-forgot-password' component = {CustForgotPswdPage}/>
            <Route exact path = '/auth/admin-forgot-password' component = {AdminForgotPswdPage}/>
            <Route exact path = '/auth/staff-forgot-password' component = {StaffForgotPswdPage}/>
            <Route exact path = '/auth/customer-reset-password/:resetToken' component = {CustResetPswdPage}/>
            <Route exact path = '/auth/admin-reset-password/:resetToken' component = {AdminResetPswdPage}/>
            <Route exact path = '/auth/staff-reset-password/:resetToken' component = {StaffResetPswdPage}/>
          </Switch>
        </BaseLayout>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
