import { useMutation, useQuery } from "react-query";
import { useApiClient } from "../api-instance";
import { Candidate } from "../definitions";

export function useGetCandidates(filter: string) {
  const client = useApiClient();

  return useQuery({
    queryKey: ["candidates", filter],
    queryFn: async ({ queryKey }): Promise<Candidate[]> => {
      const [_key, filterParams] = queryKey;
      const params: any = {};

      if (filterParams !== "") {
        params.skills = filterParams;
      }

      const response = await client.get(`${_key}`, { params });
      return response.data;
    },
    onError: () => {},
  });
}

export function useCreateCandidate() {
  const client = useApiClient();

  return useMutation({
    mutationFn: async (data: Omit<Candidate, "id">) => {
      const response = await client.post(
        "http://localhost:8000/candidates",
        data
      );

      return response.data;
    },
    onSuccess: () => {
      console.log("Dados salvos com sucesso!");
    },
    onError: () => {
      console.log("Ocorreu um erro.");
    },
  });
}
