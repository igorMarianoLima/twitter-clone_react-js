import { Logo } from '../Logo/'; //Importando o componente da logo com a imagem
import {
    HomeIcon,
    NotificationIcon,
    MessageIcon,
    FavoriteIcon,
    UserIcon,
    SignOutIcon
} from '../Icon/'; //Importando os componentes dos ícones FontAwesome
import { SolidButton } from '../Button/';
import { ProfileDiv } from '../Profile/';

import "./style.scss"; //Importando a estilização

export function MenuBar()
{
    return(
        <div className="menu-bar">
            <div>
                <a id="logo" href="https://hexalab.com.br/n/">
                    <Logo />
                </a>
                
                <nav>
                    <ul>
                        <li>
                            <a href="index.html#"><HomeIcon /> <span>Página Inicial</span></a>
                        </li>
                        <li>
                            <a href="index.html#"><NotificationIcon altIcon /> <span>Notificações</span></a>
                        </li>
                        <li>
                            <a href="index.html#"><MessageIcon altIcon /> <span>Mensagens</span></a>
                        </li>
                        <li>
                            <a href="index.html#"><FavoriteIcon altIcon /> <span>Favoritados</span></a>
                        </li>
                        <li className="active">
                            <a href="index.html#"><UserIcon /> <span>Perfil</span></a>
                        </li>
                    </ul>
                </nav>

                <SolidButton>
                    Tweetar
                </SolidButton>
            </div>

            <div className="profile-options">
                <ProfileDiv user={{
                    userName: "Igor Mariano",
                    tagName: "@igormarianolima"
                }} />

                <button id="button_signout">
                    <SignOutIcon />
                </button>
            </div>
        </div>
    );
}