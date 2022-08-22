import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ReactMapGL, { Marker, NavigationControl, Popup } from 'react-map-gl';
import Icon from 'react-icons-kit/';
import Home from '../../pages/LoggedOut/Home/Home';

const AllBizMap = () => {

    const [businesses, setBusinesses] = useState(null)
    const [selectedBusiness, setSelectedBusiness] = useState(null);
    const [viewport, setViewport] = useState({
        height: '100vh',
        width: '100vw',
        latitude: 53.5462055,
        longitude: -113.491241,
        zoom: 10
    });

    const fetchAllBizAddress = async () => {
        const businesses = await axios.get('http://localhost:8080/api/businessesAddresses')
            .catch((err) => {
                console.log(err);
            });
        setBusinesses(businesses.data)
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
                style={{ width: '500px', height: '500px' }}
            >
                {businesses.map(business => {
                    <Marker
                        key={business.id}
                        longitude={parseFloat(business.lng)}
                        latitude={parseFloat(business.lat)}
                    ></Marker>
                })};
                {/* 
                {/* })} */}
                {/* {selectedBusiness ? (
                    {
                        businesses.map((business) => {
                            <>
                            <Popup
                                latitude={business.lat}
                                longitude={business.lng} >
                                <div>
                                    Selected:
                                    {business.biz_name} - {business.business_type}
                                    <link>View Profile</link>
                                </div>
                            </Popup>
                        })
                    }) : null} */}
                <NavigationControl />
            </ReactMapGL>
        </div >
    )
}


export default AllBizMap;