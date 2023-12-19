import notFoundLogo from '../assets/notFoundPage-img.jpg';

const NotFoundPage = () => {
  return (
    <div className='notFound'>
      <h1>Page Not Found!</h1>

      <img src={notFoundLogo} alt='notFoundLogo' className='notFoundLogo'/>
    </div>
  )
}

export default NotFoundPage;
