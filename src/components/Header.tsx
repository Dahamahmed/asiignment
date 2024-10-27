
import Link from "next/link";
import Footer from "./Footer";

export default function Header(){
    return(
        
        <div>    
            
            <ul className="flex gap-10 bg-red-600" >
                <li><Link href="/home">Home</Link></li>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/contact">Contact</Link></li>
                <li><Link href="/service">Services</Link></li>
            </ul>
           
            <h1 style={{color:"white" ,backgroundColor:"black" ,padding:"70px" ,textAlign:"center",textDecoration:"underline"}} >Welcome to our page</h1>
         <p> Everyone wants to be successful and rich. I also dream of becoming successful in the field I choose although I am still indecisive about a careerpath I will choose. But i know Whatever I choose i will work hard,stay focused and make it big. I also dream of doing something for my country InshaAllah.</p>
        
            <Footer />
        </div>
    )
}