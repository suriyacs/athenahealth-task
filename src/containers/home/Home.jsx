import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import { fetchDoseDetailRequest } from '../../store/home/actions';
import CustomSelect from '../../components/custom-select/CustomSelect';
import _ from 'lodash';
import BarChart from '../../components/bar-chart/BarChart';

import styles from './Home.module.scss';
class Home extends React.Component {

  static getDerivedStateFromProps(nextProps, prevState) {
    let countryOption = [];
    let stateOptionList = prevState.stateOptionList;
    let countryDetail  = {};
    let selectedStateValue = prevState.selectedStateValue;
    let selectedCountryValue = prevState.selectedCountryValue;
    let doseDetailByOption = prevState.doseDetailByOption;
    if (nextProps.countryList.length) {
      countryOption =  nextProps.countryList;
      if (!selectedCountryValue) {
        selectedCountryValue = countryOption[0].value;
      }
    }
    if (nextProps.statesList && prevState.stateOptionList && !_.keys(prevState.stateOptionList).length) {
      stateOptionList =  nextProps.countryList.length ? nextProps.statesList[nextProps.countryList[0].value] : [];
    }
    if (!prevState.selectedStateValue) {
      selectedStateValue = stateOptionList.length ? stateOptionList[0].value : '';
    }
    if (nextProps.countryDetail && selectedStateValue && selectedCountryValue) {
      countryDetail = nextProps.countryDetail;
    }

    if (nextProps.countryDetail[selectedCountryValue] && nextProps.countryDetail[selectedCountryValue][selectedStateValue] &&
      !prevState.doseDetailByOption) {
      doseDetailByOption = nextProps.countryDetail[selectedCountryValue][selectedStateValue];
    }
    return {
      countryOption,
      stateOptionList,
      countryDetail,
      selectedStateValue,
      selectedCountryValue,
      doseDetailByOption,
    }
  }

  state = {
    countryOption: this.props.countryList,
    stateOptionList: this.props.countryList.length ? this.props.statesList[this.props.countryList[0].value] : [],
    toggleView: false,
    countryDetail: {},
    selectedCountryValue: '',
    selectedStateValue: '',
    doseDetailByOption: ''
  };

  componentDidMount() {
    this.props.fetchSiteList();
  }

  viewHistory = (selectedCity) => {
    this.props.history.push(`/history/${this.state.selectedCountryValue}/state/${this.state.selectedStateValue}/city/${selectedCity.toLowerCase()}`);
  };

  toggleView = () => {
    this.setState({toggleView: !this.state.toggleView});
  }

  handleCountryChange = (selectedOption) => {
    if (selectedOption && selectedOption.value) {
      let respectiveStates = this.props.statesList[selectedOption.value];
      this.setState({
        stateOptionList: respectiveStates,
        selectedCountryValue: selectedOption.value,
        selectedStateValue: respectiveStates[0].value,
        doseDetailByOption: this.state.countryDetail[selectedOption.value][respectiveStates[0].value]
      })
    }
  }

  handleStateChange = (selectedOption) => {
    if (selectedOption && selectedOption.value) {
      this.setState({
        selectedStateValue: selectedOption.value,
        doseDetailByOption: this.state.countryDetail[this.state.selectedCountryValue][selectedOption.value]
      });
    }
  }

  render() {
    const {
      stateOptionList,
      countryOption,
      selectedCountryValue,
      selectedStateValue,
      doseDetailByOption
    } = this.state;
    return (
      <main className="text-primary p-4">
        <section className={`${styles.homeSection}`}>
          <div className={`${styles.parentRow} row`}>
            <div className={`${styles.buttonSection} col-12`}>
              <div className="row align-items-center mb-4">
                <div className="col-sm-6 col-lg-5 col-xl-4">
                  <CustomSelect
                    options={countryOption}
                    placeholder="Select Country"
                    onChange={this.handleCountryChange}
                    value={selectedCountryValue}
                  />
                </div>
                <div className="col-xs-6 col-sm-4 col-lg-3  mt-4 mt-sm-0">
                  <CustomSelect
                    options={stateOptionList}
                    placeholder="Select Site"
                    onChange={this.handleStateChange}
                    value={selectedStateValue}
                  />
                </div>
                <div className="col-xs-6 col-sm-4 col-lg-3 mt-4 mt-lg-0">
                  <div
                    className={`custom-control custom-switch ${styles.switchButton}`}
                  >
                    <input
                      id={`show_chart_view`}
                      type="checkbox"
                      className={`custom-control-input ${styles.customInput}`}
                      onChange={this.toggleView}
                      value={this.state.toggleView}
                      name={`show_chart_view`}
                    />
                    <label
                      className={`custom-control-label ${styles.customLabel}`}
                      htmlFor={`show_chart_view`}
                    >
                      Show Char View
                    </label>
                  </div>
                </div>
              </div>
            </div>
            {
              this.state.toggleView ?  (
                <div className="col-12">
                  <BarChart data={doseDetailByOption}/>
                </div>
              ) : (
                <div  className={`${styles.tableParent} col-12`}>
                  {this.props.error ? (
                    <div id="error" className="col error">
                      Something went wrong!
                    </div>
                  ) : (
                    <div>
                      <table
                        className={`${styles.tableSection} table table-bordered`}
                      >
                        <thead>
                          <tr className={`${styles.header}`}>
                            <th scope="col">City</th>
                            <th scope="col">Total Population</th>
                            <th scope="col">Vaccinated</th>
                            <th scope="col">Doses Available</th>
                            <th scope="col">Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          {
                            doseDetailByOption && _.keys(doseDetailByOption).length ? (
                              _.keys(doseDetailByOption).map((detail, index) => (
                                <tr key={index}>
                                  <td>{doseDetailByOption[detail].displayName}</td>
                                  <td>{doseDetailByOption[detail].population}</td>
                                  <td>{doseDetailByOption[detail].vaccinated}</td>
                                  <td>{doseDetailByOption[detail].availableDoses}</td>
                                  <td>
                                    <i className="bi bi-pencil-square c-pointer" onClick={() => { this.viewHistory(doseDetailByOption[detail].displayName); }}></i>
                                  </td>
                                </tr>
                              ))
                            ) : <tr><td>No Results Found!</td></tr>
                          }
                        </tbody>
                      </table>
                    </div>
                  )}
                </div>  
              )
            }
          </div>
        </section>
      </main>
    );
  }
}

const mapStateToProps = (state) => ({
  pending: state.home.pending,
  countryDetail: state.home.countryDetail,
  statesList: state.home.statesList,
  countryList: state.home.countryList,
  error: state.home.error,
});

/* eslint-disable @typescript-eslint/no-explicit-any*/
const mapDispatchToProps = (dispatch) => ({
  fetchSiteList: () => dispatch(fetchDoseDetailRequest()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));
