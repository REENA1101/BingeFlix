import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { fetchDataByGenre } from "../store";



export default function SelectGenre({ genres, type }) {
  const dispatch = useDispatch();

  const handleGenreChange = (e) => {
    dispatch(fetchDataByGenre({ genre: e.target.value, type }));
  };

  return (
    <Select className="flex" onChange={handleGenreChange}>
      {genres.map((genre) => (
        <option value={genre.id} key={genre.id}>
          {genre.name}
        </option>
      ))}
    </Select>
  );
}

const Select = styled.select`
  margin-left: 2.4rem;
  cursor: pointer;
  font-size: 1.2rem;
  background-color: rgba(0, 0, 0, 0.4);
  color: white;
  padding:0.3rem;
`
