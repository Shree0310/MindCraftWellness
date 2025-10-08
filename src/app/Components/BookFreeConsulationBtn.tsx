import Link from 'next/link';

const BookFreeConsultationBtn = () => {
    return (
        <div>
            <Link href="/book-now" className='bg-[#ADC3E3] cursor-pointer text-black px-8 py-4 my-16 rounded-full font-semibold text-lg hover:bg-[#92b0dc] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl'>
                Book Your Free Consultation
            </Link>
        </div>
    );
}
export default BookFreeConsultationBtn;