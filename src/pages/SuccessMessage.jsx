import React from "react";
import { Box, Button, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const SuccessMessage = () => {
	return (
		<Box w="100%" height="100vh" overflow="hidden">
			<Box display="flex" justifyContent="center" alignItems="center" h="100vh">
				<Box background="rgba(24, 22, 22, 0.5)" padding={["1rem", "1rem", "3rem", "4rem"]}>
					<Box
						color="rgba(204, 204, 204, 0.5)"
						textAlign="center"
						padding={["0", "1rem 2rem", "1rem 6rem", "1rem 6rem"]}
					>
						<Text fontSize="1.2rem" fontWeight="600">
							Thanks for being awesome!
						</Text>
						<Text fontWeight="300">
							I will look over your message and get back to you soon. In the
							meantime, you can browse through the project section.
						</Text>
					</Box>
					<Box textAlign="center">
						<Link to="/projects">
							<Button
								type="submit"
								mt="2rem"
								mb={["0", "1rem", "1rem", "1rem"]}
								textDecoration="uppercase"
								variant="outline"
								borderColor="rgb(226 101 62)"
								borderRadius="4px"
								boxShadow="none"
								color="rgb(226 101 62)"
								fontSize="1rem"
								padding="0 2rem"
								_active={{
									backgroundColor: "rgb(226 101 62)",
								}}
								_focus={{
									boxShadow: "none",
								}}
								_hover={{
									borderColor: "rgb(226 101 62)",
									backgroundColor: "rgb(226 101 62)",
									boxShadow: "none",
									color: "#fff",
								}}
							>
								View Projects
							</Button>
						</Link>
					</Box>
				</Box>
			</Box>
		</Box>
	);
};
