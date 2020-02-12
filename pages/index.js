import React from 'react';
import { Modal, Button } from 'semantic-ui-react'
import { Header } from 'semantic-ui-react'
import Head from '../components/head';
import styles from './styles.module.css'

export default () => (
  <div className={styles.centered}>
    <Head title="Home" />
    <Header as='h1'>Hello World</Header>
    <Button>Click Here</Button>
  </div>
)
