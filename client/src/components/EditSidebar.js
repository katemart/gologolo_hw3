import React, { Component } from 'react';
import LogoDisplay from './LogoDisplay';

class EditSidebar extends Component {
    constructor(props) {
        super(props);
        let logo = this.props.logo;
        Object.keys(logo).map((key, index) => logo[key] = logo[key] + '');
        this.state = logo;
    }

    getText(logoText) {
        return logoText;
    }

    handleChange = (event) => {
        if (event.target.name === "text") {
            const newText = this.getText(event.target.value);
            this.setState({ text: newText })
        } else {
            this.setState({ [event.target.name]: event.target.value });
        }
    }

    render() {
        const btnDisabledStyle = !(this.state.text.trim()) || !(this.state.fontSize >= 4 && this.state.fontSize <= 100) 
        || !(this.state.borderRadius.toString()) || !(this.state.borderRadius >= 0 && this.state.borderRadius <= 100)
        || !(this.state.borderWidth) || !(this.state.borderWidth >= 0 && this.state.borderWidth <= 100)
        || !(this.state.padding) || !(this.state.padding >= 0 && this.state.padding <= 100) 
        || !(this.state.margin) || !(this.state.margin >= 0 && this.state.margin <= 100)
        ? "default" : "pointer";
        const btnDisabledClass = !(this.state.text.trim()) || !(this.state.fontSize >= 4 && this.state.fontSize <= 100) 
        || !(this.state.borderRadius) || !(this.state.borderRadius >= 0 && this.state.borderRadius <= 100)
        || !(this.state.borderWidth) || !(this.state.borderWidth >= 0 && this.state.borderWidth <= 100)
        || !(this.state.padding) || !(this.state.padding >= 0 && this.state.padding <= 100) 
        || !(this.state.margin) || !(this.state.margin >= 0 && this.state.margin <= 100)
        ? "btn btn-secondary disabled" : "btn btn-success";
        return (
            <div className="container row">
                <div className="col-sm-3">
                    <div className="form-group">
                        <label htmlFor="text">Text:</label>
                        <input type="text" className="form-control" name="text" onChange={this.handleChange}
                            placeholder="Text" value={this.state.text} ref={this.props.textRef} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="color">Color:</label>
                        <input type="color" className="form-control" name="color" onChange={this.handleChange}
                            placeholder="Color" value={this.state.color} ref={this.props.colorRef} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="fontSize">Font Size:</label>
                        <input type="number" min="4" max="100" className="form-control" name="fontSize" onChange={this.handleChange}
                            placeholder="Font Size" value={this.state.fontSize} ref={this.props.fontSizeRef} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="backgroundColor"> Background Color:</label>
                        <input type="color" className="form-control" name="backgroundColor" onChange={this.handleChange}
                            placeholder="Background Color" value={this.state.backgroundColor} ref={this.props.backgroundColorRef} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="borderColor"> Border Color:</label>
                        <input type="color" className="form-control" name="borderColor" onChange={this.handleChange}
                            placeholder="Border Color" value={this.state.borderColor} ref={this.props.borderColorRef} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="borderRadius">Border Radius:</label>
                        <input type="number" min="0" max="100" className="form-control" name="borderRadius" onChange={this.handleChange}
                            placeholder="Border Radius" value={this.state.borderRadius} ref={this.props.borderRadiusRef} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="borderWidth">Border Width:</label>
                        <input type="number" min="0" max="100" className="form-control" name="borderWidth" onChange={this.handleChange}
                            placeholder="Border Width" value={this.state.borderWidth} ref={this.props.borderWidthRef} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="padding">Padding:</label>
                        <input type="number" min="0" max="100" className="form-control" name="padding" onChange={this.handleChange}
                            placeholder="Padding" value={this.state.padding} ref={this.props.paddingRef} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="margin">Margin:</label>
                        <input type="number" min="0" max="100" className="form-control" name="margin" onChange={this.handleChange}
                            placeholder="Margin" value={this.state.margin} ref={this.props.marginRef} required />
                    </div>
                    <button type="submit" className={btnDisabledClass} style={{cursor: btnDisabledStyle}}>Submit</button>
                </div>
                <div className="col-sm-9">
                    <LogoDisplay logo={this.state} />
                </div>
            </div>
        )
    }
}

export default EditSidebar