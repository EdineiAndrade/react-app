import Image from "next/image";
import Link from "next/link";
import logo from '../../public/icons8-app-96.png'
export default function Navbar(){
    return (
       <>
        <nav className="container-fluid bg-dark text-white nav nav-pills nav-justified">
            <div className="row m-4">
                    <div className="col p-3">
                        <Image className="img-1"
                        src={logo}
                        alt="img"
                        height={60}
                        />
                    </div>      
            </div>
            <div className="col text-center p-3 align-sel-center m-4">
                
                <Link href={"/"} className="link">Número Aleatório</Link>

                <Link href={"/arrays"}className="link">Listas</Link>
               
                <Link href={"/service"}className="link">Leitor TXT</Link>
            </div>
        </nav>
       </>
    );
  };
  



