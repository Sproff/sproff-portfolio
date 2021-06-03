import {
	Box,
	Button,
	FormControl,
	FormLabel,
	Input,
	SimpleGrid,
	Textarea,
} from "@chakra-ui/react";
import React from "react";
import { MainLayout } from "../layouts/MainLayout";

export const Contact = () => {
	return (
		<Box w="100%">
			<MainLayout isMobile={true}>
				<SimpleGrid
					columns={1}
					spacing={4}
					padding={["1.5rem", "1.5rem", "1.5rem", "3rem"]}
					// mb={["4.3rem", "4.3rem", "4.3rem", "1rem"]}
				>
					<Box
						bgColor="#09090A"
						color="#fff"
						fontFamily="Lato"
						borderRadius="4px"
						width="100%"
						padding="1.5rem"
						marginBottom={["4.5rem", "4.3rem", "3rem", "3rem"]}
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
			</MainLayout>
		</Box>
	);
};
