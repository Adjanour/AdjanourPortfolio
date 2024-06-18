import React from 'react';
import BlogPost from '../Components/BlogPost/BlogPost'; // Remove named import as it's a default export
import { BlogPostData } from '../Data/BlogPostData';
import { Box, Heading, VStack } from '@chakra-ui/react'; // Assuming Chakra UI for styling

const Blog = () => {
  return (
    <Box className="blog-page" p={4}>
      <Heading as="h1" mb={6}>Blog</Heading>
      <VStack spacing={4} className="blog-posts">
        {BlogPostData && BlogPostData.length > 0 ? (
          BlogPostData.map((post) => (
            <BlogPost key={post.id} {...post} />
          ))
        ) : (
          <Heading as="h2" size="lg">No blog posts available</Heading>
        )}
      </VStack>
    </Box>
  );
};

export default Blog;
