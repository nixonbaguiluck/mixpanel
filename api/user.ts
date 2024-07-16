import { useQuery } from "@tanstack/react-query";
import axios from "axios";

import { User } from "@/types/User";

const baseURL = `${process.env.NEXT_PUBLIC_BASE_API_URL}/users`;

const user = axios.create({ baseURL });

export async function getUserData() {
  const { data } = await user.get<{ users: User[] }>("");
  return data.users;
}

// == Get all users == //
export async function requestUsers(query: any) {
  const baseParams = `?query=${query}`;
  const { data } = await axios.get(baseParams, {
    baseURL,
  });

  return data;
}

export function useUsers(query: any) {
  return useQuery<User[]>({
    queryKey: [query],
    queryFn: () => requestUsers(query),
  });
}
