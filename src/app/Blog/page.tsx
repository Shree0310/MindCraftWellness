import Blog from '../Components/Blog';
import Footer from '../Components/Footer';
import Header from '../Components/Header';

export default function BlogPage() {
    return <div className="div">
        <Header/>
        <Blog/>
        {/* Footer */}
        <Footer className='bg-[#ee7e1b]' />
        </div>
}