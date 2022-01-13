import './style.scss';

import StickyBox from 'react-sticky-box';

import { SearchIcon } from '../Icon/';
import { RoundedList, ListItem } from '../List/';
import { AccountSuggestion } from '../Profile/';
import { Wrapper } from '../Layout/';

function TrendingTopic(props)
{
    return(
        <div className="trending-topic">
            <span>
                Assuntos do momento no Brasil
            </span>
            <strong>
                {props.topicName}
            </strong>
        </div>
    );
}

export function SideBar()
{
    return(
        <aside className="side-bar">
            <Wrapper>
                <div className="input_search">
                    <input placeholder="Buscar no Twitter" />
                    <SearchIcon />
                </div>
            </Wrapper>

            <StickyBox>
                <div>
                    <RoundedList title="Talvez você curta">
                        <ListItem>
                            <AccountSuggestion user={{
                                userName: "Hexalab",
                                tagName: "@hexalab_oficial"
                            }} />
                        </ListItem>

                        <ListItem>
                            <AccountSuggestion user={{
                                userName: "Anderson Cruz",
                                tagName: "@anderson_oficial"
                            }} />
                        </ListItem>
                    </RoundedList>

                    <RoundedList title="O que está acontecendo">
                        <ListItem>
                            <TrendingTopic topicName="GetzFood da HexaLab" />
                        </ListItem>
                        <ListItem>
                            <TrendingTopic topicName="GetzFood da HexaLab" />
                        </ListItem>
                        <ListItem>
                            <TrendingTopic topicName="GetzFood da HexaLab" />
                        </ListItem>
                        <ListItem>
                            <TrendingTopic topicName="GetzFood da HexaLab" />
                        </ListItem>
                    </RoundedList>
                </div>
            </StickyBox>
        </aside>
    );
}