function EditUsernameForm(props) {

  const handleChange = (event) => {
    sessionStorage.setItem("username", event.target.value)
  };

  return (
    <div className="header">
      <form className="change-username">
        <label for="usernameInfo">
          User name:
          <input
            type="text"
            name="usernameInfo"
            id="usernameInfo"
            placeholder={props.userInfos.userName}
            onChange={handleChange}
          />
        </label>
        <label for="firstnameInfo">
          First name:
          <input
            type="text"
            name="firstnameInfo"
            id="firstnameInfo"
            placeholder={props.userInfos.firstName}
            disabled
          />
        </label>
        <label for="lastnameInfo">
          Last name:
          <input
            type="text"
            name="lastnameInfo"
            id="lastnameInfo"
            placeholder={props.userInfos.lastName}
            disabled
          />
        </label>
      </form>
    </div>
  );
}

export default EditUsernameForm;
