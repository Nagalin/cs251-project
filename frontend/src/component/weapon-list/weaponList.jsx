import React from "react";
import style from "./weaponList.module.css";

export default function weaponList() {
  return (
    <div className={style.wrapper}>
      <div className={style.header}>
        <h1>Available weapon</h1>
      </div>

      <div className={style.table_wrapper}>
        <div className={style.row}>
          <div className={style.name}>
            <h2>Weapon name</h2>
          </div>
          <div className={style.type}><h2>Weapon type</h2></div>
          <div className={style.armory}><h2>Armory name</h2></div>
          <div className={style.available}><h2>Available</h2></div>
          <div className={style.count}><h2>Amount</h2></div>
          <div></div>
          
        </div>

        <div className={style.row}>
          <div className={style.name}>
            <h3>fn five-seven</h3>
          </div>
          <div className={style.type}><p>semi-automatic pistol</p></div>
          <div className={style.armory}><p>armory</p></div>
          <div className={style.available}><p>655</p></div>
          <div className={style.count}>
            <div className={style.amout_wrapper}>
              <div className={style.del}><button><h3>-</h3></button></div>
              <div className={style.amount_display}><p>56</p></div>
              <div className={style.add}><button><h3>+</h3></button></div>
            </div>
          </div>
          <div className={style.button}>
            <button>
              <h3>add to list</h3>
            </button>
            </div>
        </div> 
        <hr className={style.hr}/>

        <div className={style.row}>
          <div className={style.name}>
            <h3>fn five-seven</h3>
          </div>
          <div className={style.type}><p>semi-automatic pistol</p></div>
          <div className={style.armory}><p>armory</p></div>
          <div className={style.available}><p>655</p></div>
          <div className={style.count}>
            <div className={style.amout_wrapper}>
              <div className={style.del}><button><h3>-</h3></button></div>
              <div className={style.amount_display}><p>56</p></div>
              <div className={style.add}><button><h3>+</h3></button></div>
            </div>
          </div>
          <div className={style.button}>
            <button>
              <h3>add to list</h3>
            </button>
            </div>
        </div> <hr className={style.hr}/>

        <div className={style.row}>
          <div className={style.name}>
            <h3>fn five-seven</h3>
          </div>
          <div className={style.type}><p>semi-automatic pistol</p></div>
          <div className={style.armory}><p>armory</p></div>
          <div className={style.available}><p>655</p></div>
          <div className={style.count}>
            <div className={style.amout_wrapper}>
              <div className={style.del}><button><h3>-</h3></button></div>
              <div className={style.amount_display}><p>56</p></div>
              <div className={style.add}><button><h3>+</h3></button></div>
            </div>
          </div>
          <div className={style.button}>
            <button>
              <h3>add to list</h3>
            </button>
            </div>
        </div> 
        <hr className={style.hr}/>

      </div>
    </div>
  );
}
