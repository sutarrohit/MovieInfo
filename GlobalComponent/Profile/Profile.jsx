import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { RxAvatar } from "react-icons/rx";
import {
  SlSocialInstagram,
  SlSocialLinkedin,
  SlSocialYoutube,
  SlSocialGithub,
} from "react-icons/sl";

// INTERNAL IMPORT
import Style from "./Profile.module.css";

const Profile = ({ setOpenLogin, setFormModal }) => {
  const { loginWithRedirect, logout, user, isAuthenticated, isLoading } =
    useAuth0();

  return (
    <div className={Style.Profile}>
      {!isAuthenticated ? (
        <div className={Style.profile_box}>
          <div className={Style.profile_box_avatar}>
            <RxAvatar className={Style.profile_box_avatar_RxAvatar} />
            <p>Glad to have you here, Having amazing exprience, Please Login</p>

            {/* Social Icons */}

            <p>
              <a href="#">
                <SlSocialInstagram />
              </a>

              <a href="#">
                <SlSocialGithub />
              </a>

              <a href="#">
                <SlSocialLinkedin />
              </a>

              <a href="#">
                <SlSocialYoutube />
              </a>
            </p>

            <p
              onClick={() => {
                setOpenLogin(false), setFormModal(true);
              }}
            >
              Contact Us
            </p>

            {/* Login Button */}
            <p
              className={Style.profile_box_btn}
              onClick={() => {
                loginWithRedirect();
              }}
            >
              Log In
            </p>
          </div>
        </div>
      ) : (
        <div className={Style.profile_box}>
          <div className={Style.profile_box_avatar}>
            <img src={user.picture} />
            <p>Welcome back {user.nickname}, Hope you have amazing exprience</p>
            <p>{user.nickname}</p>
            <p
              onClick={() => {
                setOpenLogin(false), setFormModal(true);
              }}
            >
              Contact Us
            </p>

            {/* Logout Button */}
            <p
              className={Style.profile_box_btn}
              onClick={() =>
                logout({ logoutParams: { returnTo: window.location.origin } })
              }
            >
              Log Out
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
