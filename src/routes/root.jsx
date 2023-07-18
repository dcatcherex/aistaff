import { Outlet } from "react-router-dom"

import Footer from "../components/Footer"

const root = () => {
  return (
    <div className="font-sans">
        <Outlet />
        <div>
          <Footer />
        </div>
    </div>
  )
}

export default root