import React, { Component } from 'react'

class LogoDisplay extends Component {
    render() {
        const styles = {
            container: {
                color: this.props.logo.color,
                fontSize: this.props.logo.fontSize + "pt",
                backgroundColor: this.props.logo.backgroundColor,
                borderColor: this.props.logo.borderColor,
                borderRadius: this.props.logo.borderRadius + "px",
                borderWidth: this.props.logo.borderWidth + "px",
                borderStyle: "solid",
                padding: this.props.logo.padding + "px",
                margin: this.props.logo.margin + "px",
                overflow: "auto",
                whiteSpace: "pre"
            }
        }
        return (
            <div style={{maxWidth:"max-content"}}>
                <div
                    style={styles.container}>
                    {this.props.logo.text.trim()}
                </div>
            </div>
        )
    }
}

export default LogoDisplay