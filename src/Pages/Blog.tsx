import { Link } from 'react-router-dom';
import BlogPost from '../Components/BlogPost/BlogPost'; // Remove named import as it's a default export
import { BlogPostData } from '../Data/BlogPostData';
import { Box, Heading, VStack } from '@chakra-ui/react'; // Assuming Chakra UI for styling

const Blog = () => {
  return (
    <Box className="blog-page" p={4}>
      <div className='flex justify-between align-center'>
        <Heading as="h1" mb={6}>Blog</Heading>
      <div className='hover:text-md hover:text-blue-500'>
        <Link to="/">Home</Link>
      </div> 
      </div>
     
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
