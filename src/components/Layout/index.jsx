import './style.scss'; //Estilização do Layout todo

import { Main } from '../Main/';
import { MenuBar } from '../MenuBar/';
import { SideBar } from '../SideBar/';

export function Container(props)
{
    return(
        <div className="container">
            {props.children}
        </div>
    );
}

export function Wrapper(props)
{
    return(
        <div className="wrapper">
            {props.children}
        </div>
    );
}

export function Layout()
{
    return(
        <Container>
            <Wrapper>
                <MenuBar />
                <Main />
                <SideBar />
            </Wrapper>
        </Container>
    );
}