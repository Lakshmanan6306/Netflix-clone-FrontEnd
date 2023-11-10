import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { fetchDataGenre } from "../store";

function SelectGenre({ genres, type }) {
  const dispatch = useDispatch();

  return (
    <Select
      className="flex"
      onChange={(e) => {
        dispatch(
          fetchDataGenre({
            genres,
            genre: e.target.value,
            type,
          })
        );
      }}
    >
      {genres.map((genre) => {
        return (
          <option value={genre.id} key={genre.id}>
            {genre.name}
          </option>
        );
      })}
    </Select>
  );
}

export default SelectGenre;

const Select = styled.select`
  margin-left: 3.5rem;
  padding:5px;
  cursor: pointer;
  border-radius:5px;
  font-size: 1.2rem;
  background-color: rgba(0, 0, 0, 0.6);
  color: white;
`;
