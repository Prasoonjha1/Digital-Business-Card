import twitter from '../Image/Twitter.png'
import insta from '../Image/Instagram.png'
import facebook from '../Image/Facebook.png'
import git from '../Image/GitHub.png'

function Footer({user})
{
    return (
        <footer className='footer'>
            <a href = {user.link.twitter}>
                <img src={twitter}></img>
            </a>
            <a href = {user.link.facebook}>
                <img src={facebook}></img>
            </a>
            <a href = {user.link.instagram}>
                <img src={insta}></img>
            </a>
            <a href = {user.link.github}>
                <img src={git}></img>
            </a>
        </footer>
    )
}

export default Footer