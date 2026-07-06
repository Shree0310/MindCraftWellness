import Blog from '../Components/Blog';
import Footer from '../Components/Footer';
import BlogPageWrapper from '../Components/BlogPageWrapper';

export default async function BlogPage() {
    return (
        <BlogPageWrapper>
            <Blog />
            <Footer className='bg-[#ee7e1b]' />
        </BlogPageWrapper>
    );
}
