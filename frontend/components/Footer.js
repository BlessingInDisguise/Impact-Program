import Link from "next/link";
const Footer = () => {
 return (
    
       <footer className=" z-50 footer  bg-bb2 text-white">
         <div className="footer__container pt-5 w-full h-64 flex justify-around ">
             <div className="footer__about mt-2 mx-2">
                   <h1 className="about font-semibold text-2xl">BID Impact Program</h1>
                   <p className="flex flex-wrap">Contribute to grow communities which are create impacts...</p>
             </div>
                  
             <div className="footer__links mt-3 ">
               <ul className="flex flex-col justify-center items-start gap-y-3 md:gap-y-5">
                   <li><Link href = "/about" >About</Link></li>
                   <li><Link href ="/details" >How it works</Link></li>
                   <li><Link href = '/projects' >Projects</Link></li>
                   <li><Link href = '/contact'>Contact</Link></li>
               </ul>
             </div>
         </div>
       </footer>
 );
};
export default Footer;