import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userInfos } from "../store/userProfileSlice";

function UserHeader() {

  const dispatch = useDispatch();
  const userName = useSelector((state) => state.userProfile.userName);

  useEffect(() => {
    dispatch(userInfos());
  }, [dispatch]);

  return (
    <div class="header">
      <h1>Welcome back<br />{userName}!</h1>
      <button class="edit-button">Edit Name</button>
    </div>
  );
}

export default UserHeader;
