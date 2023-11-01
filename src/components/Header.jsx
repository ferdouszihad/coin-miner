import { NavLink } from "react-router-dom";
import { HiBars3BottomRight, HiBarsArrowUp } from "react-icons/hi2";
import { useState } from "react";
import useAuth from "../hooks/useAuth";

const Header = () => {
  const [isMenu, setIsMenu] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const { user, logOut } = useAuth();

  const menuLG = (
    <ul className="flex gap-5">
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      {!user && (
        <li>
          <NavLink onClick={() => setIsMenu(false)} to="/login">
            Login
          </NavLink>
        </li>
      )}

      {!user && (
        <li>
          <NavLink onClick={() => setIsMenu(false)} to="/register">
            Register
          </NavLink>
        </li>
      )}
      <li>
        <NavLink to="/secret">Secret</NavLink>
      </li>
    </ul>
  );
  const menuSM = (
    <ul className="flex menuSm flex-col  gap-2 w-full">
      <li>
        <NavLink onClick={() => setIsMenu(false)} to="/">
          Home
        </NavLink>
      </li>

      {!user && (
        <li>
          <NavLink onClick={() => setIsMenu(false)} to="/login">
            Login
          </NavLink>
        </li>
      )}

      {!user && (
        <li>
          <NavLink onClick={() => setIsMenu(false)} to="/register">
            Register
          </NavLink>
        </li>
      )}

      <li>
        <NavLink onClick={() => setIsMenu(false)} to="/secret">
          Secret
        </NavLink>
      </li>
    </ul>
  );

  const profile = (
    <div className="flex items-center gap-2">
      <div
        className="tooltip tooltip-left tooltip-accent"
        data-tip={`HEllo 😎${user?.displayName}`}
      >
        <img
          src={user?.photoURL}
          alt=""
          className=" max-w-[40px] border bg-opacity-75  border-green-400 p-[2px] rounded-full"
        />
      </div>

      <button onClick={logOut} className="btn btn-accent btn-sm text-white">
        Log Out
      </button>
    </div>
  );

  return (
    <div>
      <div className="w-11/12 relative mx-auto py-3 flex items-center justify-between">
        {/* logo  */}
        <div className="logo">
          <h2 className="text-xl font-bold flex">
            🎖️ <span className="hidden lg:block">LOGO HERE</span>
          </h2>
        </div>
        <div className=" hidden lg:block ">{menuLG}</div>
        {user && user?.email && <div className="">{profile}</div>}

        <div
          className={`lg:hidden z-50 animate__animated ${
            isMenu
              ? "animate__fadeInUp"
              : isClicked
              ? "animate__fadeOutUp"
              : "hidden"
          }   absolute w-11/12 top-full bg-white  bg-opacity-30 backdrop-blur`}
        >
          {menuSM}
        </div>

        <div className="lg:hidden">
          {isMenu ? (
            <HiBarsArrowUp
              onClick={() => setIsMenu(false)}
              className="text-3xl cursor-pointer"
            ></HiBarsArrowUp>
          ) : (
            <HiBars3BottomRight
              onClick={() => {
                setIsMenu(true);
                setIsClicked(true);
              }}
              className="text-3xl cursor-pointer"
            ></HiBars3BottomRight>
          )}
        </div>
      </div>
    </div>
  );
};
export default Header;
