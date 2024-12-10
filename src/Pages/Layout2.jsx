import Nav2 from "../Comonents/Nav2"
import Footer from "../Comonents/Footer"
export default function Layout({children}){
    return(
        <>
          <div className="flex flex-col min-h-screen">
        <Nav2/>
        <main className="flex-1">
            {children}
        </main>
        <Footer/>
        </div>
        </>
    )
}