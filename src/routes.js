/*!

=========================================================
* Light Bootstrap Dashboard React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Dashboard from "views/Dashboard.jsx";
import UserProfile from "views/UserProfile.jsx";
import ManagementMenu from "views/ManagementMenu.jsx";
import UserPrevillage from "views/UserPrevillage.jsx";
// import TableList from "views/TableList.jsx";
// import Typography from "views/Typography.jsx";
// import Icons from "views/Icons.jsx";
// import Maps from "views/Maps.jsx";
// import Notifications from "views/Notifications.jsx";
// import Upgrade from "views/Upgrade.jsx";

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "pe-7s-graph",
    component: Dashboard,
    layout: "/admin"
  },
  {
    path: "/user-profile",
    name: "User Profile",
    icon: "pe-7s-user",
    component: UserProfile,
    layout: "/admin"
  },
  {
    path: "/management-menu",
    name: "Management Menu", 
    icon: "pe-7s-note2",
    component: ManagementMenu,
    layout: "/admin"
  },
  {
    path: "/user-previllage",
    name: "User Previllage",
    icon: "pe-7s-news-paper",
    component: UserPrevillage,
    layout: "/admin"
  }
];

export default dashboardRoutes;
