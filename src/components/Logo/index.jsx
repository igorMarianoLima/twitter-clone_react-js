import logoImg from '../../assets/images/hexalab-icon.svg';
import logoMinImg from '../../assets/images/hexalab-icon_min.svg';

let viewportWidth = window.innerWidth;


export function Logo()
{
    if (viewportWidth >= 1280)
    {
        return(
            <img src={logoImg} alt="HexaLab - For Your Disruptives Ideas" />
        );
    } else {
        return(
            <img src={logoMinImg} alt="HexaLab - For Your Disruptives Ideas" />
        );
    }
}