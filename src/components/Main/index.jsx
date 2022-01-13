import { BottomMenu } from '../BottomMenu';
import { Header } from '../Header/';
import { ArrowIcon } from '../Icon/';
import { ProfileInfo, ProfilePage } from '../Profile/';

import './style.scss';

export function Main()
{
    return(
        <main role="main">
            <Header>
                <button className="active">
                    <ArrowIcon title="Voltar" direction="left" />
                </button>

                <ProfileInfo username="Igor Mariano" tweetsNum="800"/>
            </Header>

            <ProfilePage />

            <BottomMenu />
        </main>
    );
}