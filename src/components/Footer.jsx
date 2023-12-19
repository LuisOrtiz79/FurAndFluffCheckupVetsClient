import githubLogo from '../assets/githubLogo.png';

const Footer = () => {
  return (
    <div className="footer"> 
        <a href='https://github.com/LuisOrtiz79/FurAndFluffCheckupVetsClient.git'>
          <p><img src={githubLogo} alt='githubLogo' className='githubLogo' /> Client repository </p>
        </a>
        <a href='https://github.com/LuisOrtiz79/FurAndFluffCheckupVetsServer.git'>
          <p><img src={githubLogo} alt='githubLogo' className='githubLogo' /> Server repository </p>
        </a>
    </div>
  )
}

export default Footer;
