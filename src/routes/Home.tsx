import { useQuery } from "@tanstack/react-query";
import { fetchCharacter } from "../api";
import { styled } from "styled-components";
import { Link } from "react-router-dom";

const Title = styled.h1`
  color: ${(props) => props.theme.accentColor};
  font-size: 48px;
`;

const Container = styled.div`
  padding: 0px 20px;
  margin: 0 auto;
`;

const Header = styled.header`
  height: 15vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CharacterContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

const Character = styled.div`
  padding: 20px 20px;
  background-color: white;
  color: ${(props) => props.theme.bgColor};
  width: 23%;
  border-radius: 15px;
  margin-bottom: 15px;
  a {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    transition: color 0.2s ease-in;
  }
  &:hover {
    background-color: black;
    transition: background-color 0.2s ease-in;
    a {
      color: ${(props) => props.theme.accentColor};
    }
  }
`;

const Loader = styled.span`
  text-align: center;
  display: block;
`;

const Img = styled.img`
  width: 130px;
  height: 130px;
  border-radius: 65px;
`;

interface ICharacter {
  id: number;
  name: string;
  imageUrl: string;
}

function Home() {
  const { isLoading, data } = useQuery<ICharacter[]>(
    ["allCharacters"],
    fetchCharacter
  );
  return (
    <Container>
      <Header>
        <Title>Disney Characters!</Title>
      </Header>
      {isLoading ? (
        <Loader>Loading...</Loader>
      ) : (
        <CharacterContainer>
          {data?.slice(0, 100).map((character) => (
            <Character key={character.id}>
              {" "}
              <Link
                to={`/character/${character.id}`}
                state={{ name: character.name, img: character.imageUrl }}
              >
                <Img src={`${character.imageUrl}`}></Img>
                {character.name}
              </Link>
            </Character>
          ))}
        </CharacterContainer>
      )}
    </Container>
  );
}
export default Home;
