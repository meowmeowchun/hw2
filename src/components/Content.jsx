function Content() {
    return (
        <main id="main-content">
        <section className="blank-section" />
        <section id="music">
          <div className="section-header">
            <h2>Discography</h2>
          </div>
          <div className="album-grid-layout">
            <div className="album">
              <img src="./img/Band Logo.png" />
              <a href="./player/index.html" traget="_blank">
                <h3>
                  我們什麼都不是
                  <br />
                  DEMO
                </h3>
              </a>
            </div>
            <div className="album">
              <p>coming soon...</p>
            </div>
            <div className="album">
              <p>comming soon...</p>
            </div>
          </div>
        </section>
        <section id="videos">
          <div className="section-header">
            <h2>Videos</h2>
          </div>
          <div className="videos-grid-layout">
            <div className="videos-img">
              <a
                href="https://www.youtube.com/watch?v=jgJ_wI-dKvg"
                rel="noopener noreferrer"
                target="_blank">
                <img src="./img/jgJ_wI-dKvg-HD.jpg" />
                <h3>
                  斯文豪氏大蝸牛 - 黃子交指交小朋友
                  <br />
                  (Live at 延聲音樂 2024)
                </h3>
              </a>
            </div>
            <div className="videos-img">
              <a
                href="https://www.youtube.com/watch?v=lpGPyieLGEg"
                rel="noopener noreferrer"
                target="_blank">
                <img src="./img/lpGPyieLGEg-HD.jpg" />
                <h3>
                  斯文豪氏大蝸牛 - 在哪裡
                  <br />
                  (Live at TCRC 2024)
                </h3>
              </a>
            </div>
            <div className="videos-img">
              <a
                href="https://youtu.be/WXXkAGMCWOQ?si=nYP74h19c4Iiaw6E"
                rel="noopener noreferrer"
                target="_blank">
                <img src="./img/WXXkAGMCWOQ-HD.jpg" />
                <h3>
                  斯文豪氏大蝸牛 - 18歲之後
                  <br />
                  (Live at TCRC 2024)
                </h3>
              </a>
            </div>
          </div>
        </section>
        <section id="merch">
          <div className="section-header">
            <h2>Merch</h2>
          </div>
          <div className="merch-grid-layout">
            <div className="merch">
              <img src="./merch/product.png" />
              <h3>
                斯文豪氏大蝸牛
                <br />
                桌曆
              </h3>
              <p>Calender</p>
              <p>$69NTD</p>
              <a className="main-btn" href="./merch/merch.html">
                Buy Now
              </a>
            </div>
            <div className="merch">
              <img src="./img/Band Logo.png" />
              <h3>
                我們什麼都不是
                <br />
                DEMO
              </h3>
              <p>CD</p>
              <p>$69</p>
              <a className="main-btn">Buy Now</a>
            </div>
            <div className="merch">
              <h4>Goodbye Space Cowboy...</h4>
            </div>
          </div>
        </section>
        <section id="mailing-list">
          <div className="section-header">
            <h2>Mailing List</h2>
          </div>
          <div className="mailing-list-content">
            <p>
              Emails will be sent by us (Nesiohelix Swinhoei). Get the latest
              update directly from us! You may unsubscribe at anytime you want.
            </p>
            <form action="/subscribe" method="post">
              <div className="input-group">
                <input
                  autoComplete="off"
                  className="input"
                  id="Email"
                  name="Email"
                  placeholder="nesiohelix@gmail.com"
                  type="email"
                />
                <input
                  className="button--submit"
                  type="submit"
                  value="Subscribe"
                />
              </div>
            </form>
          </div>
        </section>
      </main>
    );
  } 
  
  export default Content;