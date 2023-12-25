import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div className='h-[80vh] bg-cover bg-no-repeat flex items-center px-16 rounded-xl' style={{ backgroundImage: `url(https://i.ibb.co/mtx7P1R/banner.jpg)`, repeat: 'no-repeat' }}>
            <div className='space-y-4'>
                <h3 className='text-5xl w-2/3 font-bold'>
                    Streamlining Your Productivity Journey
                </h3>
                <p className='w-1/2 text-xl text-justify font-medium pb-12'>Introducing our task management website – a streamlined solution to enhance productivity and organization. Effortlessly create, assign, and track tasks.</p>

                <Link to='/dashboard/addtask' className=' rounded-xl px-6 py-3 bg-[#E84F74] text-slate-100 text-xl'>Let's Explore</Link>
            </div>

        </div>
    );
};

export default Banner;