import { Home, Profile } from "./pages";
import {
  HomeIcon,
  UserCircleIcon,
  ArrowRightOnRectangleIcon,
  UserPlusIcon,
  DocumentTextIcon,
} from "@heroicons/react/24/solid";

export const routes = [
  {
    icon: HomeIcon,
    name: "Expedition",
    path: "/home",
    element: <Home />,
  },
  {
    icon: UserCircleIcon,
    name: "Trekking",
    path: "/trekking",
    element: <Profile />,
  },
  {
    icon: DocumentTextIcon,
    name: "Culture & Heritage",
    href: "#",
    target: "_blank",
    element: "",
  },
  {
    icon: DocumentTextIcon,
    name: "Safari",
    href: "#",
    target: "_blank",
    element: "",
  },
  {
    icon: ArrowRightOnRectangleIcon,
    name: "About Us",
    path: "#",
    element: "",
  },
  {
    icon: ArrowRightOnRectangleIcon,
    name: "Contact",
    path: "#",
    element: "",
  },
  {
    icon: UserPlusIcon,
    name: "Login",
    path: "#",
    element: "",
  },
  
];

export default routes;
