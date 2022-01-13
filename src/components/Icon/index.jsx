import './style.scss'; //Importando a estilização dos ícones

let icons = {
    arrow_left: {
        class: 'fas fa-arrow-left'
    },
    arrow_right: {
        class: 'fas fa-arrow-right'
    },
    long_arrow_left: {
        class: 'fas fa-long-arrow-alt-left'
    },
    long_arrow_right: {
        class: 'fas fa-long-arrow-alt-right'
    },
    menu_bars: {
        class: 'fas fa-bars'
    },
    home: {
        class: 'fas fa-home'
    },
    search: {
        class: 'fas fa-search'
    },
    error: {
        class: 'fas fa-times'
    },
    notification: {
        class: 'fas fa-bell'
    },
    notification_alt: {
        class: 'far fa-bell'
    },
    email: {
        class: 'fas fa-envelope'
    },
    email_alt: {
        class: 'far fa-envelope'
    },
    heart: {
        class: 'fas fa-heart'
    },
    heart_alt: {
        class: 'far fa-heart'
    },
    user: {
        class: 'fas fa-user'
    },
    user_alt: {
        class: 'far fa-user'
    },
    sign_out: {
        class: 'fas fa-sign-out-alt'
    },
    localization: {
        class: 'fas fa-map-marker-alt'
    },
    birthday: {
        class: 'fas fa-birthday-cake'
    },
    comment: {
        class: 'far fa-comment-dots'
    },
    retweet: {
        class: 'fas fa-retweet'
    }
}

export function Icon(props)
{
    let iconObject = icons[props.icon];
    let iconClass = iconObject.class;

    return(
        <i className={iconClass + " icon"}></i>
    );
}

export function HomeIcon()
{
    return(
        <Icon title="Página Principal" icon="home" />
    );
}

export function NotificationIcon(props)
{
    let iconAlt = props.altIcon; //Caso o usuário queira o ícone alternativo (Retornará true caso ele queira)
    let iconName = "notification"; //Ícone que será carregado

    if (iconAlt === true || iconAlt === "true")
    {
        //Caso o usuário queira o ícone alternativo (carregaremos o ícone notification_alt)
        iconName = "notification_alt";
    }

    return(
        <Icon title="Notificações" icon={iconName} />
    );
}

export function MessageIcon(props)
{
    let iconAlt = props.altIcon;
    let iconName = "email";

    if (iconAlt === true || iconAlt === "true")
    {
        iconName = "email_alt";
    }

    return(
        <Icon icon={iconName} />
    );
}

export function FavoriteIcon(props)
{
    let iconAlt = props.altIcon;
    let iconName = "heart";

    if (iconAlt === true || iconAlt === "true")
    {
        iconName = "heart_alt";
    }

    return(
        <Icon icon={iconName} />
    );
}

export function UserIcon(props)
{
    let iconAlt = props.altIcon;
    let iconName = "user";

    if (iconAlt === true || iconAlt === "true")
    {
        iconName = "user_alt";
    }

    return(
        <Icon icon={iconName} />
    );
}

export function SearchIcon()
{
    return(
        <Icon icon="search" />
    );
}

export function SignOutIcon()
{
    return(
        <Icon icon="sign_out" />
    );
}

export function LocalizationIcon()
{
    return(
        <Icon icon="localization" />
    );
}

export function BirthdayIcon()
{
    return(
        <Icon icon="birthday" />
    );
}

export function CommentIcon()
{
    return(
        <Icon icon="comment" />
    );
}

export function RetweetIcon()
{
    return(
        <Icon icon="retweet" />
    );
}

export function ArrowIcon(props)
{
    let arrowDirection = props.direction;

    if (arrowDirection === 'left' || arrowDirection === 'right')
    {
        return(
            <Icon icon={"arrow_" + arrowDirection} />
        );
    } else {
        return(
            <Icon icon="error" />
        );
    }
}