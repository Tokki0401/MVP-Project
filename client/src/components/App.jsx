import React from 'react';
import ReactDOM from 'react-dom';

import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todayData: []
    }
  }

  componentDidMount() {
    getRequest(getTodayDate());
  }

  getRequest(today) {
    const data = { today };
    axios.get('/covid/domestic', data)
    .then(prevCovidData => {
      this.setState({
        todayData: prevCovidData
      })
    })
  }

  getTodayDate() {
    var timeNow = new Date();

    var year = String(timeNow.getFullYear());
    var mm = String(timeNow.getMonth() + 1).padStart(2, '0');
    var dd = String(timeNow.getDate()).padStart(2, '0');

    return Number(year + mm + dd);
  }

  render() {
    return (
      <div>
        <div>Hey there</div>
      </div>
    )
  }
}

export default App;