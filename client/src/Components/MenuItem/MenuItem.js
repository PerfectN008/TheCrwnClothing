import React from 'react';
import { withRouter } from 'react-router-dom';

import { MenuItemContainer, BackgroundImageContainer, ContentContainer, ContentTitle, ContentSubtitle } from './MenuItem.Styles';

const MenuItem = ({ title , imageUrl , size , linkUrl , history , match }) => (
    <MenuItemContainer size={size} onClick={() => history.push(`${match.url}${linkUrl}`)}>
        <BackgroundImageContainer className='background-image' imageUrl={imageUrl} />
        <ContentContainer>
            <ContentTitle>{title.toUpperCase()}</ContentTitle>
            <ContentSubtitle>Shop Now</ContentSubtitle>
        </ContentContainer>
    </MenuItemContainer>
    )


export default withRouter(MenuItem)