import React from 'react';
import {
  Button,
  Divider,
  TopBar,
  TopBarSection,
  TopBarTitle,
} from '@duik/it';
import { NavBurger, SelectLanguage } from '../../components'
import { useCurrentLanguage, useLocalStorage } from '../../utils';
import siteConfing from '../../site.config';

import './LayoutNavbar.module.scss'

const LayoutNavbar = ({
  menuIsVisible,
  menuHandleToggle,
}: any) => {
  const {currentLanguage, setCurrentLanguage} = useCurrentLanguage();

  return (
    <TopBar className="main-top-bar">
      <Button
        className={'main-top-bar-menu-btn'}
        onClick={menuHandleToggle}
      >
        <NavBurger isOpen={menuIsVisible} />
      </Button>
      <TopBarSection>
        <TopBarTitle>
          <a
            href={siteConfing.metadata.homepageUrl}
            style={{
              display: 'flex',
              color: "#333"
            }}
          >
            Tea App Flutter
          </a>
        </TopBarTitle>
      </TopBarSection>
      <TopBarSection  className="main-top-bar-right-section">
        {/* <TextField
          leftEl={<Icon>search_left</Icon>}
          placeholder="Type to search..."
        /> */}
        {/* <div
          style={{
            margin: 0,
            width: '20px'
          }}
        >
        </div>
        <SelectLanguage
          currentLanguage={currentLanguage}
          onOptionClick={({ value: language}) => {
            setCurrentLanguage(language);
          }}
        />
        <div
          style={{
            margin: 0,
            height: '36px'
          }}
        >
          <Divider vertical margin />
        </div> */}
        <Button
          Component="a"
          href={siteConfing.metadata.githubRepoUrl}
          target="_blank"
          primary
        >
          GitHub
        </Button>
      </TopBarSection>
    </TopBar>
  );
};

export default LayoutNavbar
