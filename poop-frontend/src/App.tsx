import {
  Box,
  Button,
  Callout,
  Flex,
  Popover,
  Portal,
  Select,
  TextField,
} from "@radix-ui/themes";
import { CheckCircledIcon } from "@radix-ui/react-icons";
import { useState } from "react";
import Navbar from "./components/Navbar";
import { apiMethods, useGetBuildingsQuery } from "./redux/slices/api.slice";

function App() {
  return (
    <Flex direction={"column"}>
      <Navbar />
      <Box p={"2"} />
      <Flex justify={"between"} align={"center"} p={"2"}>
        <RoomSelection />
        <NewBuilding />
      </Flex>
    </Flex>
  );
}

const RoomSelection = () => {
  const { data: buildings } = useGetBuildingsQuery();
  
  return (
    <Select.Root defaultValue="Select a Building">
      <Select.Trigger />
      <Select.Content>
        {buildings?.map((building) => (
          <Select.Item key={building.id} value={building.id}>
            {building.name}
          </Select.Item>
        ))}
      </Select.Content>
    </Select.Root>
  );
};

const NewBuilding = () => {
  const [createBuilding, { isLoading, isSuccess, reset }] =
    apiMethods.createBuilding();

  const [{ name, address }, setBuilding] = useState({
    name: "",
    address: "",
  });

  const handleCreateBuilding = () => {
    createBuilding({ name, address });
    // Reset the form
    setBuilding({ name: "", address: "" });
    // Reset the success state
    setTimeout(() => reset(), 3000);
  };

  return (
    <Popover.Root>
      <Popover.Trigger>
        <Button aria-label="New Building">New Building</Button>
      </Popover.Trigger>
      <Portal>
        <Popover.Content minWidth={"300px"}>
          <Flex direction={"column"} gap={"2"}>
            <TextField.Root
              placeholder={"Building Name"}
              value={name}
              onChange={(e) => setBuilding({ name: e.target.value, address })}
            />
            <TextField.Root
              placeholder={"Building Address"}
              value={address}
              onChange={(e) => setBuilding({ name, address: e.target.value })}
            />
            <Button loading={isLoading} onClick={handleCreateBuilding}>
              Create
            </Button>

            {isSuccess && (
              <Callout.Root size={"1"}>
                <Callout.Icon>
                  <CheckCircledIcon />
                </Callout.Icon>
                <Callout.Text>Building created successfully!</Callout.Text>
              </Callout.Root>
            )}
          </Flex>
        </Popover.Content>
      </Portal>
    </Popover.Root>
  );
};

export default App;
