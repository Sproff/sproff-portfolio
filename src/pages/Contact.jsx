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
import { Redirect } from "react-router-dom";

import { useForm, ValidationError } from "@formspree/react";
import { MainLayout } from "../layouts/MainLayout";

export const Contact = () => {
	const [submit, handleSubmit] = useForm("xyyljerr");

	if (submit.succeeded) {
		return <Redirect to="/success" />;
	}

	return (
		<Box w="100%">
			<MainLayout isMobile={true}>
				<SimpleGrid
					columns={1}
					spacing={4}
					padding={["1.5rem", "1.5rem", "1.5rem", "3rem"]}
				>
					<Box
						bgColor="rgba(24, 22, 22, 0.5)"
						color="rgba(255, 255, 255, 0.8)"
						fontFamily="Space Grotesk"
						borderRadius="4px"
						width="100%"
						padding="1.5rem"
						mb={["1.5rem", "1.5rem", "1.5rem", "1rem"]}
						mt={["3rem", "3rem", "3rem", "1rem"]}
					>
						<FormControl
							onSubmit={handleSubmit}
							id="form"
							isRequired
							method="post"
							as="form"
						>
							<Box>
								<FormLabel>Name</FormLabel>
								<Input
									type="name"
									id="name"
									name="name"
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
										borderColor: "rgb(226 101 62)",
										boxShadow: "none",
									}}
								/>
								<ValidationError
									prefix="Name"
									field="name"
									errors={submit.errors}
								/>
							</Box>

							<Box>
								<FormLabel mt="2rem">Email address</FormLabel>
								<Input
									type="email"
									id="email"
									name="_replyto"
									aria-required="true"
									required
									border="1px solid rgba(255, 255, 255, 0.4)"
									borderRadius="4px"
									borderColor="1px solid rgba(255, 255, 255, 0.4)"
									_hover={{
										borderColor: "rgba(255, 255, 255, 0.4)",
									}}
									_focus={{
										borderColor: "rgb(226 101 62)",
										boxShadow: "none",
									}}
								/>
								<ValidationError
									prefix="Email"
									field="email"
									errors={submit.errors}
								/>
							</Box>

							<Box>
								<FormLabel mt="2rem">Message</FormLabel>
								<Textarea
									id="message"
									name="message"
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
										borderColor: "rgb(226 101 62)",
										boxShadow: "none",
									}}
								/>
								<ValidationError
									prefix="Message"
									field="message"
									errors={submit.errors}
								/>
							</Box>

							<Box>
								<Button
									type="submit"
									disabled={submit.submitting}
									mt="2rem"
									width="100%"
									textDecoration="uppercase"
									variant="outline"
									borderColor="rgba(255, 255, 255, 0.4)"
									borderRadius="4px"
									boxShadow="none"
									color="rgba(255, 255, 255, 0.8)"
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
									Send
								</Button>
							</Box>
						</FormControl>
					</Box>
				</SimpleGrid>
			</MainLayout>
		</Box>
	);
};
