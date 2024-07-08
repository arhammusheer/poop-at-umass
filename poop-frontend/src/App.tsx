import { Flex, Select } from "@radix-ui/themes";
import { useGetBuildingsQuery } from "./redux/slices/api.slice";

function App() {
  const { data } = useGetBuildingsQuery();
  return (
    <Flex p="100px" align="center" justify="center">
      <Select.Root defaultValue="Select a building">
        <Select.Trigger />
        <Select.Content></Select.Content>
        {data?.map((building) => (
          <Select.Item key={building.id} value={building.id}>
            {building.name}
          </Select.Item>
        ))}
      </Select.Root>
    </Flex>
  );
}

export default App;
