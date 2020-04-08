import React, { Component } from 'react';
import LogoDisplay from './LogoDisplay';

class EditSidebar extends Component {
    constructor(props) {
        super(props);
        this.state = this.props.logo;
    }

    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value});
    }
    
    render() {
        return (
            <div className="container row">
                <div className="col-sm-3">
                    <div className="form-group">
                        <label htmlFor="text">Text:</label>
                        <input type="text" className="form-control" name="text" onChange={this.handleChange} 
                        placeholder="Text" value={this.state.text} ref={this.props.textRef}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="color">Color:</label>
                        <input type="color" className="form-control" name="color" onChange={this.handleChange} 
                        placeholder="Color" value={this.state.color} ref={this.props.colorRef}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="fontSize">Font Size:</label>
                        <input type="number" min="4" max="150" className="form-control" name="fontSize" onChange={this.handleChange} 
                        placeholder="Font Size" value={this.state.fontSize} ref={this.props.fontSizeRef}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="backgroundColor"> Background Color:</label>
                        <input type="color" className="form-control" name="backgroundColor" onChange={this.handleChange} 
                        placeholder="Background Color" value={this.state.backgroundColor} ref={this.props.backgroundColorRef}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="borderColor"> Border Color:</label>
                        <input type="color" className="form-control" name="borderColor" onChange={this.handleChange} 
                        placeholder="Border Color" value={this.state.borderColor} ref={this.props.borderColorRef}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="borderRadius">Border Radius:</label>
                        <input type="number" min="0" max="100" className="form-control" name="borderRadius" onChange={this.handleChange} 
                        placeholder="Border Radius" value={this.state.borderRadius} ref={this.props.borderRadiusRef}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="borderWidth">Border Width:</label>
                        <input type="number" min="0" max="100" className="form-control" name="borderWidth" onChange={this.handleChange} 
                        placeholder="Border Width" value={this.state.borderWidth} ref={this.props.borderWidthRef}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="padding">Padding:</label>
                        <input type="number" min="0" max="100" className="form-control" name="padding" onChange={this.handleChange} 
                        placeholder="Padding" value={this.state.padding} ref={this.props.paddingRef}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="margin">Margin:</label>
                        <input type="number" min="0" max="100" className="form-control" name="margin" onChange={this.handleChange} 
                        placeholder="Margin" value={this.state.margin} ref={this.props.marginRef}/>
                    </div>
                </div>
                <div className="col-sm-9">
                    <LogoDisplay logo = {this.state}/>
                </div>
            </div>
        )
    }
}

export default EditSidebar