function Info({user})
{
    return (
        <header className="heaader">
            <h4 className="name">{user.name}</h4>
            <h4 className="tech">{user.profession}</h4>
            <h4 className="webs"><a href={'http://'+user.web}>{user.web}</a></h4>
            <a href={'http://'+user.link.email}>
                <button className="b1" ><i class="bi bi-envelope-fill icon"> Email</i></button>
            </a>
            <a href={'http://'+user.link.linkedin}>
                <button className="b2"><i class="bi bi-linkedin icon1"> Linkedin</i></button>
            </a>
        </header>
    )
}

export default Info
