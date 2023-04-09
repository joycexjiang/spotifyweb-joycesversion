import Topnav from "../component/topnav/topnav";
import TitleM from "../component/text/title-m";
import SearchPageCard from "../component/cards/searchpage-card";
import PlaylistCardM from "../component/cards/playlist-card-m";
import { SEARCHCARDS } from "../data/index";

import styles from "./search.module.css";
import { PLAYLIST } from "../data/index";

function Search() {
  return (
    <div className={styles.SearchPage}>
      <Topnav search={true} />

      <div className={styles.Search}>
        <TitleM>All projects</TitleM>


          <div className={styles.SearchCardGrid}>
            {PLAYLIST.slice(3, 11).map((item) => {
              return <PlaylistCardM key={item.title} data={item} />;
            })}
          </div>


        <div className={styles.SearchCardGrid}>
          {SEARCHCARDS.map((card) => {
           ;
          })}
        </div>
      </div>
    </div>
  );
}

export default Search;
