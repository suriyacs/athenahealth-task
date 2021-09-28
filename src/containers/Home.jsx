import React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import { withRouter } from 'react-router';

import { fetchSiteListRequest } from '../store/home/actions';
// import { AppState } from '../../store/rootReducer';
import Button from '../components/button/Button';
import CustomSelect from '../components/custom-select/CustomSelect';

import styles from './Home.module.scss';
class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    options: [
      {
        label: 'BGNV',
        value: 'bgnv',
      },
      {
        label: 'CNS',
        value: 'cns',
      },
      {
        label: 'Care for life Hospice',
        value: 'careforlifehospipce',
      },
      {
        label: 'All Care Provider',
        value: 'allcareprovider',
      },
    ],
    selectedValue: 'cns',
    toggleView: false
  };

  componentDidMount() {
    this.props.fetchSiteList();
  }

  createNewBootstrapRequest = () => {
    // TODO: Redirect to create bootstrap page
    console.log('Function executed!!');
  };

  viewAllHistory = () => {
    this.props.history.push('/history');
  };

  toggleView = () => {
    this.setState({toggleView: !this.state.toggleView});
  }

  render() {
    const { pending, sites } = this.props;
    return (
      <main style={{ padding: '15px' }} className="text-primary">
        <section className={`${styles.homeSection}`}>
          <div className={`${styles.parentRow} row`}>
            <div className={`${styles.buttonSection} col-12`}>
              <div className="row align-items-center mb-4">
                <div className="col-sm-6 col-lg-5 col-xl-4">
                  {/* <Button
                    name="Create Bootstrap Request"
                    callBack={this.createNewBootstrapRequest}
                    icon="bi bi-plus-circle"
                  /> */}
                  <CustomSelect
                    options={this.state.options}
                    placeholder="Select Site"
                    onChange={this.onChangeSelect}
                    value={this.state.selectedValue}
                  />
                </div>
                <div className="col-xs-6 col-sm-4 col-lg-3">
                  <CustomSelect
                    options={this.state.options}
                    placeholder="Select Site"
                    onChange={this.onChangeSelect}
                    value={this.state.selectedValue}
                  />
                  {/* <button
                    type="button"
                    className={`${styles.viewHistory} btn btn-primary`}
                    onClick={this.viewAllHistory}
                  >
                    View all History
                  </button> */}
                </div>
                <div className="col-xs-6 col-sm-4 col-lg-3">
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
            <div className={`${styles.searchSection} col-12 mb-3`}>
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search site/stack"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
                <i
                  className={`${styles.searchIcon} bi bi-search position-absolute`}
                ></i>
              </div>
            </div>
            {this.props.error ? (
              <div id="error" className="col error">
                Something went wrong!
              </div>
            ) : (
              <div className="col-12">
                <table
                  className={`${styles.tableSection} table table-bordered`}
                >
                  <thead>
                    <tr className={`${styles.header}`}>
                      <th scope="col">Site</th>
                      <th scope="col">Stack</th>
                      <th scope="col">RDS</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Mark</td>
                      <td>Otto</td>
                      <td>@mdo</td>
                    </tr>
                    <tr>
                      <td>Mark</td>
                      <td>Otto</td>
                      <td>@mdo</td>
                    </tr>
                    <tr>
                      <td>Mark</td>
                      <td>Otto</td>
                      <td>@mdo</td>
                    </tr>
                  </tbody>
                </table>
                {/* <ul id="list-group" className="list-group">
                  {sites && sites.length
                    ? sites.map((site, index) => (
                        <li className="list-group-item" key={site.id}>
                          {++index}. {site.first_name}
                        </li>
                      ))
                    : pending && <div id="no-result">No results found!</div>}
                </ul> */}
              </div>
            )}
          </div>
        </section>
      </main>
    );
  }
}

const mapStateToProps = (state) => ({
  pending: state.home.pending,
  sites: state.home.siteList,
  error: state.home.error,
});

/* eslint-disable @typescript-eslint/no-explicit-any*/
const mapDispatchToProps = (dispatch) => ({
  fetchSiteList: () => dispatch(fetchSiteListRequest()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));
