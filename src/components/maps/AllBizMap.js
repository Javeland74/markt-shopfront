import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ReactMapGL, { Marker, NavigationControl, Popup } from 'react-map-gl';
import { Link } from 'react-router-dom';

const AllBizMap = () => {

    const [businesses, setBusinesses] = useState(null)
    const [selectedBusiness, setSelectedBusiness] = useState(null);
    const [viewport, setViewport] = useState({
        height: window.innerHeight,
        width: window.innerWidth,
        latitude: 53.5462055,
        longitude: -113.491241,
        zoom: 11
    });

    const fetchAllBizAddress = async () => {
        const businesses = await axios.get('http://localhost:8080/api/businessesAddresses')
            .catch((err) => {
                console.log(err);
            });
        setBusinesses(businesses.data)
        console.log(businesses);
    };

    useEffect(() => {
        fetchAllBizAddress();
    }, []);

    return businesses === null ? null : (
        <div className='map'>
            <ReactMapGL
                {...viewport}
                mapboxAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
                mapStyle='mapbox://styles/javeland74/cl71zxieq006f14rogzhtk5cl'
                onViewportChange={viewport => {
                    setViewport(viewport);
                }}
                style={{ width: '25rem', height: '20rem' }}
            >
                {businesses.map(business => {
                    return (
                        <Marker
                            key={business.id}
                            longitude={Number(business.lng)}
                            latitude={Number(business.lat)}
                        ></Marker>
                    )
                })};
                {businesses.map(business => {
                    return (
                        <Popup
                            latitude={business?.lat}
                            longitude={business?.lng}
                            closeButton={true}
                            anchor='bottom-left'>
                            <div>{business?.biz_name}</div>
                            <div>{business?.business_type}</div>
                            <div><Link to={'/bizasuser'}>Details</Link></div>
                        </Popup>
                    )
                })}
                <NavigationControl />
            </ReactMapGL>
        </div >
    )
}


export default AllBizMap;