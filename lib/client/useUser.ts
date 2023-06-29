import { useRouter } from "next/router";
import { useEffect } from "react";
import useSWR from "swr";

export default function useUser() {
  const { data, error } = useSWR("/api/user/userInfo");
  const router = useRouter();
  useEffect(() => {
    if (!data) return;
    if (data && !data.success) {
      router.push("/log-in");
    }
  }, [data, router]);

  return { isLoading: !data && !error };
}
