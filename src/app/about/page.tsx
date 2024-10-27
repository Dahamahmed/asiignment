import Header from "@/components/Header";
import { encode } from "punycode";

export default function about(){
    return(
        <div>
            <Header />
           <h1 style={{color:"WindowFrame",backgroundColor:"green", padding:"70px",textAlign:"center",textDecoration:"underline"}}> About me</h1>
        </div>
    )
}