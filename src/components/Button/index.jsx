import './style.scss';

export function Button(props)
{
    return(
        <button {...props}>
            {props.children}
        </button>
    );
}

export function BarButton(props)
{
    return(
        <Button {...props} className="bar_button">
            {props.children}
        </Button>
    );
}

export function RegularButton(props)
{
    return(
        <Button {...props} className="regular_button">
            {props.children}
        </Button>
    );
}

export function SolidButton(props)
{
    return(
        <Button {...props} className="solid_button">
            {props.children}
        </Button>
    );
}