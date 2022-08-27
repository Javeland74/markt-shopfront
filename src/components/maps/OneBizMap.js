import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ReactMapGL, { Marker, NavigationControl, Popup, GeolocateControl } from 'react-map-gl';


const OneBizMap = () => {
    const [business, setBusiness] = useState(null)
    const [viewport, setViewport] = useState({
        height: window.innerHeight,
        width: window.innerWidth,
        latitude: 53.52394406307245,
        longitude: -113.51310774717992,
        zoom: 15

    });


    const fetchBizAddress = async () => {
        const business = await axios.get('http://localhost:8080/api/businesswithaddress')
            .catch((err) => {
                console.log(err);
            });
        setBusiness(business.data)
        setViewport({
            ...viewport,
            latitude: business.data.lat,
            longitude: business.data.lng
        })

    };

    useEffect(() => {
        fetchBizAddress();
    }, []);

    return business === null ? null : (
        <div className='map'>
            <ReactMapGL
                {...viewport}
                mapboxAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
                mapStyle='mapbox://styles/javeland74/cl71zxieq006f14rogzhtk5cl'
                onViewportChange={viewport =>
                    setViewport(viewport)}
                style={{ width: '25rem', height: '20rem' }}
            >
                <Marker
                    latitude={business?.lat}
                    longitude={business?.lng}
                ></Marker>
                <Popup
                    latitude={business?.lat}
                    longitude={business?.lng}
                    closeButton={true}
                    anchor='top'>
                    <div>{business?.biz_name}</div>
                    <div>{business?.business_type}</div>
                </Popup>
                <NavigationControl />
                <GeolocateControl />
            </ReactMapGL>
        </div >
    )
}

export default OneBizMap