import React from 'react';
import { connect } from 'react-redux';
import { Sparklines, SparklinesLine } from 'react-sparklines';

class WeatherList extends React.Component{
  renderWeather(cityData){
    const name = cityData.city.name;
    const temps = cityData.list.map(weather => weather.main.temp)
    return(
      <tr key={ name }>
        <td>{ name }</td>
        <td>
          <Sparklines data={ temps } width={180} height={120}>
            <SparklinesLine color="blue" />
          </Sparklines>
        </td>
      </tr>
    );
  }

  render(){
    return(
      <table className='table table-hover'>
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature</th>
            <th>Pressure</th>
            <th>Humidity</th>
          </tr>
        </thead>
        <tbody>
          { this.props.weather.map(this.renderWeather) }
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = (state) => {
    return {
      weather: state.weather
    };
};

export default connect(mapStateToProps)(WeatherList);