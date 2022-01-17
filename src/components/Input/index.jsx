import './style.scss';

import { useState } from 'react';

import { ProfileAvatar } from "../Profile/";

import {
    PhotoIcon,
    GifIcon,
    AlignIcon,
    EmojiIcon,
    CalendarIcon,
    LocalizationIcon
} from '../Icon/';

import { SolidButton } from '../Button';

export function CommentTextarea(props)
{
    let idTextareaComment = 'textarea_comment';
    let setButtonState = props.setButtonState;

    return(
        <textarea
            id={idTextareaComment}
            placeholder="Tweet sua resposta"

            onChange={() => {
                let textarea = document.getElementById(idTextareaComment);
                
                if (textarea.value === '')
                {
                    setButtonState(true) //Botao estará desativado
                } else {
                    setButtonState(false) //Botao nao estará desativado
                }
            }}
        >
            
        </textarea>
    )
}

export function CommentInputs(props)
{
    let modalSetVisibility = props.setVisibility;

    let button_responder = document.getElementById('button_action');
    let [buttonState, setButtonState] = useState(true);

    let setNumComments = props.setState;
    let numComments = props.numComments;

    return(
        <div className="comment-area">
            <ProfileAvatar />

            <div className="comment_options">
                <CommentTextarea
                    setButtonState={setButtonState}
                />

                <div className="line">
                    <div>
                        <button>
                            <PhotoIcon />
                        </button>

                        <button>
                            <GifIcon />
                        </button>

                        <button>
                            <AlignIcon />
                        </button>

                        <button>
                            <EmojiIcon />
                        </button>

                        <button>
                            <CalendarIcon />
                        </button>

                        <button>
                            <LocalizationIcon />
                        </button>
                    </div>

                    <SolidButton
                        id='button_action'
                        disabled={buttonState}
                        
                        onClick={() => {
                            setNumComments(numComments++);

                            let textarea = document.getElementById('textarea_comment');
                            textarea.value = '';

                            modalSetVisibility(false);
                        }}
                    >
                        Responder
                    </SolidButton>
                </div>
            </div>
        </div>
    )
}