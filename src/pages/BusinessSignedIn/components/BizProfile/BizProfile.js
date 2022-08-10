const BizProfile = () => {
    return (
        <>
            <h1>
                My Business
            </h1>
            <section className="user-profile">
                <div className="user-profile__top-container">
                    <img src='/'></img>
                    <div user-profile__headings>
                        <h2>Business: Example</h2>
                        <h2>Location: Edmonton, CA</h2>
                        <h5>Followers: 98</h5>
                    </div>
                    <img src='/'></img>
                </div>
                <div className="user-proifle__bottom-container">
                    <div className="user-profile__bottom-header-container">
                        <h3>Followed Local Businesses</h3>
                        <button>Add New</button>
                        <button>Edit/Remove Items</button>
                    </div>
                    <ul>
                        <lil>Mani Pedi to get Summer Ready! - $40</lil>
                        <lil>Summer Series Nail Polish 50% off</lil>
                        <lil>Aromatic Foot Soak - $30</lil>
                    </ul>
                </div>
            </section>
        </>
    )
}

export default BizProfile