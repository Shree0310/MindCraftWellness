import Link from 'next/link';

const BookFreeConsultationBtn = () => {
    return (
        <div>
            <Link href="/book-now" className='bg-[#B6724F] cursor-pointer text-white px-8 py-4 my-16 rounded-full font-semibold text-lg hover:bg-[#95573A] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl'>
                Book Your Free Consultation
            </Link>
        </div>
    );
}
export default BookFreeConsultationBtn;