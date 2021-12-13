import Link from 'next/link';
const index = () => {
  return (
    <>
      <nav>
          <ul>
              <li>
                <Link href="/">
                    <a><i className="far fa-home" />inicio</a>
                </Link>
              </li>
              <li>
                <Link href="/Yo">
                    <a>yo</a>
                </Link>
              </li>
              <li>
                <Link href="/Articulos">
                    <a onClick={null}>Articulos</a>
                </Link>
              </li>
          </ul>
      </nav>
      <style jsx>{`
        i {
          font-size: 1.5rem;
          color: black;
        } 
        nav {
          width: 100%;
          height: 5rem;
          display: flex;
          justify-content: space-around;
          align-items: center;
        }
        ul {

          display: flex;
          justify-content: space-around;
          align-items: center;
          width: 80%;
          height: 100%;
          background: black;
          box-shadow: 0px 0px 10px red;
        } 
        a {
          color: white;
          font-size: 1.5rem;
        }
        a:after{
          content: "";
          display: block;
          width: 0;
          height: 5px;
          background: darkblue;
          transition: width 0.3s;
          box-shadow: 0px 0px 20px darkblue;
        }
        a:hover:after{
          width: 100%;
        }
        `}</style>
    </>
  );
};

export default index;
