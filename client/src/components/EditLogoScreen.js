import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import gql from "graphql-tag";
import { Query, Mutation } from "react-apollo";
import EditSidebar from './EditSidebar';

const GET_LOGO = gql`
    query logo($logoId: String) {
        logo(id: $logoId) {
            _id
            text
            color
            fontSize
            backgroundColor
            borderColor
            borderRadius
            borderWidth
            padding
            margin
        }
    }
`;

const UPDATE_LOGO = gql`
    mutation updateLogo(
        $id: String!,
        $text: String!,
        $color: String!,
        $fontSize: Int!,
        $backgroundColor: String!,
        $borderColor: String!,
        $borderRadius: Int!,
        $borderWidth: Int!,
        $padding: Int!,
        $margin: Int!,) {
            updateLogo(
                id: $id,
                text: $text,
                color: $color,
                fontSize: $fontSize,
                backgroundColor: $backgroundColor,
                borderColor: $borderColor,
                borderRadius: $borderRadius,
                borderWidth: $borderWidth,
                padding: $padding,
                margin: $margin,) {
                    lastUpdate
                }
        }
`;
//placeholder="Margin" defaultValue={data.logo.margin} />
class EditLogoScreen extends Component {
    render() {
        let text, color, fontSize, backgroundColor, borderColor, borderRadius, borderWidth, padding, margin;
        return (
            <Query query={GET_LOGO} variables={{ logoId: this.props.match.params.id }}>
                {({ loading, error, data }) => {
                    if (loading) return 'Loading...';
                    if (error) return `Error! ${error.message}`;
                    return (
                        <Mutation mutation={UPDATE_LOGO} key={data.logo._id} onCompleted={() => this.props.history.push(`/`)}>
                            {(updateLogo, { loading, error }) => (
                                <div className="container">
                                    <div className="panel panel-default">
                                        <div className="panel-heading">
                                            <h4><Link to="/">Home</Link></h4>
                                            <h3 className="panel-title">Edit Logo</h3>
                                        </div>
                                        <div className="panel-body">
                                            <form onSubmit={e => {
                                                e.preventDefault();
                                                updateLogo(
                                                    { variables:
                                                        {
                                                            id: data.logo._id,
                                                            text: text,
                                                            color: color,
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
                                                    logo={{
                                                        text: data.logo.text,
                                                        color: data.logo.color,
                                                        fontSize: data.logo.fontSize,
                                                        backgroundColor: data.logo.backgroundColor,
                                                        borderColor: data.logo.borderColor,
                                                        borderRadius: data.logo.borderRadius,
                                                        borderWidth: data.logo.borderWidth,
                                                        padding: data.logo.padding,
                                                        margin: data.logo.margin
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
                }}
            </Query>
        );
    }
}

export default EditLogoScreen;