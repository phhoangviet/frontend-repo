import { cookies } from "next/headers";
import { handleLogin } from "../../../../apis/userApi";

export async function POST(request: Request) {
  const { username, password } = await request.json();

  const res = await handleLogin(username, password);
  if (res?.code === 200) {
    cookies().set({ name: "Authorization", value: res?.data?.accessToken });
  }
  return Response.json({ ...res });
}
