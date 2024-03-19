import { useState } from "react";
import Link from "../Link/Link";
import { IoMdMenu } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";




const NavBar = () => {
    const [open , setOpen] = useState(false)
    const routes = [
        { 
          id: 1,
          name: "Home",
          path: "/home"
        },
        { 
          id: 2,
          name: "About",
          path: "/about"
        },
        { 
          id: 3,
          name: "Services",
          path: "/services"
        },
        { 
          id: 4,
          name: "Contact",
          path: "/contact"
        },
        { 
          id: 5,
          name: "NotFound",
          path: "/*"
        }
      ];
    return (
        <nav className="mx-10 mt-10">
            <div className="md:hidden" onClick={() => setOpen(!open)}>
                {
                    open === true ? <RxCross1 className="text-3xl"/> : <IoMdMenu className="text-3xl"/>
                }
            </div>

           <ul className={`md:flex justify-center ${open ? 'top-8' : '-top-60'  } absolute md:static duration-500 bg-blue-500 p-5`}>

                {
                
                    routes.map(route => <Link key={route.id} route={route}></Link>) 
                  
                 }
               
           </ul>

            
        </nav>
    );
};

export default NavBar;