import { useQuery } from "react-query";

import { getUserData } from "@/api/user";

export default function useUsers() {
  return useQuery(["users"], getUserData, {
    initialData: [],
  });
}
