import useSWR from 'swr';

import fetcher from '@/lib/fetcher';

const useCurrentUser = () => {
  // the first time we hit the api and we get data
  // no matter where we use this hook, it is not going
  // to fetch data again, if the data already exist
  const { data, error, isLoading, mutate } = useSWR('/api/current', fetcher);

  return {
    data,
    error,
    isLoading,
    mutate,
  };
};

export default useCurrentUser;
