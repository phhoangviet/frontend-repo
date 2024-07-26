export async function getUser(): Promise<
  { code?: any; error: any; data: any } | undefined
> {
  try {
    const res = await fetch(`${process.env?.API_HOST}/users/me`, {
      credentials: "include",
    });
    return await res.json();
  } catch (error) {
    return undefined;
  }
}

export async function handleLogin(
  username: string,
  password: string
): Promise<{ code?: any; error: any; data: any } | undefined> {
  try {
    const res = await fetch(`${process.env?.API_HOST}/users/sign-in`, {
      method: "POST",

      body: JSON.stringify({
        username,
        password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    return await res.json();
  } catch (error) {
    return undefined;
  }
}
