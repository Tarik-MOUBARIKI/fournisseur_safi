import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import PrivateRoute from '../auth/PrivateRoute';

import PrivateRouteCustomer from '../auth/PrivateRouteClient';

// import Components SuperAdmin
import LoginSuperAdmin from '../SuperAdmin/login'
import DashboardSuperAdmin from '../SuperAdmin/Dashbord'
import ConfirmFournisseur from '../SuperAdmin/ConfirmFournisseur'
import AddFournisseur from '../SuperAdmin/AddFournisseur'
import Fournisseur from '../SuperAdmin/Fournisseur'
import Category from '../SuperAdmin/Category';
import AddCategory from '../SuperAdmin/AddCategory';
import EditCategory from '../SuperAdmin/EditCategory';

// import Components Four,isseur
import DashboardFournisseur from '../Fournisseur/DashboardFournisseur'
import AddProduct from '../Fournisseur/AddProduct'
import ListProducts from '../Fournisseur/ListProducts'
import loginFournisseur from '../Fournisseur/LoginFournisseur'
import MyAccount from '../Fournisseur/MyAccount';
import ChangePassword from '../Fournisseur/ChangePassword';
import ListProductsPromo from '../Fournisseur/ListProductsPromo';
import AddProductPromo from '../Fournisseur/AddProductPromo';
import EditProductPromo from '../Fournisseur/EdiProductPromo';
// import Components Home & Products
import Home from '../Home/Home'
import Product from '../Home/Product'
import Compte from '../Home/Compte'
import ChoiceLogin from '../Home/ChoiceLogin'
import DetailsProduct from '../Home/DetailsProduct'
import EditProduct from '../Fournisseur/EditProduct';
import Promotion from '../Home/Promotion';
// import Components Customer
import SignInCustomer from '../Epicier/SignInCustomer'
import LoginCustomer from '../Epicier/LoginCustomer'
import ValidateAccount from '../Epicier/ValidateAccount'
import AcceuilCustomer from '../Epicier/AcceuilCustomer'
import SearchProductByCategory from '../Home/SearchProductByCategory';







function Routes () { 
    return (
        <BrowserRouter>
        <Switch>

     {/* Routes SuperAdmin  */}

            <Route path="/login" exact component={LoginSuperAdmin} />
            <Route  path="/superAdmin" exact component={DashboardSuperAdmin} />
            <Route  path="/confirmFournisseur" exact component={ConfirmFournisseur} />
            <PrivateRoute  path="/addFournisseur" exact component={AddFournisseur} />
            <Route  path="/fournisseur" exact component={Fournisseur} />
            <Route  path="/category" exact component={Category} />
            <Route  path="/addCategory" exact component={AddCategory} />
            <Route  path="/editCategory" exact component={EditCategory} />


     {/* Routes Fournisseur  */}

            <Route path="/loginFournisseur" exact component={loginFournisseur} />            
            <PrivateRoute  path="/dashboardFournisseur" exact component={DashboardFournisseur} />
            <PrivateRoute  path="/addProduct" exact component={AddProduct} />
            <PrivateRoute  path="/addProductPromo" exact component={AddProductPromo} />
            <PrivateRoute  path="/listProduct" exact component={ListProducts} />
            <PrivateRoute  path="/listProductPromo" exact component={ListProductsPromo} />
            <PrivateRoute  path="/editProduct" exact component={EditProduct}/>
            <PrivateRoute  path="/editProductPromo" exact component={EditProductPromo}/>
            <PrivateRoute  path="/myAccount" exact component={MyAccount}/>
            <PrivateRoute  path="/changePassword" exact component={ChangePassword}/>
    {/* Routes Home & Products  */} 

            <Route path="/" exact component={Home} />
            <Route path="/productByCategory/:category" exact component={SearchProductByCategory} />
            <Route path="/compte" exact component={Compte} />
            <Route path="/choiceLogin" exact component={ChoiceLogin} />           
            <Route  path="/detailsProduct" exact component={DetailsProduct} />
            <Route  path="/product" exact component={Product} />
            <Route  path="/promotion" exact component={Promotion} />
    {/* Routes Customer  */}

            <Route path="/signInCustomer" exact component={SignInCustomer} />
            <Route path="/loginCustomer" exact component={LoginCustomer} />            
            <Route path="/Customer/activateCompte/:token" exact component={ValidateAccount} /> 
            <PrivateRouteCustomer path="/acceuil" exact component={AcceuilCustomer} />   

        </Switch>
        </BrowserRouter>
    );
 }

 export default Routes;