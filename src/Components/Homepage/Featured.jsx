import FeaturedHeader from './FeaturedHeader';
import FeaturedSlider from './FeaturedSlider';

const Featured = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/featured`);
    const facilities = await res.json();

    return (
        <section className="py-12 px-4  mx-auto bg-(--green)/5">
            <div className="max-w-6xl mx-auto">
                <FeaturedHeader />
                <FeaturedSlider facilities={facilities} />
            </div>
        </section>
    );
};

export default Featured;