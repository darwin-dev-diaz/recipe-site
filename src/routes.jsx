import App from "./App.jsx";
import HomeScreen from "./pages/HomeScreen.jsx";


const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <HomeScreen /> },
    //   { path: "store", element: <Store /> },
    //   { path: "product/:item", element: <ProductPage /> },
    ],
  },
];

export default routes;