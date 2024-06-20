import { Outlet } from "react-router-dom"
import Footer from "../Footer"
import Header from "../Header"

const Layout = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                <Header />
            </div>
            <div className="row">
                <Outlet />
            </div>
            <div className="row">
                <Footer />
            </div>

        </div>
    )
}

export default Layout;