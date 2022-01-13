import './style.scss';

export function Box(props)
{
    let className = props.className;

    if (className === undefined)
    {
        className = "";
    }

    return(
        <div {...props} className={className + " box"}>
            {
                props.children
            }
        </div>
    );
}

export function RoundedBox(props)
{
    let className = props.className;

    if (className === undefined)
    {
        className = "";
    }

    return(
        <Box {...props} className={className + " rounded_box"}>
            {props.children}
        </Box>
    );
}