import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userInfos } from "../store/userProfileSlice";
import { fetchNewUsername } from "../api/userApi";
import EditUsernameForm from "./_editUsername";

function UserHeader() {
  const dispatch = useDispatch();
  const userProfile = useSelector((state) => state.userProfile);

  useEffect(() => {
    dispatch(userInfos());
  }, [dispatch]);

  const [changeUsername, setChangeUsername] = useState(false);

  const usernameEdition = () => {
    setChangeUsername(!changeUsername);
    sessionStorage.removeItem("username");
  };
  
  const saveNewUsername = async () => {
    try {
      await fetchNewUsername();
      window.location.reload();
    } catch (error) {
    console.error("Error saving new username:", error.message);
  }
};

  return (
    <div class="header">
      {changeUsername ? (
        <>
          <h2>Edit user info</h2>
          <EditUsernameForm userInfos={userProfile} />
          <div className="edit-form-buttons">
            <button onClick={saveNewUsername} type="submit">Save</button>
            <button onClick={usernameEdition}>Cancel</button>
          </div>
        </>
      ) : (
        <>
          <h1>Welcome back<br />{userProfile.userName}!</h1>
          <button class="edit-button" onClick={usernameEdition}>Edit Name</button>
        </>
      )}
    </div>
  );
}

export default UserHeader;
