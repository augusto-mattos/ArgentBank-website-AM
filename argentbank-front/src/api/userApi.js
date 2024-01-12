export const fetchLoginUser = async (userCredentials) => {
  try {
    const request = await fetch("http://localhost:3001/api/v1/user/login", {
      method: "POST",
      body: JSON.stringify(userCredentials),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!request.ok) {
      throw new Error("Error " + request.status);
    }

    const response = await request.json();
    return response;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const fetchUserProfile = async () => {
  const token = sessionStorage.getItem("token");
  try {
    const response = await fetch("http://localhost:3001/api/v1/user/profile", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error("Invalid fields");
    }

    const userProfile = await response.json();
    return userProfile.body;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const fetchNewUsername = async () => {
  const token = sessionStorage.getItem("token");
  const NewUserName = sessionStorage.getItem("username");
  try {
    const request = await fetch("http://localhost:3001/api/v1/user/profile", {
      method: "PUT",
      body: JSON.stringify({ userName: NewUserName }),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (!request.ok) {
      throw new Error("Error " + request.status);
    }

    const response = await request.json();
    console.log(response)
    return response;
  } catch (error) {
    throw new Error(error.message);
  }
};
