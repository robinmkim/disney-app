import { useLocation, useParams } from "react-router-dom";
import { fetchCharacterDetail } from "../api";
import { useQuery } from "@tanstack/react-query";
import { styled } from "styled-components";

function Character() {
  const { characterId } = useParams();
  const { state } = useLocation();
  interface ICharacterDetail {
    id: number;
    films: string[];
    name: string;
    imageUrl: string;
  }

  const Container = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
  `;

  const Title = styled.h1`
    font-size: 30px;
  `;

  const Img = styled.img`
    width: 200px;
    height: 200px;
    border-radius: 100px;
  `;

  const FilmContainer = styled.div`
    width: 450px;
    display: flex;
    flex-wrap: wrap;
  `;

  const Film = styled.div`
    background-color: white;
    color: black;
    padding: 10px 10px;
    margin: 5px;
    border-radius: 10px;
  `;

  const { isLoading: isDetailLoading, data: detailData } =
    useQuery<ICharacterDetail>(["detail", characterId], () =>
      fetchCharacterDetail(characterId!)
    );

  return (
    <Container>
      <Title>
        {state?.name
          ? `${state.name}'s Film`
          : isDetailLoading
          ? "Loading..."
          : `${detailData?.name}'s Film`}
      </Title>
      <Img src={`${state.img}`}></Img>
      <FilmContainer>
        {detailData?.films.map((film) => (
          <Film key={film}>{film}</Film>
        ))}
      </FilmContainer>
    </Container>
  );
}
export default Character;
