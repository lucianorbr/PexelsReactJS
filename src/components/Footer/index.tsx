import React from 'react';

import { Container, Line, PexelsLogo } from './style';

const Footer: React.FC = () => {
    return (
        <Container>
            <Line />
            <ul>
                <li>
                    <a href="#">Home</a>
                </li>
                <li>
                    <a href="https://www.pexels.com/pt-br/collections/old-photos-3h3ftxp/">Discover</a>
                </li>
                <li>
                    <a href="https://www.pexels.com/pt-br/videos/">Videos</a>
                </li>
                <li>
                    <a href="https://www.pexels.com/pt-br/classificacao/">Leaderboard</a>
                </li>
                <li>
                    <a href="https://www.pexels.com/pt-br/challenges/">Challenges</a>
                </li>
            </ul>
            <PexelsLogo />
        </Container>
    );
};

export default Footer;