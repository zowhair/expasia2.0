import { Home, Profile, SignIn, SignUp } from "@/pages";
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
    path: "#",
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
    element: <SignIn />,
  },
  {
    icon: ArrowRightOnRectangleIcon,
    name: "Contact",
    path: "#",
    element: <SignIn />,
  },
  {
    icon: UserPlusIcon,
    name: "Login",
    path: "#",
    element: <SignUp />,
  },
  
];

export default routes;
