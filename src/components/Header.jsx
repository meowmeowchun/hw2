function Header() {
  return (
    <header id="site-header">
        <div className="header-flex">
          <div className="left-side-main">
            <div className="artist-logo">
              <a className="logo-home-btn" href="./index.html">
                <picture className="header-logo-desktop">
                  <img className="logo-img" src="./img/Band Logo.png" />
                </picture>
              </a>
            </div>
          </div>
          <div className="right-side-main">
            <a className="main-btn" href="#music">
              Music
            </a>
            <a
              className="main-btn"
              href="https://www.youtube.com/@NesiohelixSwinhoeiBand"
              rel="noopener noreferrer"
              target="_blank">
              Video
            </a>
            <a className="main-btn" href="#merch">
              Merch
            </a>
            <a className="main-btn" href="#mailing-list">
              Mailing List
            </a>
          </div>
        </div>
      </header>
  );
} 

export default Header;