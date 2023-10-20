import type { Schema, Attribute } from '@strapi/strapi';

export interface BlocksHero extends Schema.Component {
  collectionName: 'components_blocks_heroes';
  info: {
    displayName: 'Hero';
    description: '';
  };
  attributes: {
    Images: Attribute.Media;
    header: Attribute.Component<'shared.header'>;
    text: Attribute.String;
  };
}

export interface BlocksRelatedFilms extends Schema.Component {
  collectionName: 'components_blocks_related_films';
  info: {
    displayName: 'relatedFilms';
  };
  attributes: {
    header: Attribute.Component<'shared.header'>;
  };
}

export interface GlobalNavigation extends Schema.Component {
  collectionName: 'components_global_navigations';
  info: {
    displayName: 'Navigation';
  };
  attributes: {
    links: Attribute.Component<'shared.link', true>;
  };
}

export interface SharedCard extends Schema.Component {
  collectionName: 'components_shared_cards';
  info: {
    displayName: 'Card';
  };
  attributes: {
    title: Attribute.String;
    text: Attribute.String;
    image: Attribute.Media;
  };
}

export interface SharedHeader extends Schema.Component {
  collectionName: 'components_shared_headers';
  info: {
    displayName: 'Header';
  };
  attributes: {
    label: Attribute.String;
    title: Attribute.String;
  };
}

export interface SharedLink extends Schema.Component {
  collectionName: 'components_shared_links';
  info: {
    displayName: 'Link';
  };
  attributes: {
    href: Attribute.String & Attribute.Required;
    label: Attribute.String & Attribute.Required;
    target: Attribute.Enumeration<['_blank']>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'blocks.hero': BlocksHero;
      'blocks.related-films': BlocksRelatedFilms;
      'global.navigation': GlobalNavigation;
      'shared.card': SharedCard;
      'shared.header': SharedHeader;
      'shared.link': SharedLink;
    }
  }
}
