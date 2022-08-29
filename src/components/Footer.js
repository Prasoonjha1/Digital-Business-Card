import twitter from '../Image/Twitter.png'
import insta from '../Image/Instagram.png'
import facebook from '../Image/Facebook.png'
import git from '../Image/GitHub.png'

function Footer({user})
{
    return (
        <footer className='footer'>
            <a href = {'http://'+user.link.twitter}>
                <img src={twitter}></img>
            </a>
            <a href = {'http://'+user.link.facebook}>
                <img src={facebook}></img>
            </a>
            <a href = {'http://'+user.link.instagram}>
                <img src={insta}></img>
            </a>
            <a href = {'http://'+user.link.github}>
                <img src={git}></img>
            </a>
        </footer>
    )
}

export default Footer
