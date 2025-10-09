'use client';

import { IconRocket } from '@tabler/icons-react';
import React from 'react';

import { Container } from '../container';
import { Heading } from '../elements/heading';
import { Subheading } from '../elements/subheading';
import { FeatureIconContainer } from '../about-me/feature-icon-container';
import { Card } from './card';

export const Experience = ({
  heading,
  sub_heading,
  steps,
}: {
  heading: string;
  sub_heading: string;
  steps: any;
}) => {
  return (
    <div id="experience-section">
      <Container className="py-20 max-w-7xl mx-auto  relative z-40">
        <FeatureIconContainer className="flex justify-center items-center overflow-hidden">
          <IconRocket className="h-6 w-6 text-white" />
        </FeatureIconContainer>
        <Heading className="pt-4">{heading}</Heading>
        <Subheading className="max-w-3xl mx-auto">{sub_heading}</Subheading>
        <Card
          title={'Cronos Labs'}
          description={
            'Led advanced DeFi protocol development across DEX, lending, stablecoin, and NFT platforms, driving growth with scalable frontend and agentic workflows.'
          }
          index={2025}
          key={'card' + 2025}
        />
        <Card
          title={'Crypto.com'}
          description={
            'Shaped the Cronos blockchain ecosystem, spearheading frontend engineering for DeFi and NFT ventures that scaled to global adoption.'
          }
          index={2021}
          key={'card' + 2021}
        />
        <Card
          title={'Hongkong Post'}
          description={
            'Delivered mission-critical eServices for the Information Systems Division, modernizing public services with secure, accessible digital platforms.'
          }
          index={2018}
          key={'card' + 2018}
        />
        <Card
          title={'Early Career'}
          description={
            'Built and delivered POS, ERP, and custom business applications for clients in retail and software industries, establishing a foundation in C# .NET full-stack development.'
          }
          index={2014}
          key={'Earlier'}
        />
      </Container>
    </div>
  );
};
