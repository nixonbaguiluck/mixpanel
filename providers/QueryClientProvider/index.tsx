import { QueryClient } from "react-query";
import { StatusCode } from "status-code-enum";

const MAX_RETRIES = 2;

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry(failureCount: number, err: any) {
        return (
          failureCount < MAX_RETRIES &&
          err.response?.status !== StatusCode.ClientErrorNotFound
        );
      },
    },
  },
});

export default queryClient;
