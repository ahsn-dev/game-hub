import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/useGames";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
}

const App = () => {
  const [gameQurey, setGameQurey] = useState<GameQuery>({} as GameQuery);

  return (
    <Grid
      templateAreas={{
        base: `"nav"
               "main"`,
        lg: `"nav   nav"
             "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area={"nav"}>
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area={"aside"} paddingX={5}>
          <GenreList
            selectedGenre={gameQurey.genre}
            onSelectedGenre={(genre) => setGameQurey({ ...gameQurey, genre })}
          />
        </GridItem>
      </Show>
      <GridItem area={"main"}>
        <PlatformSelector
          onSelectPlatform={(platform) =>
            setGameQurey({ ...gameQurey, platform })
          }
          selectedPlatform={gameQurey.platform}
        />
        <GameGrid gameQurey={gameQurey} />
      </GridItem>
    </Grid>
  );
};

export default App;
