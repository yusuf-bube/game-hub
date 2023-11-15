import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

interface Props {
  handleSearchText: (searchText: string) => void;
}

const NavBar = ({ handleSearchText }: Props) => {
  return (
    <>
      <HStack padding="10px">
        <Image src={logo} boxSize={"60px"} />
        <SearchInput onSearchText={(text) => handleSearchText(text)} />
        <ColorModeSwitch />
      </HStack>
    </>
  );
};

export default NavBar;
