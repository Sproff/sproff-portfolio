import { Box, Flex, Link, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
import { BiDownload } from "react-icons/bi";
import { MainLayout } from "../layouts/MainLayout";

export const Resume = () => {
	const data = [
		"React JS",
		"Next JS",
		"Redux",
		"JavaScript",
		"TypeScript",
		"HTML5",
		"CSS3",
		"Bootstrap",
		"Chakra-UI",
		"TailwindCSS",
		"Git",
		"GraphQL",
		"Responsive Design",
		"Performance Optimization",
		"Figma",
		"Agile Development",
	];

	const resumeLink =
		"https://drive.google.com/file/d/1cO-2NAFYTUEg8TKoy0i3uebV2puGDu0K/view?usp=sharing";

	return (
		<Box w="100%">
			<MainLayout isMobile={true}>
				<SimpleGrid
					columns={1}
					spacing={4}
					padding={["1.5rem", "1.5rem", "1.5rem", "3rem"]}
					mb={["1.5rem", "1.5rem", "1.5rem", "1rem"]}
					mt={["3rem", "3rem", "3rem", "1rem"]}
				>
					<Box
						bgColor="rgba(24, 22, 22, 0.5)"
						color="rgba(255, 255, 255, 0.8)"
						fontFamily="Space Grotesk"
						borderRadius="4px"
						width="100%"
						padding="1.5rem"
					>
						<Box>
							<Box display="flex" justifyContent="space-between">
								<Box>
									<Text
										color="rgba(255, 255, 255, 0.8)"
										fontWeight="900"
										fontSize="2rem"
									>
										Samuel Ogunleye
									</Text>
									<Text
										fontSize="1rem"
										lineHeight="1.8"
										color="gba(255, 255, 255, 0.8)"
										fontWeight="700"
									>
										Frontend Engineer
									</Text>
								</Box>
								<Box>
									<Link
										href={resumeLink}
										download="SAMUEL_OGUNLEYE_CV"
										style={{
											boxShadow: "none",
										}}
										isExternal
									>
										<Flex
											alignItems="center"
											color="gba(255, 255, 255, 0.8)"
											fontSize=".85rem"
											fontWeight="400"
										>
											<BiDownload
												style={{
													color: "rgba(255, 255, 255, 0.8)",
													marginRight: ".3rem",
												}}
											/>
											<Text>Download</Text>
										</Flex>
									</Link>
								</Box>
							</Box>

							<br />
							<Text
								fontSize="1rem"
								lineHeight="2"
								color="rgba(255, 255, 255, 0.8)"
								fontWeight="300"
							>
								Frontend Engineer, passionate and dedicated in bringing ideas
								from pixels to live scalable products. I develop responsive
								applications with user experience as top priority. I’m always
								ready to adapt according to project specifications irrespective
								of stack.
							</Text>

							<Text
								mt="1rem"
								fontSize="1rem"
								lineHeight="2"
								color="rgba(255, 255, 255, 0.8)"
								fontWeight="300"
							>
								As you'll see from my{" "}
								<Link
									href={resumeLink}
									textDecoration="underline"
									color="rgb(226, 101, 62)"
									isExternal
								>
									resume
								</Link>
								, I've worked on a variety of projects, developing UI while
								paying close attention to detail. I've also had the opportunity
								to work with various frameworks such as React and Vue, while
								constantly learning to improve my skillsets.
							</Text>
						</Box>

						<Box mt="2rem">
							<SimpleGrid
								columns={["1", "2", "3", "3", "3"]}
								spacing={6}
								mb={["1.5rem", "1.5rem", "1.5rem", "1rem"]}
								mt={["3rem", "3rem", "3rem", "1rem"]}
							>
								{data.map((item) => {
									return (
										<Box
											bg="rgba(24, 22, 22, 0.5)"
											borderLeft="3px solid"
											borderColor="rgb(226, 101, 62)"
											p=".5rem"
											textTransform="capitalize"
											fontSize=".85rem"
											fontWeight="600"
											w="max-content"
										>
											<Text>{item}</Text>
										</Box>
									);
								})}
							</SimpleGrid>
						</Box>
					</Box>
				</SimpleGrid>
			</MainLayout>
		</Box>
	);
};
