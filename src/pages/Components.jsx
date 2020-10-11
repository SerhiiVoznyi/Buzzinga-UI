'use strict'

import React from 'react'
import Title from '@bz/components/Title/Title'
import Box from '@bz/components/Box/Box'
import Block from '@bz/components/Block/Block'
import Card from '@bz/components/Card/Card'
import Divider from '@bz/components/Divider/Divider'
import Button from '@bz/components/Button/Button'

const Typography = () => (
  <Box primary rounded>
    <Title type='h1' title='Bazinga UI' />
    <p>Visual Design Style Guide</p>
    <Box flex>

      <Box secondary>
        <h3>Titles and Headers</h3>
        <Divider />
        <Block title='Title H1'>
          <Title type='h1' title='Headline H1 header' />
        </Block>
        <Block title='Title H2'>
          <Title type='h2' title='Headline H2 header' />
        </Block>
        <Block title='Title H3'>
          <Title type='h3' title='Headline H3 header' />
        </Block>
        <Block title='Title H4'>
          <Title type='h4' title='Headline H4 header' />
        </Block>
        <Block title='Title H5'>
          <Title type='h5' title='Headline H5 header' />
        </Block>
        <Block title='Title H6'>
          <Title type='h6' title='Headline H6 header' />
        </Block>
      </Box>
      <Box secondary>
        <h3>Secondary Titles</h3>
        <Divider />
        <Block title='Title H1'>
          <Title type='h1' title='Headline H1 header' secondary />
        </Block>
        <Block title='Title H2'>
          <Title type='h2' title='Headline H2 header' secondary />
        </Block>
        <Block title='Title H3'>
          <Title type='h3' title='Headline H3 header' secondary />
        </Block>
        <Block title='Title H4'>
          <Title type='h4' title='Headline H4 header' secondary />
        </Block>
        <Block title='Title H5'>
          <Title type='h5' title='Headline H5 header' secondary />
        </Block>
        <Block title='Title H6'>
          <Title type='h6' title='Headline H6 header' secondary />
        </Block>
      </Box>
      <Box secondary>
        <h3>Text</h3>
        <Divider />
        <Block title='Paragraph'>
          <p>
          In descriptive writing, the author does not tell the reader what was seen, felt, tested, smelled, or heard.
          Rather, he describes something that he experienced and, through his choice of words, makes it seem real.
          In other words, descriptive writing is vivid, colorful, and detailed.
          </p>
        </Block>
        <Block title='Quote'>
          <blockquote>
            <p>
            In descriptive writing, the author does not tell the reader what was seen, felt, tested, smelled, or heard.
            Rather, he describes something that he experienced and, through his choice of words, makes it seem real.
            In other words, descriptive writing is vivid, colorful, and detailed.
            </p>
          </blockquote>
        </Block>
      </Box>
      <Box secondary>
        <h3>Cards</h3>
        <Divider />
        <Card>
          <h3>Example</h3>
          In descriptive writing, the author does not tell the reader what was seen, felt, tested, smelled, or heard.
          Rather, he describes something that he experienced and, through his choice of words, makes it seem real.
          In other words, descriptive writing is vivid, colorful, and detailed.
        </Card>
      </Box>
      <Box secondary>
        <h3>Cards</h3>
        <Divider />
        <Card>
          <h3>Example</h3>
          In descriptive writing, the author does not tell the reader what was seen, felt, tested, smelled, or heard.
          Rather, he describes something that he experienced and, through his choice of words, makes it seem real.
          In other words, descriptive writing is vivid, colorful, and detailed.
        </Card>
      </Box>
      <Box secondary>
        <h3>Cards</h3>
        <Divider />
        <Card>
          <h3>Example</h3>
          In descriptive writing, the author does not tell the reader what was seen, felt, tested, smelled, or heard.
          Rather, he describes something that he experienced and, through his choice of words, makes it seem real.
          In other words, descriptive writing is vivid, colorful, and detailed.
        </Card>
      </Box>
    </Box>
  </Box>
)

const Components = (props) => {
  return (Typography())
}

export default Components
