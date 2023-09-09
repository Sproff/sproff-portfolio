import { Box, Flex, Link, SimpleGrid, Tag, Text } from "@chakra-ui/react";
import React from "react";
import { AiOutlineClockCircle } from "react-icons/ai";
import { MainLayout } from "../layouts/MainLayout";
import { podcastData } from "../services/podcast";

const Podcast = () => {
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
					<Box padding={["0", "0", "0", "3rem"]}>
						<SimpleGrid
							columns={["1", "1", "2", "1", "2"]}
							spacing={4}
							mt="1rem"
							mb="1rem"
							zIndex="99"
						>
							{podcastData.map((item) => {
								return (
									<Link
										href={item.link}
										isExternal
										_hover={{ textDecoration: " none" }}
										_focus={{ outline: "none" }}
									>
										<Box
											key={item.id}
											bgColor="rgba(24, 22, 22, 0.5)"
											color="rgba(255, 255, 255, 0.8)"
											fontFamily="Space Grotesk"
											borderRadius="4px"
											height="264px"
											width="100%"
											padding="1.5rem"
											display="flex"
											flexDirection="column"
											justifyContent="space-between"
											zIndex="2"
											_hover={{
												transform: "scale(1.05)",
												transition: "all .5s",
											}}
										>
											<Box>
												<Text
													fontSize=".75rem"
													lineHeight="2"
													color="rgba(255, 255, 255, 0.8)"
													fontWeight="700"
													textTransform="uppercase"
												>
													{item.tags}
												</Text>
												<Text
													fontSize=".75rem"
													color="rgba(255, 255, 255, 0.5)"
													fontWeight="300"
												>
													{item.date}
												</Text>
											</Box>
											<Box>
												<Tag
													size="sm"
													bgColor="rgba(255, 255, 255, 0.1)"
													color="rgba(255, 255, 255, 1)"
												>
													{item.platform}:
												</Tag>
												<Text
													color="rgba(255, 255, 255, 0.8)"
													fontWeight="500"
													fontSize="1.1rem"
												>
													{item.title}
												</Text>
											</Box>
											<Flex fontSize=".85rem" align="center" opacity="0.5">
												<Box mr=".3rem">
													<AiOutlineClockCircle />
												</Box>
												<Text>{item.time}</Text>
											</Flex>
										</Box>
									</Link>
								);
							})}
						</SimpleGrid>
					</Box>
				</SimpleGrid>
			</MainLayout>
		</Box>
	);
};

export default Podcast;
