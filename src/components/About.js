function About({user})
{
    return (
        <div className="about">
            <h2>About</h2>
            <p>{user.about}</p>
            <h2>Interests</h2>
            <p>{user.interest}</p>
        </div>
    )
}

export default About