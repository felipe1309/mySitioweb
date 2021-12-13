import Navbar from "../Navbar";
import Head from "next/head";
const index = ({ children }) => {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.15.4/css/all.css"
          integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm"
          crossOrigin="anonymous"
        />
      </Head>
      <Navbar></Navbar>
      {children}
      <style jsx global>{`
        * {
          font-size: 20px;
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: Noto Sans SC,sans-serif !important;
          color:white;
        }
        body {
            background-color: black;
        }
        ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        a {
          text-decoration: none;
        }
      `}</style>
    </>
  );
};

export default index;
