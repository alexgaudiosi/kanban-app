import React from 'react';
import uuid from 'uuid';
import Notes from './Notes';


export default class App extends React.component {

  constructor(props) {
    super(props);

    this.state = {
      notes: [
        {
          id: uuid.v4(),
          task: 'Learn React'
        },
        {
          id: uuid.v4(),
          task: 'Do Laundry'
        }
      ]
    }
  }

}