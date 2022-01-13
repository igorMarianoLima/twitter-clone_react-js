import { Header } from '../Header/';
import { ProfileAvatar } from '../Profile/';
import { CommentIcon, RetweetIcon, FavoriteIcon } from '../Icon/';

import './style.scss';

export function TweetDescription()
{
    return(
        <div className="tweet-description">
            <p>For your disruptive ideas</p>
        </div>
    );
}

export function TweetInfo(props)
{
    return(
        <div className="tweet-info">
            <strong>{props.user.userName}</strong>
            <span>{props.user.tagName}</span>

            <time>12 de jan</time>
        </div>
    );
}

export function TweetOptions()
{
    return(
        <div className="tweet-options">
            <button className="comment_btn">
                <CommentIcon /> 23
            </button>

            <button className="retweet_btn">
                <RetweetIcon /> 42
            </button>

            <button className="like_btn">
                <FavoriteIcon /> 99
            </button>
        </div>
    );
}

export function TweetImage()
{
    return(
        <div className="tweet-image">

        </div>
    );
}

export function Retweet(props)
{
    return(
        <div className="retweet-single">
            <ProfileAvatar />

            <article>
                <Header>
                    <small>Você retweetou</small>

                    <TweetInfo
                        user={{
                            userName: props.user.userName,
                            tagName: props.user.tagName
                        }}
                    />

                    <TweetDescription>

                    </TweetDescription>
                </Header>
                
                <TweetImage />

                <TweetOptions />
            </article>
        </div>
    );
}