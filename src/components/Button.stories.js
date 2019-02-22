import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Button from './Button';

storiesOf('Button', module)
.add('normal', () => <Button text={'Ejecutar'} clickHandler={action('Clicking!')} />)
.add('anormal', () => <Button text={'😍'} clickHandler={action('Clicking!')} />)

