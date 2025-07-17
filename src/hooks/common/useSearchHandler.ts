import { useState } from "react";

interface UseSearchHandlerProps<T> {
  mutateFn: (keyword: string) => Promise<T[]>;
}

type UseSearchHandlerReturn<T> = {
  isSearching: boolean;
  searchResult: T[] | null;
  handleSearch: (keyword: string) => void;
  handleReset: () => void;
};

const useSearchHandler = <T>({
  mutateFn,
}: UseSearchHandlerProps<T>): UseSearchHandlerReturn<T> => {
  const [searchResult, setSearchResult] = useState<T[] | null>(null);
  const [isSearching, setIsSearching] = useState(false);

  const handleReset = () => {
    setSearchResult(null);
    setIsSearching(false);
  };

  const handleSearch = async (keyword: string) => {
    setIsSearching(true);
    try {
      const result = await mutateFn(keyword);
      setSearchResult(result);
    } catch (e) {
      setSearchResult(null);
    } finally {
    }
  };

  return {
    searchResult,
    isSearching,
    handleSearch,
    handleReset,
  };
};

export default useSearchHandler;
