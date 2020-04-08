import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

const GET_LOGOS = gql`
  {
    logos {
      _id
      text
      lastUpdate
    }
  }
`;

class HomeScreen extends Component {

    render() {
        return (
            <Query pollInterval={500} query={GET_LOGOS}>
                {({ loading, error, data }) => {
                    if (loading) return 'Loading...';
                    if (error) return `Error! ${error.message}`;

                    return (
                        <div className="container row" style={{padding: 20, marginLeft: "10%", marginRight: "10%"}}>
                            <div className="col-sm-4">
                                <h3>Recent Work</h3>
                                {data.logos.sort(function(logo1, logo2){
                                    return ((logo1.lastUpdate === logo2.lastUpdate) ? 0 : ((logo1.lastUpdate > logo2.lastUpdate) ? -1 : 1));
                                }).map((logo, index) => (
                                    <div key={index} className='home_logo_link'
                                        style={{ cursor: "pointer" }}>
                                        <Link to={`/view/${logo._id}`}>{logo.text}</Link>
                                    </div>
                                ))}
                            </div>
                            <div className="col-sm-8">
                                <div id="home_banner_container">
                                    GoLogoLo
                                </div>
                                <div>
                                    <Link id="add_logo_button" to="/create">Add Logo</Link>
                                </div>
                            </div>
                        </div>
                    );
                }
                }
            </Query >
        );
    }
}

export default HomeScreen;
