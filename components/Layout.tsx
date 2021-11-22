import React, {useState, useEffect, RefObject, Suspense, lazy} from 'react'
import Header from './Header/Header'
import Meta from './Meta'
import AOS from "aos";
import { HeaderData, HeaderButtonData } from "../data/HeaderData";
import Dropdown from './Dropdown/Dropdown';
import Footer from "./Footer/Footer";



const Layout:React.FC = ({children}) => { 
  const [isOpen, setIsOpen] = useState(false);

  const toggle = (element: RefObject<HTMLDivElement>) => {
    if (isOpen && element.current !== null) {
      element.current.classList.add("fadeout");
      setTimeout(() => {
        element.current!.classList.add("fadeout");
        setIsOpen(!isOpen);
      }, 200);
    } else {
      setIsOpen(!isOpen);
    }
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <div>
      {/* <Suspense
        fallback={
          <div className="loader">
            <svg className="loading" viewBox="25 25 50 50">
              <circle cx="50" cy="50" r="20"></circle>
            </svg>
          </div>
        }
      > */}
      <Meta /> 
      <Header
          toggle={toggle}
          HeaderButtonData={HeaderButtonData}
          HeaderData={HeaderData}
        />
        {isOpen && (
          <Dropdown
            toggle={toggle}
            HeaderButtonData={HeaderButtonData}
            HeaderData={HeaderData}
          />
        )}
      {children}
      <Footer HeaderData={HeaderData} />
      {/* </Suspense> */}
    </div> 
  )
}

export default Layout