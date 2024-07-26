import { getUser } from "../../apis/userApi";
import { ButtonCheck } from "../../components/Layouts/ButtonCheck";

export default async function Home() {
  const user = await getUser();
  return (
    <main className="flex  flex-col items-center justify-between p-24">
      <p className="mb-4">Welcome to Ebuddy Technical test.</p>
      <ButtonCheck user={user} />
    </main>
  );
}
