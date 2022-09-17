/*!

=========================================================
* Light Bootstrap Dashboard React - v2.0.1
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Dashboard from "views/Dashboard.js";
import TableList from "views/TableList.js";
import OrdersList from "views/OrdersList";
import RisksList from "views/RisksList";

import Typography from "views/Typography.js";
import Icons from "views/Icons.js";
import Maps from "views/Maps.js";
import Notifications from "views/Notifications.js";
import ShipmentsMap from "views/ShipmentsMap";
import NewShipmentForm from "views/NewShipmentForm"

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "nc-icon nc-chart-pie-35",
    component: Dashboard,
    layout: "/admin"
  },
  {
    path: "/orders",
    name: "Order List",
    icon: "nc-icon nc-notes",
    component: OrdersList,
    layout: "/admin"
  },
  {
    path: "/risks",
    name: "Risks List",
    icon: "nc-icon nc-notes",
    component: RisksList,
    layout: "/admin"
  },
  {
    path: "/maps",
    name: "Ports Map",
    icon: "nc-icon nc-pin-3",
    component: Maps,
    layout: "/admin"
  },
  {
    path: "/shipments-maps",
    name: "Shipments Map",
    icon: "nc-icon nc-pin-3",
    component: ShipmentsMap,
    layout: "/admin"
  },
  {
    path: "/new-shipment",
    name: "New Shipment",
    icon: "nc-icon nc-spaceship",
    component: NewShipmentForm,
    layout: "/admin"
  },
  {
    path: "/notifications",
    name: "Notifications",
    icon: "nc-icon nc-bell-55",
    component: Notifications,
    layout: "/admin"
  }
];

export default dashboardRoutes;
