import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import Button from '../../components/button/Button';
import { fetchDoseDetailRequest, updateDoseDetailRequest } from '../../store/home/actions';

import styles from './History.module.scss';
class History extends React.Component {
    static getDerivedStateFromProps(nextProps, prevState) {
        let countryDetail = {};
        let cityList = [];
        let selectedBreadCrumCity = prevState.selectedBreadCrumCity;
        let selectedCountry = {};
        let selectedState = {};
        let selectedCity = prevState.selectedCity;
        const { cityName, countryName, stateName } = nextProps.match.params;
        if (nextProps.countryDetail) {
            countryDetail = JSON.parse(JSON.stringify(nextProps.countryDetail));
            if (countryName) {
                selectedCountry = countryDetail[countryName];
            }
            if (selectedCountry && stateName) {
                selectedState = selectedCountry[stateName];
            }
            let length = prevState.selectedCity && _.keys(prevState.selectedCity).length;
            if (selectedState && cityName && !length) {
                selectedCity = selectedState[cityName];
            }
        }
        if (_.keys(nextProps.countryDetail).length && stateName && countryName && cityName) {
            let selectedState = JSON.parse(JSON.stringify(nextProps.countryDetail[countryName][stateName]));
            if (selectedState) {
                cityList = _.keys(selectedState);
            }
        }
        if (cityName && !selectedBreadCrumCity) {
            selectedBreadCrumCity = cityName
        }
        return {
            countryDetail,
            cityList,
            selectedBreadCrumCity,
            selectedState,
            selectedCountry,
            selectedCity
        }
    }

    state = {
        selectedCountry : {},
        selectedState: {},
        selectedCity: {},
        cityList: [],
        selectedBreadCrumCity: '',
        countryDetail: {},
        enableSubmit: false,
        showError: false
    }

    componentDidMount() {
        this.props.fetchSiteList();
    }

    goBack = () => {
        this.props.history.push('/');
    }

    changeHandler = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        let { selectedCity, enableSubmit } = this.state;
        selectedCity[nam] = parseInt(val);
        if (enableSubmit) {
            this.setState({
                selectedCity: selectedCity
            });
        } else {
            this.setState({
                selectedCity: selectedCity,
                enableSubmit: true
            });
        }
        
    };

    handleSelect = (selectedCity) => {
        if (this.state.selectedBreadCrumCity !== selectedCity) {
            this.setState({
                selectedBreadCrumCity: selectedCity,
                selectedCity: this.state.selectedState[selectedCity],
                enableSubmit: false
            });
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const { selectedCity } = this.state;
        const { countryName, stateName } = this.props.match.params;
        this.props.updateDoseDetail(countryName, stateName, selectedCity);
    }

    render() {
        const { cityList,
            selectedBreadCrumCity,
            selectedCity,
            enableSubmit
        } = this.state;
        return (
            <main className={`${styles.history}`}>
                <section className={`${styles.breadCrumSection}`}>
                    <div className="row align-items-center">
                        <div className="col-12 col-md-8 col-lg-10">
                            <nav aria-label="breadcrumb">
                                <ol className={`${styles.breadCrumParent} breadcrumb`}>
                                    {
                                        cityList && cityList.length ? (
                                            cityList.map((value, index) => (
                                                <li 
                                                    className={`${styles.bcItem} breadcrumb-item ${selectedBreadCrumCity === value ? 'active' : ''}`} aria-current={`${selectedBreadCrumCity === value ? "page" : ""}`}
                                                        onClick={() => { this.handleSelect(value); }} key={index}>
                                                        <span className={`${selectedBreadCrumCity === value ? 'active' : ''} ${styles.breadCrumValue} c-pointer`}>
                                                        {value}
                                                        </span>
                                                </li>
                                            ))
                                        ) : 'No resutls!'
                                    }
                                </ol>
                            </nav>
                        </div>
                        <div className="col-12 col-md-3 col-lg-2  mb-3">
                            <span className={`${styles.goBack} c-pointer`} onClick={this.goBack}>
                                Go Back
                            </span>
                        </div>
                    </div>
                </section>
                <section className={`${styles.formSection}`}>
                    {
                        selectedCity && _.keys(selectedCity).length ? (
                            <form onSubmit={this.handleSubmit}>
                                <div className="row">
                                    <div className="form-group col-12 col-md-6">
                                        <label htmlFor="displayName">Name</label>
                                        <input
                                            readOnly={true}
                                            id={`displayName`}
                                            type="text"
                                            className="form-control"
                                            name="displayName"
                                            value={selectedCity.displayName}
                                        />
                                    </div>
                                    <div className="form-group col-12 col-md-6">
                                        <label htmlFor="population">Population</label>
                                        <input
                                            id={`population`}
                                            type="number"
                                            className="form-control"
                                            name="population"
                                            value={selectedCity.population}
                                            onChange={this.changeHandler}
                                        />
                                    </div>
                                    <div className="form-group col-12 col-md-6">
                                        <label htmlFor="availableDoses">Available Doses</label>
                                        <input
                                            id={`availableDoses`}
                                            type="number"
                                            className="form-control"
                                            name="availableDoses"
                                            value={selectedCity.availableDoses}
                                            onChange={this.changeHandler}
                                        />
                                    </div>
                                    <div className="form-group col-12 col-md-6">
                                        <label htmlFor="vaccinated">Vaccinated</label>
                                        <input
                                            id={`vaccinated`}
                                            type="number"
                                            className="form-control"
                                            name="vaccinated"
                                            value={selectedCity.vaccinated}
                                            onChange={this.changeHandler}
                                        />
                                    </div>
                                    <div className="form-group col-12 col-sm-6 col-lg-3">
                                        <Button
                                            type="submit"
                                            className={`btn btn-primary mb-2 `}
                                            name="Submit"
                                            disable={enableSubmit}
                                        >
                                        </Button>
                                    </div>
                                </div>
                            </form>
                        ) : 'No Result'
                    }
                </section>
            </main>
        )
    }
}

const mapStateToProps = (state) => ({
    pending: state.home.pending,
    countryDetail: state.home.countryDetail,
    statesList: state.home.statesList,
    error: state.home.error,
});
  
  /* eslint-disable @typescript-eslint/no-explicit-any*/
const mapDispatchToProps = (dispatch) => ({
    fetchSiteList: () => dispatch(fetchDoseDetailRequest()),
    updateDoseDetail: (countryName, stateName, cityDetail) => dispatch(updateDoseDetailRequest(countryName, stateName, cityDetail))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(History));