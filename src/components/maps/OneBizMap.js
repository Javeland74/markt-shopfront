import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ReactMapGL, { Marker, NavigationControl } from 'react-map-gl';


const OneBizMap = () => {
    const [business, setBusiness] = useState(null)
    const [viewport, setViewport] = useState({
        height: '100vh',
        width: '100vw',
        latitude: 53.5462055,
        longitude: -113.491241,
        zoom: 10

    });

    const fetchBizAddress = async () => {
        const business = await axios.get('http://localhost:8080/api/businesswithaddress')
            .catch((err) => {
                console.log(err);
            });
        setBusiness(business.data)
    };

    useEffect(() => {
        fetchBizAddress();
    }, []);

    // getLngLat(business.address);

    // console.log(business.biz_name);
    return business === null ? null : (
        <div className='map'>
            <ReactMapGL
                {...viewport}
                mapboxAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
                mapStyle='mapbox://styles/javeland74/cl71zxieq006f14rogzhtk5cl'
                onViewportChange={viewport => {
                    setViewport(viewport);
                }}
                style={{ width: '500px', height: '500px' }}
            >
                {/* {business.map((business) => { */}
                {/* // console.log(business.lat); */}
                {/* // getLngLat(business.address) */}
                <Marker
                    latitude={53.5462055}
                    longitude={-113.491241}
                ></Marker>
                <NavigationControl />
            </ReactMapGL>
        </div >
    )
}

export default OneBizMap