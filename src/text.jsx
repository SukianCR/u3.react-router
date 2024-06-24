 <nav className="navbar navbar-default">
       <div className="container-fluid">
        <div className="navbar-header">
          <Link className="navbar-brand" to="/">React Router</Link>
       </div>
        <ul className="nav navbar-nav">
         <li className="active"><Link to="/blue"> Blue </Link></li>
         <li><Link to="/red" classNameName="hotpink">Red</Link></li>
      
    </ul>
  </div>
</nav>




<div id="navbar">
<Link to="/blue"> Blue </Link>
<Link to="/red" className="hotpink">
  {" "}
  Red{" "}
</Link>
</div>