import Head from "next/head";
import Navbar from "./Navbar";

const Layout = (props) => {
  return (
    <>
      <Head>
        <title>To Do App</title>
        <link
          rel="stylesheet"
          href="https://bootswatch.com/4/cerulean/bootstrap.min.css"
        />
      </Head>
      <style jsx>
        {`
          .main {
            height: 100vh;
            background: #060b1e;
          }
          .container {
            padding-top: 10px;
            min-height: 65vh;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
          }
        `}
      </style>
      {/* <Navbar /> */}
      <div className="main">
        <div className="container">
          <h3 className="item">To Do App</h3>
          <h6 className="item">by Jericho Aldemo</h6>
          {props.children}
        </div>
      </div>
    </>
  );
};

export default Layout;
