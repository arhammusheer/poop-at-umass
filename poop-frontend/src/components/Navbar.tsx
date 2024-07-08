import { Flex, Heading } from "@radix-ui/themes";

export default function Navbar() {
  return (
    <Flex
      justify={"between"}
      align={"center"}
      py={"4"}
			px={"4"}
			style={{
				borderBottom: "1px solid",
				borderColor: "gray",
			}}
    >
      <Heading size={"8"}>Poop at UMass</Heading>
			<Heading size={"4"}>Your bathroom locator</Heading>
    </Flex>
  );
}
