import React from 'react';
import { BackgroundHeader, Title, ToggleMode } from './index.styles';

function Header() {
  return (
    <BackgroundHeader>
        <Title>Where in the world?</Title>
        <ToggleMode>
          <i className="far fa-moon" />
        </ToggleMode>
    </BackgroundHeader>
  );
}

export default Header;
