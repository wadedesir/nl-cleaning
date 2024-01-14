import React from "react";
import logoWhite from "../../../assets/logo/white.png";
import logoBlack from "../../../assets/logo/black.png";

const NavbarHeaderTwo = ({ type, fixed, width, handleCollapse, collapse }) => (
  <div className="navbar-header">
    <button
      type="button"
      className="navbar-toggle"
      data-toggle="collapse"
      data-target="#navbar-menu"
      onClick={handleCollapse}
    >
      <i
        className={
          "eicon ion-android-" + (collapse === true ? "close" : "menu")
        }
      ></i>
    </button>
    <div className="logo" >
      <a href={process.env.PUBLIC_URL} className="navbar-brand" style={{
        padding: 0,
        padding: '5px',
        width: '100%',
        height: '100%',
      }}>
        {!fixed && width > 1023 ? (
          // <img
          //   className="logo logo-display"
          //   src={type === "dark" ? logoBlack : logoWhite}
          //   alt=""

          // />
          <div
            style={{
              backgroundImage: `url(${type === "dark" ? logoBlack : logoWhite})`,
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              height: '100%',
              width: '100%'
            }}
          ></div>
        ) : !fixed && width < 1023 && type !== "dark" ? (
          <div
            style={{
              backgroundImage: `url(${logoBlack})`,
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              height: '100%',
              width: '100%'
            }}
          >

          </div>
        ) : (
          // <img
          //   className="logo logo-scrolled"
          //   src={type === "dark" ? logoWhite : logoBlack}
          //   alt=""

          // />
          <div
            style={{
              backgroundImage: `url(${type === "dark" ? logoWhite : logoBlack})`,
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              height: '100%',
              width: '100%'
            }}
          ></div>
        )}
      </a>
    </div>
  </div>
);

export default NavbarHeaderTwo;
