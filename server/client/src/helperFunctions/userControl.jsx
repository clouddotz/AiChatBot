// Login

const userLogin = async (username, password) => {
  // Check for user input
  if (!username || !password) {
    throw Error("Provide all fields....");
  }

  // Send req to db
  const res = await fetch("/user/login", {
    method: "POST",
    headers: {
      "content-Type": "application/json",
    },
    body: JSON.stringify({ username, password }),
  });

  // Throw error if req wasn't successful
  if (!res.ok) {
    throw Error(res.error);
  }

  // Convert the JSON (response) to JSON string before sending to client
  const data = await res.json();

  if (!data.success) {
    throw Error(data.error);
  }

  return data;
};

export { userLogin };
