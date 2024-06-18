import React from 'react';
import { BlogPostProps } from './BlogPost.types';
import { formatDate } from './FormatDate';
import { Link } from 'react-router-dom';
import { Box, Flex, Text } from '@chakra-ui/react'; // Assuming you are using Chakra UI

const BlogPost: React.FC<BlogPostProps> = ({ title, date, slug, excerpt }) => {
  return (
    <Box mb={4}>
      <Flex justifyContent="space-between" alignItems="center">
        <Text as="h5" fontWeight="bold">
          <Link to={`/blog/${slug}`}>{title}</Link>
        </Text>
        <Text as="span" fontSize="sm" color="gray.500">{formatDate(date)}</Text>
      </Flex>
      <Text mt={2}>{excerpt}</Text>
    </Box>
  );
};

export default BlogPost;
