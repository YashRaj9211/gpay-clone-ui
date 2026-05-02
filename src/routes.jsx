import { createBrowserRouter } from "react-router-dom"
import Home from "./pages/Home"
import TransactionsHistory from "./pages/TransactionsHistory"

const routes = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/transactions",
        element: <TransactionsHistory />
    }
])

export default routes