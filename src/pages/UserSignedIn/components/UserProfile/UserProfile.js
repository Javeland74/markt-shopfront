const UserProfile = () => {
    return (
        <>
            <h1>
                My Profile
            </h1>
            <section className="user-profile">
                <div className="user-profile__top-container">
                    <img src='/'></img>
                    <div user-profile__headings>
                        <h2>Username: Example</h2>
                        <h2>Location: Edmonton, CA</h2>
                    </div>
                    <img src='/'></img>
                </div>
                <div className="user-proifle__bottom-container">
                    <h3>Followed Local Businesses</h3>
                    <ul>
                        <lil>Bistro 99 - Coffee Shop - Edmonton, AB, CA</lil>
                        <lil>Nelly's Nails - Nail Salon - Edmonton, AB, CA</lil>
                        <lil>Pascal's Cycles - Bike Shop - Edmonton, AB, CA</lil>
                    </ul>
                    <button type='search'>Discover More</button>
                </div>
            </section>
        </>
    )
}

export default UserProfile