import axios from "axios";

import { User } from "@/types/User";

const baseURL = `${process.env.NEXT_PUBLIC_BASE_API_URL}/users?limit=99`;

const user = axios.create({ baseURL });

export async function getUserData() {
  const { data } = await user.get<{ users: User[] }>("");
  return data.users;
}
