/*import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";*/

/*import type { Route } from "./+types/root";*/
import {FooterComponent} from "./Components/FooterComponent.tsx";
import {HeaderComponent} from "./Components/HeaderComponent.tsx";

export default function App() {
  return (
      <>
        <HeaderComponent />
        {/*<VerticalNavBar />*/}



        <FooterComponent />
      </>

  );
}
