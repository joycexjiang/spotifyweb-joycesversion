import PrevPageBtn from "../buttons/prev-page-button";
import NextPageBtn from "../buttons/next-page-button";
import SearchBox from "./search-box";
import LibraryTabBtn from "./library-tab-btn";

import styles from "./topnav.module.css";

function Topnav({ search = false, tabButtons = false }) {
  return (
    <nav className={styles.Topnav}>
      <div>
        <span>
          <PrevPageBtn />
          <NextPageBtn />
          {search ? <SearchBox /> : ""}
          {tabButtons ? <LibraryTabBtn /> : ""}
        </span>
        <span>
          <a href="https://joycejiang.space">
            <button className={styles.ProfileBtn}>
              joyce is currently listening to music 🎧
            </button>
          </a>
        </span>
      </div>
    </nav>
  );
}

export default Topnav;
