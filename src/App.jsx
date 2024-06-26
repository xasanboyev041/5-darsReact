import React from "react";
import styles from "./App.module.css";
import banner from "./images/banner.png";
import sniper2 from "./images/sniper2.png";
import motorRace from "./images/motor_race.png";
import witcherHunt from "./images/witcher.png";
import pubgWar from "./images/pubg.png";
import ghostOfTsushima from "./images/ghost.png";
import needForSpeed from "./images/need-for-speed.png";
import theWitcherHunt from "./images/witcher.png";
import freeFire from "./images/freefire.png";
import profile from "./images/profile.png";
import needForSpeedAd from "./images/motor.png";

function App() {
  return (
    <div className={styles.container}>
      <div className={styles.leftSide}>
        <nav className={styles.nav}>
          <button className={styles.navButton}>Game</button>
          <button className={styles.navButton}>Live score</button>
          <button className={styles.navButton}>Statistics</button>
          <button className={styles.navButton}>Analytics</button>
          <button className={styles.navButton}>Forecasts</button>
        </nav>
        <div className={styles.banner}>
          <h1>The Forbidden Kingdom Adventure War</h1>
          <button className={styles.bannerButton}>More Details</button>
        </div>
        <section className={styles.section}>
          <h2>Most popular Game</h2>
          <div className={styles.gameList}>
            <div className={styles.gameCard}>
              <img src={sniper2} alt="Sniper 2" />
              <p>Sniper 2</p>
              <span>8.6 / 10 Action-Rpg</span>
            </div>
            <div className={styles.gameCard}>
              <img src={motorRace} alt="Motor Race" />
              <p>Motor Race</p>
              <span>8.6 / 10 Action-Rpg</span>
            </div>
            <div className={styles.gameCard}>
              <img src={witcherHunt} alt="Witcher Hunt" />
              <p>Witcher Hunt</p>
              <span>8.6 / 10 Action-Rpg</span>
            </div>
            <div className={styles.gameCard}>
              <img src={pubgWar} alt="Pabg War" />
              <p>Pabg War</p>
              <span>8.6 / 10 Action-Rpg</span>
            </div>
            <div className={styles.gameCard}>
              <img src={sniper2} alt="Sniper 2" />
              <p>Sniper 2</p>
              <span>8.6 / 10 Action-Rpg</span>
            </div>
          </div>
        </section>
        <section className={styles.section}>
          <h2>New Released Games</h2>
          <div className={styles.newGamesList}>
            <div className={styles.newGameCard}>
              <img src={ghostOfTsushima} alt="Ghost of Tsushima" />
              <p>Ghost of Tsushima</p>
              <span>4.5 ★</span>
            </div>
            <div className={styles.newGameCard}>
              <img src={needForSpeed} alt="Need for Speed" />
              <p>Need for Speed</p>
              <span>4.5 ★</span>
            </div>
            <div className={styles.newGameCard}>
              <img src={theWitcherHunt} alt="The Witcher Hunt" />
              <p>The Witcher Hunt</p>
              <span>4.5 ★</span>
            </div>
            <div className={styles.newGameCard}>
              <img src={freeFire} alt="Free Fire" />
              <p>Free Fire</p>
              <span>4.5 ★</span>
            </div>
          </div>
        </section>
      </div>
      <div className={styles.rightSide}>
        <div className={styles.profile}>
          <img src={profile} alt="Profile" />
          <p>William Jonson</p>
        </div>
        <section className={styles.liveGameSection}>
          <h2>Live Game</h2>
          <div className={styles.liveGameList}>
            <div className={styles.liveGameCard}>Pubg war</div>
            <div className={styles.liveGameCard}>Ghost of Tsushima</div>
            <div className={styles.liveGameCard}>FreeFire</div>
          </div>
        </section>
        <div className={styles.advert}>
          <img src={needForSpeedAd} alt="Need for Speed" />
          <button className={styles.advertButton}>Download Now</button>
        </div>
      </div>
    </div>
  );
}

export default App;
