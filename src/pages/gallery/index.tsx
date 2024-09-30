import ImageGallery from '../../components/(gallery)/ImageGallery';
import Head from 'next/head';

const ImageGalleryPage: React.FC = () => {
    return (
        <div className="w-11/12 md:w-4/5 lg:w-3/4 xl:w-2/3 2xl:w-1/2 mx-auto">
            <Head>
                <title>Gallary | Palaksh</title>
                <meta name="og:description" content="Portfolio website of Pranshu Patel." />
                <meta name="og:title" content="Gallery | Portfolio" />
            </Head>
            <div className="pb-8">
                <h1 className="text-3xl font-bold text-zinc-100">Gallery</h1>
                <p>Welcome to my Gallery! Visit my <a href='https://vsco.co/zerxs3/gallery' target="_blank" className='link'>VSCO Profile</a></p>
            </div>
            <ImageGallery />
        </div>
    );
};

export default ImageGalleryPage;
