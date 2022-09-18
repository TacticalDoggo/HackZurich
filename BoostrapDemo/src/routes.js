import Dashboard from "views/Dashboard.js";
import TableList from "views/TableList.js";
import OrdersList from "views/OrdersList";
import RisksList from "views/RisksList";
import Icons from "views/Icons.js";
import Maps from "views/Maps.js";
import Notifications from "views/Notifications.js";
import ShipmentsMap from "views/ShipmentsMap";
import NewShipmentForm from "views/NewShipmentForm";

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
    name: "Find My Shipment",
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
