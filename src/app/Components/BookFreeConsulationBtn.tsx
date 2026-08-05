import Link from 'next/link';

const BookFreeConsultationBtn = () => {
    return (
        <div>
            <Link href="/book-now" className='bg-[#B6724F] cursor-pointer text-white px-8 py-4 my-16 rounded-full text-lg hover:bg-[#95573A] transition-all duration-300 shadow-lg hover:shadow-xl' style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontWeight: 500 }}>
                Book a Consultation →
            </Link>
        </div>
    );
}
export default BookFreeConsultationBtn;