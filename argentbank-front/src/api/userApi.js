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
    sessionStorage.setItem("token", response.body.token);

    return response;
  } catch (error) {
    throw new Error(error.message);
  }
};
