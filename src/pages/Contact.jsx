import {
	Box,
	Button,
	FormControl,
	FormLabel,
	HStack,
	Input,
	SimpleGrid,
	Textarea,
} from "@chakra-ui/react";
import React from "react";
import { BackgroundImage } from "../components/common/BackgroundImage";
import { Main } from "../components/home/Main";
import { MobileNavBar } from "../layouts/MobileNavBar";
import { SideBar } from "../layouts/SideBar";

export const Contact = () => {
	return (
		<Box w="100%" h="100vh" bgColor="#000" overflow="hidden">
			<Box w="100%" position="relative">
				<BackgroundImage />
			</Box>

			<Box>
				<MobileNavBar />
			</Box>

			<HStack>
				<Box
					w={["0", "0", "0", "6%"]}
					borderRight={["none", "none", "none", "2px solid #555"]}
				>
					<SideBar display={["none", "none", "none", "flex"]} />
				</Box>
				<Box w="41%" display={["none", "none", "none", "block"]}>
					<Main />
				</Box>
				<Box
					w={["100%", "100%", "100%", "53%"]}
					h="100vh"
					overflowY="scroll"
					zIndex="2"
					padding={["1.5rem", "1.5rem", "1.5rem", "3rem"]}
				>
					<SimpleGrid columns={1} spacing={4}>
						<Box
							bgColor="#09090A"
							color="#fff"
							fontFamily="Lato"
							borderRadius="4px"
							width="100%"
							padding="1.5rem"
							marginBottom="3rem"
						>
							<FormControl id="name" isRequired>
								<Box>
									<Box>
										<FormLabel>Name</FormLabel>
										<Input
											type="text"
											id="name"
											aria-required="true"
											required
											color="rgba(255, 255, 255, 0.4"
											border="1px solid rgba(255, 255, 255, 0.4)"
											borderRadius="4px"
											borderColor="1px solid rgba(255, 255, 255, 0.4)"
											_hover={{
												borderColor: "rgba(255, 255, 255, 0.4)",
											}}
											_focus={{
												borderColor: "#EF3E07",
												boxShadow: "none",
											}}
										/>
									</Box>

									<Box>
										<FormLabel mt="2rem">Email address</FormLabel>
										<Input
											type="email"
											id="email"
											aria-required="true"
											required
											border="1px solid rgba(255, 255, 255, 0.4)"
											borderRadius="4px"
											borderColor="1px solid rgba(255, 255, 255, 0.4)"
											_hover={{
												borderColor: "rgba(255, 255, 255, 0.4)",
											}}
											_focus={{
												borderColor: "#EF3E07",
												boxShadow: "none",
											}}
										/>
									</Box>

									<Box>
										<FormLabel mt="2rem">Message</FormLabel>
										<Textarea
											border="1px solid rgba(255, 255, 255, 0.4)"
											borderRadius="4px"
											borderColor="1px solid rgba(255, 255, 255, 0.4)"
											rows="6"
											cols="50"
											resize="none"
											_hover={{
												borderColor: "rgba(255, 255, 255, 0.4)",
											}}
											_focus={{
												borderColor: "#EF3E07",
												boxShadow: "none",
											}}
										/>
									</Box>

									<Box>
										<Button
											mt="2rem"
											width="100%"
											textDecoration="uppercase"
											variant="outline"
											borderColor="rgba(255, 255, 255, 0.4)"
											borderRadius="4px"
											boxShadow="none"
											color="rgba(255, 255, 255, 0.6)"
											fontSize="1rem"
											padding="0 2rem"
											_active={{
												backgroundColor: "#EF3E07",
											}}
											_focus={{
												boxShadow: "none",
											}}
											_hover={{
												borderColor: "#EF3E07",
												backgroundColor: "#EF3E07",
												boxShadow: "none",
												color: "#fff",
											}}
										>
											Submit
										</Button>
									</Box>
								</Box>
							</FormControl>
						</Box>
					</SimpleGrid>
				</Box>
			</HStack>
		</Box>
	);
};
