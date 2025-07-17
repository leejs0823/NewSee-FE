import * as S from "./index.styles";
import SearchIcon from "@assets/icons/common/search.svg?react";
import useInput from "@/hooks/common/useInput";
import { useCallback } from "react";
import CircleDeleteIcon from "@assets/icons/common/circleDelete.svg?react";

interface SearchBarProps {
  onSearch: (keyword: string) => void;
  onReset?: () => void;
  placeholder?: string;
}

export const SearchBar = ({
  onSearch,
  onReset,
  placeholder = "검색어를 입력하세요",
}: SearchBarProps) => {
  const { value, onChange, reset } = useInput();

  const handleSearch = useCallback(() => {
    const trimmed = value.trim();
    if (!value.trim()) return;
    onSearch(trimmed);
  }, [value, reset]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const handleDelete = () => {
    const fakeEvent = {
      target: { value: "" },
    } as React.ChangeEvent<HTMLInputElement>;
    reset();
    onChange(fakeEvent);
    onReset?.();
  };

  return (
    <S.Container>
      <S.InputContainer>
        <SearchIcon onClick={handleSearch} style={{ cursor: "pointer" }} />
        <S.Input
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onKeyDown={handleKeyDown}
        />
      </S.InputContainer>
      <CircleDeleteIcon
        onClick={handleDelete}
        style={{ cursor: "pointer" }}
        width={20}
        height={20}
      />
    </S.Container>
  );
};
