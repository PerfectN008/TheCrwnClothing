import React from 'react';

import CollectionItem from '../CollectionItem/CollectionItem';
import { CollectionPreviewContainer, TitleContainer, PreviewContainer } from './PreviewCollection.Styles'

const PreviewCollection = ({ title, items }) => (
    <CollectionPreviewContainer>
        <TitleContainer>{title.toUpperCase()}</TitleContainer>
        <PreviewContainer>
            {items
                .filter((item,idx)=> idx<4)
                .map(item => (
                    <CollectionItem key={item.id} item={item} />
                ))}
        </PreviewContainer>
    </CollectionPreviewContainer>
)

export default PreviewCollection