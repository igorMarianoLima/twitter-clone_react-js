import reactDom from "react-dom";

import "./style.css";

import { CloseIcon } from "../Icon/";
import { Retweet } from "../Tweet/";
import { CommentInputs } from "../Input";
import { SideBar } from "../SideBar";

const modalRoot = document.getElementById("modal_root");

export function Modal(props)
{
    let visibility = props.visibility;
    let setVisibility = props.setVisibility;

    let displayValue = "block";

    if (visibility === false)
    {
        displayValue = "none";
    } else if (visibility === true)
    {
        displayValue = "block";
    }

    let secondClass = props.className;
    if (secondClass === undefined)
    {
        secondClass = "";
    }


    return(
        reactDom.createPortal(
            <div
                className="overlay"

                style={{
                    display: displayValue
                }}
            >
                <div 
                    className={secondClass + " modal"}
                >
                    <button
                        onClick={() => {
                            setVisibility(false);

                            let textarea_comment = document.getElementById("textarea_comment");
                            textarea_comment.value = "";
                        }}
                    >
                        <CloseIcon />
                    </button>

                    {
                        props.children
                    }
                </div>
            </div>,
            modalRoot
        )
    )
}

export function CommentModal(props)
{
    let visibility = props.visibility;
    let setVisibility = props.setVisibility;

    let postInfo = props.postInfo

    let numComments = props.numComments;
    let setNumComments = props.setNumComments;

    if (postInfo !== null)
    {
        let user = postInfo.user;
        //let tweet = postInfo.tweet;

        return(
            <Modal
                className="comment_modal"
                visibility={visibility}
                setVisibility={setVisibility}

                numComments={numComments}
                setNumComments={setNumComments}
            >
                <div>
                        <Retweet
                            {...postInfo}
                        >
                            <div className='vertical-line'></div>
                        </Retweet>

                    <p
                        style={{
                            textAlign: "center",
                            color: "var(--gray)",
                            fontSize: 14
                        }}
                    >
                        Respondendo a <span style={{color: "var(--twitter)"}}>{user.userName}</span>
                    </p>

                    <CommentInputs
                        setState={setNumComments}
                        numComments={numComments}

                        setVisibility={setVisibility}
                    />
                </div>
            </Modal>
        );
    } else {
        return(
            <Modal
                className="comment_modal"
                visibility={visibility}
                setVisibility={setVisibility}
            >
                
            </Modal>
        );
    }
}