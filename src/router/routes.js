import DashboardLayout from "@/layout/dashboard/DashboardLayout.vue";
// GeneralViews
import NotFound from "@/pages/NotFoundPage.vue";

// Admin pages
import Dashboard from "@/pages/Dashboard.vue";
import UserProfile from "@/pages/UserProfile.vue";
import Typography from "@/pages/Typography.vue";
import Orders from "@/pages/Orders.vue";
import Products from "@/pages/Products.vue";
import Suppliers from "@/pages/Suppliers";
import ProductSuppliers from "@/pages/ProductSuppliers";
import NewSupplier from "@/pages/NewSupplier";
import NewProduct from "@/pages/NewProduct";
import NewOrder from "@/pages/NewOrder";
import DeleteOrder from "@/pages/DeleteOrder";
const routes = [
  {
    path: "/",
    component: DashboardLayout,
    redirect: "/dashboard",
    children: [
      {
        path: "dashboard",
        name: "dashboard",
        component: Dashboard
      },
      {
        path: "stats",
        name: "stats",
        component: UserProfile
      },
      {
        path: "typography",
        name: "typography",
        component: Typography
      },
      {
        path: "Products",
        name: "Products",
        component: Products
      },
      {
        path: "ProductSuppliers",
        name: "ProductSuppliers",
        component: ProductSuppliers
      },
       {
        path: "NewSupplier",
        name: "NewSupplier",
        component: NewSupplier
      },
       {
        path: "NewProduct",
        name: "NewProduct",
        component: NewProduct
      },
       {
        path: "DeleteOrder",
        name: "DeleteOrder",
        component: DeleteOrder
      },
       {
        path: "NewOrder",
        name: "NewOrder",
        component: NewOrder
      },
      {
        path: "Suppliers",
        name: "Suppliers",
        component: Suppliers
      },

      {
        path: "Orders",
        name: "Orders",
        component: Orders
      }
    ]
  },
  { path: "*", component: NotFound }
];

/**
 * Asynchronously load view (Webpack Lazy loading compatible)
 * The specified component must be inside the Views folder
 * @param  {string} name  the filename (basename) of the view to load.
function view(name) {
   var res= require('../components/Dashboard/Views/' + name + '.vue');
   return res;
};**/

export default routes;
