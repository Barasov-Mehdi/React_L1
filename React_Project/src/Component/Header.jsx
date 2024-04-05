import 'bootstrap/dist/css/bootstrap.min.css';
function Header({add}) {
  return (
    <>
    <div className=".container-fluid d-flex justify-content-center overflow-x-hidden ">
    <header className='header d-flex justify-content-between bg-dark w-100  p-3 h-20'>
        <ul className='nav'>
            <a href="" className="text-light m-2 text-decoration-none">Home</a>
            <a href="" className="text-light m-2 text-decoration-none">Info</a>
            <a href="" className="text-light m-2 text-decoration-none">Price</a>
        </ul>
        <span className="text-light me-3 bg-info rounded-pill ps-3 pe-3 pt-2 pb-2 say">{add}</span>
      </header>
    </div>
    
    </>
  );
}

export default Header;





