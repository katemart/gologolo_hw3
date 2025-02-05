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
            lastUpdate
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
                    _id,
                    lastUpdate
                }
        }
`;

class EditLogoScreen extends Component {
    render() {
        let text, color, fontSize, backgroundColor, borderColor, borderRadius, borderWidth, padding, margin;
        return (
            <Query query={GET_LOGO} variables={{ logoId: this.props.match.params.id }}>
                {({ loading, error, data }) => {
                    if (loading) return 'Loading...';
                    if (error) return `Error! ${error.message}`;
                    return (
                        <Mutation mutation={UPDATE_LOGO} key={data.logo._id} onCompleted={(data => this.props.history.push(`/view/${data.updateLogo._id}`))}>
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
                                                if(!text.value.trim()) {
                                                    text.value = "";
                                                    return
                                                }
                                                updateLogo(
                                                    {
                                                        variables:
                                                        {
                                                            id: data.logo._id,
                                                            text: text.value,
                                                            color: color.value,
                                                            fontSize: parseInt(fontSize.value),
                                                            backgroundColor: backgroundColor.value,
                                                            borderColor: borderColor.value,
                                                            borderRadius: parseInt(borderRadius.value),
                                                            borderWidth: parseInt(borderWidth.value),
                                                            padding: parseInt(padding.value),
                                                            margin: parseInt(margin.value)
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
                                                    textRef={(textInput) => text = textInput}
                                                    colorRef={(colorInput) => color = colorInput}
                                                    fontSizeRef={(fontSizeInput) => fontSize = fontSizeInput}
                                                    backgroundColorRef={(backgroundInput) => backgroundColor = backgroundInput}
                                                    borderColorRef={(borderColorInput) => borderColor = borderColorInput}
                                                    borderRadiusRef={(radiusInput) => borderRadius = radiusInput}
                                                    borderWidthRef={(borderWidthInput) => borderWidth = borderWidthInput}
                                                    paddingRef={(paddingInput) => padding = paddingInput}
                                                    marginRef={(marginInput) => margin = marginInput}
                                                />
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