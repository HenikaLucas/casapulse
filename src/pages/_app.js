import React, { useEffect } from "react";
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import '../../public/styles/global.scss';
import { useRouter } from "next/router";

function useNormalScrollRoutes() {
    const router = useRouter();

    useEffect(() => {
        router.events.on('routeChangeStart', () => {
            document.documentElement.classList.add('normal-scroll');
        });
        router.events.on('routeChangeComplete', () => {
            document.documentElement.classList.remove('normal-scroll');
        });
    }, []);
}

export default function MyApp({ Component, pageProps }) {
    useNormalScrollRoutes();
    return <Component {...pageProps} />;
}

MyApp.propTypes = {
    Component: PropTypes.func.isRequired,
    pageProps: PropTypes.object.isRequired
};
