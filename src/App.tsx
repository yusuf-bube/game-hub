import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
      >
        <GridItem area="nav">
          <NavBar />
        </GridItem>
        <Show above="lg">
          <GridItem area={"aside"} bg={"blue"}>
            Item
          </GridItem>
        </Show>
        <GridItem area={"main"} bg={"red"}>
          Item
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
