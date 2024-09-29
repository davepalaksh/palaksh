/* eslint-disable @next/next/no-img-element */
const images = ['/IMG_0681.JPG', '/IMG_1020.JPG', '/IMG_1231.JPG', '/IMG_1233.JPG'];

const HomeImageGrid: React.FC = () => (
    <div className="flex justify-center gap-5 overflow-hidden lg:overflow-visible py-4">
        {images.map((src, index) => (
            <div key={index} className={`w-36 md:w-44 lg:w-52 flex-none overflow-hidden rounded-lg ${index % 2 === 0 ? '-rotate-2' : 'rotate-2'}`}>
                <img className="w-full h-auto rounded-lg grayscale" width={1000} height={1000} src={src} alt="" loading="lazy" />
            </div>
        ))}
    </div>
);

export default HomeImageGrid;
