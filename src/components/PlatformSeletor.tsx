import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "../hooks/usePlatforms";
import { Platform } from "../hooks/useGames";

interface Props {
  onSelectPlatform: (platform: Platform) => void;
  selectedPlatform: Platform | null;
}

const PlatformSeletor = ({ onSelectPlatform, selectedPlatform }: Props) => {
  const { data, error } = usePlatforms();

  if (error) return null;

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatform?.name || "Platform"}
      </MenuButton>
      <MenuList>
        {data.map((p) => {
          return (
            <MenuItem onClick={() => onSelectPlatform(p)} key={p.id}>
              {p.name}
            </MenuItem>
          );
        })}
      </MenuList>
    </Menu>
  );
};

export default PlatformSeletor;
