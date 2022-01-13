import './style.scss';

import { Container } from '../Layout/';
import { Box } from '../Box/';
import { RegularButton } from '../Button';
import { LocalizationIcon, BirthdayIcon} from '../Icon/';
import { BarButton } from '../Button/';
import { Retweet } from '../Tweet/';

export function ProfileInfo(props)
{
    return(
        <div className="profile-info">
            <strong>{props.username}</strong>
            <span>{props.tweetsNum} Tweets</span>
        </div>
    );
}

export function ProfileAvatar()
{
    return(
        <div className="profile-avatar"></div>
    );
}

function ProfileBanner(props)
{
    return(
        <div className="profile-banner">
            {props.children}
        </div>
    );
}

export function ProfileDiv(props)
{
    return(
        <div className="profile-div">
            <ProfileAvatar />
            
            <div className="profile-info">
                <strong>{props.user.userName}</strong>
                <span>{props.user.tagName}</span>
            </div>
        </div>
    );
}

export function AccountSuggestion(props)
{
    let user = props.user;

    return(
        <Box className="account-single">
            <ProfileDiv user={{
                userName: user.userName,
                tagName: user.tagName
            }} />

            <RegularButton>
                Seguir
            </RegularButton>
        </Box>
    );
}

function ProfileData()
{
    return(
        <div className="profile-data">
            <div className="edit-option">
                <RegularButton>Editar Perfil</RegularButton>
            </div>

            <h1>Igor Mariano</h1>
            <h2>@igormarianolima</h2>

            <p>Developer at <a href="https://twitter.com/hexalab_">@hexalab_</a></p>

            <ul>
                <li>
                    <LocalizationIcon />
                    Itapeva, São Paulo
                </li>
                <li>
                    <BirthdayIcon />
                    Nascido(a) em 10 de setembro de 2005
                </li>
            </ul>

            <div className="stats">
                <p>seguindo <span>94</span></p>
                <p><span>230</span> seguidores</p>
            </div>
        </div>
    );
}

export function ProfileTweets()
{
    return(
        <div className="profile-tweets">
            <Retweet
                user={{
                    userName: "Hexalab Softwares",
                    tagName: "@hexalab_"
                }}
            />

            <Retweet
                user={{
                    userName: "Hexalab Softwares",
                    tagName: "@hexalab_"
                }}
            />
            
            <Retweet
                user={{
                    userName: "Hexalab Softwares",
                    tagName: "@hexalab_"
                }}
            />
            
            <Retweet
                user={{
                    userName: "Hexalab Softwares",
                    tagName: "@hexalab_"
                }}
            />
            
            <Retweet
                user={{
                    userName: "Hexalab Softwares",
                    tagName: "@hexalab_"
                }}
            />
            
            <Retweet
                user={{
                    userName: "Hexalab Softwares",
                    tagName: "@hexalab_"
                }}
            />
        </div>
    );
}

export function ProfilePage()
{
    return(
        <Container>
            <ProfileBanner>
                <ProfileAvatar />
            </ProfileBanner>

            <ProfileData />
            <BarButton>Tweets</BarButton>

            <ProfileTweets />
        </Container>
    );
}