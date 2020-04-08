import React, { Component } from 'react';
import gql from "graphql-tag";
import { Mutation } from "react-apollo";
import { Link } from 'react-router-dom';
import EditSidebar from './EditSidebar';

const ADD_LOGO = gql`
    mutation AddLogo(
        $text: String!,
        $color: String!,
        $fontSize: Int!,
        $backgroundColor: String!
        $borderColor: String!,
        $borderRadius: Int!,
        $borderWidth: Int!,
        $padding: Int!,
        $margin: Int!,) {
        addLogo(
            text: $text,
            color: $color,
            fontSize: $fontSize,
            backgroundColor: $backgroundColor,
            borderColor: $borderColor,
            borderRadius: $borderRadius,
            borderWidth: $borderWidth,
            padding: $padding,
            margin: $margin) {
            _id
        }
    }
`;

class CreateLogoScreen extends Component {
    render() {
        let text, color, fontSize, backgroundColor, borderColor, borderRadius, borderWidth, padding, margin;
        return (
            <Mutation mutation={ADD_LOGO} onCompleted={() => this.props.history.push('/')}>
                {(addLogo, { loading, error }) => (
                    <div className="container">
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                <h4><Link to="/">Home</Link></h4>
                                <h3 className="panel-title">Create Logo</h3>
                            </div>
                            <div className="panel-body">
                                <form onSubmit={e => {
                                    e.preventDefault();
                                    addLogo(
                                        { variables: 
                                            { 
                                                text: text, 
                                                color: color.value, 
                                                fontSize: parseInt(fontSize),
                                                backgroundColor: backgroundColor,
                                                borderColor: borderColor,
                                                borderRadius: parseInt(borderRadius),
                                                borderWidth: parseInt(borderWidth),
                                                padding: parseInt(padding),
                                                margin: parseInt(margin)
                                            } 
                                        });
                                }}>
                                    <EditSidebar 
                                        logo = {{
                                            text: "goLogoLo Logo",
                                            color: "#000000",
                                            fontSize: "24",
                                            backgroundColor: "#a3bad9",
                                            borderColor: "#edea2e",
                                            borderRadius: "5",
                                            borderWidth: "5",
                                            padding: "5",
                                            margin: "10"
                                        }}
                                    />
                                    <button type="submit" className="btn btn-success">Submit</button>
                                </form>
                                {loading && <p>Loading...</p>}
                                {error && <p>Error :( Please try again</p>}
                            </div>
                        </div>
                    </div>
                )}
            </Mutation>
        );
    }
}

export default CreateLogoScreen;