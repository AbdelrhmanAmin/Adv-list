import React, { Component } from'react';
import './style.css';
import { get } from './../../utils';

class CountriesList extends Component{
  state = { countries: [] }
  componentDidMount(){
    fetch('https://raw.githubusercontent.com/mledoze/countries/master/countries.json')
    .then(data => data.json())
    .then(countries => {
      this.setState({ countries})
    });
  }
  show = (country) => {
    const { searchTerms } = this.props;
    let show = true;
    /** loop through and exit on the first false match **/
    return Object.entries(searchTerms).every((entry) => {
      const [ searchKey, searchTerm ] = entry;
      const value = get(country, searchKey, '').toString().toLowerCase();
      if(!value.includes(searchTerm)){
        show = false;
      }

      return show;
    })}
    render() {
      const { countries } = this.state;
      return (
        <div className="card">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Capital</th>
                <th>Region</th>
                <th>Sub-Region</th>
              </tr>
            </thead>
            <tbody>
            {countries.map( country =>
              this.show(country) && <tr key={country.name.common}>
                <td>{country.name.common}</td>
                <td>{country.capital}</td>
                <td>{country.region}</td>
                <td>{country.subregion}</td>
              </tr>

            )}
            </tbody>
          </table>
         </div>
      );
  }
}
export default CountriesList;
