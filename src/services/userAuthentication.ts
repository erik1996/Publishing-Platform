export async function signIn(e: any, props: any) {
  e.preventDefault();

  const email = e.target.email.value;
  const password = e.target.password.value;

  const rawResponse = await fetch("http://localhost:3000/api/authenticate", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ email, password })
  });
  const response = await rawResponse.json();

  if (response.header.status === "success" && response.body.data._token) {
    localStorage.setItem('_token', response.body.data._token);
    return props.history.push("/editor");
  }

  return response;
}

export async function signUp(e: any, props: any) {
  e.preventDefault();

  const name = e.target.name.value;
  const email = e.target.email.value;
  const password = e.target.password.value;

  const rawResponse = await fetch("http://localhost:3000/api/register", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ name, email, password })
  });

  return await rawResponse.json();
}
