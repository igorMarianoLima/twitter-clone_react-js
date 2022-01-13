import { HomeIcon, SearchIcon, NotificationIcon, MessageIcon } from '../Icon/';

import './style.scss';

export function BottomMenu()
{
    return(
        <footer className="bottom-menu">
            <nav>
                <ul>
                    <li>
                        <button className="active">
                            <HomeIcon />
                        </button>
                    </li>
                    <li>
                        <button>
                            <SearchIcon />
                        </button>
                    </li>
                    <li>
                        <button>
                            <NotificationIcon altIcon />
                        </button>
                    </li>
                    <li>
                        <button>
                            <MessageIcon altIcon />
                        </button>
                    </li>
                </ul>
            </nav>
        </footer>
    );
}