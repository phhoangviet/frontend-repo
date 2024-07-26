import { cookies } from "next/headers";
import { getUser } from "../../../apis/userApi";

export async function GET(request: Request) {
  const res = await getUser();
  if (res?.code === 200) {
    cookies().set({ name: "Authorization", value: res?.data?.accessToken });
  }
  return Response.json({ ...res });
}
