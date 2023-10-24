import Image from "next/image";
import Linkedin from '../../public/linkedin.png';
import Github from '../../public/github.png';

export default function Footer(){
    return (
      <footer className="container-fluid bg-dark text-white mt-auto">
        <div className="row-reverse text-end justify-content-between">
                <div className="text-center d-inline-flex p-2 bd-highlight">
                  <div className="d-inline-flex p-2 bd-highlight mr-10">
                    <p className="text-center ml-5 text-sm">Edinei Andarde, Dev JR</p>
                  </div>
                 
                <div className="d-inline-flex p-2 bd-highlight">
                    <a className="center" href="https://www.linkedin.com/in/edinei-andrade/" target="_blank" >
                    <Image className="img-2"
                        src={Linkedin}
                        alt="img"
                        height={30}
                        />
                    </a>
                </div>
                <div className="d-inline-flex p-2 bd-highlight">
                    <a className="center" href="https://github.com/EdineiAndrade" target="_blank" >
                    <Image className="img-3"
                        src={Github}
                        alt="img"
                        height={30}
                        />
                    </a>
                </div>
                
            </div>
        </div>
      </footer>
    );
  };
  
  