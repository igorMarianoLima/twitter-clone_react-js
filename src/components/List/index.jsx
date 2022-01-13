import { RoundedBox } from '../Box/';
import { Header } from '../Header/';

export function UnorderedList(props)
{
    return(
        <ul>
            {props.children}
        </ul>
    );
}

export function OrderedList(props)
{
    return(
        <ol>
            {props.children}
        </ol>
    );
}

export function ListItem(props)
{
    return(
        <li className="list-item">
            {props.children}
        </li>
    );
}

export function RoundedList(props)
{
    let TypeList = UnorderedList;

    if (props.typeList === "ol")
    {
        TypeList = OrderedList;
    }

    return(
        <RoundedBox className="list">
            <Header>
                <h3>{props.title}</h3>
            </Header>
            <TypeList>
                {
                    props.children
                }
            </TypeList>
        </RoundedBox>
    );
}