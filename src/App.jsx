import React from "react"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Faq from "./components/Faq"
import Download from "./components/Download"
import Watch from "./components/Watch"
import Location from "./components/Location"
import Profile from "./components/Profile"
function App() {
  

  return (
    <>
    {/* <div>
      <Header />
      <hr className="mb-1 bg-neutral-800" />
      <Watch />
      <hr className="mb-1 bg-neutral-800" />
      <Download />
      <hr className="mb-1 bg-neutral-800" />
      <Location />
      <hr className="mb-1 bg-neutral-800" />
      <Profile />
      <hr className="mb-1 bg-neutral-800" />
      <Faq />
      <hr className="mb-1 bg-neutral-800" />
      <Footer />
    </div> */}
    <div>
      <Header />
      <hr className="border-4 border-zinc-800" />
      <Watch />
      <hr className="border-4 border-zinc-800" />
      <Download />
      <hr className="border-4 border-zinc-800" />
      <Location />
      <hr className="border-4 border-zinc-800" />
      <Profile />
      <hr className="border-4 border-zinc-800" />
      <Faq />
      <hr className="border-4 border-zinc-800" />
      <Footer />
    </div>

    </>
  )
}

export default App
