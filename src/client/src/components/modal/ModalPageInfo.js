import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import marked from 'marked';

import {
    Modal, Input, ListGroup, ListGroupItem,
    Badge, PanelGroup, Tabs, Tab,
    Grid, Row, Col, Panel, Button, Nav,
    CollapsibleNav, Navbar, DropdownButton,
    MenuItem, NavItem
} from 'react-bootstrap';

import * as ModalPageInfoActions from '../../actions/modalPageInfoActions.js';

import FormPageName from './FormPageName.js';
import AceEditor from '../element/AceEditor.js';

const pageHelpText = marked('#### Meta info\n\nMeta info is an array of values.\n\n ' +
    '**Example:**\n\n ```\n[\n\t{ "name": \"some name\", "content": \"some property value\" },\n\t' +
    '{ "property": \"some name\", "content": \"some property value\" }\n]\n```\n\nPage\'s meta info will be placed ' +
    'into meta tags in HTML file after generation of static content of the page.\n\n ' +
    '#### Script\n\nIf you need to include into HTML body some script, for example, ' +
    'Google analytics, this code will be included as first child in HTML body.');

class ModalPageInfo extends Component {

    constructor(props) {
        super(props);
        this.handleClose = this.handleClose.bind(this);
        this.handleSave = this.handleSave.bind(this);
    }

    handleClose(e){
        e.stopPropagation();
        e.preventDefault();
        this.props.hideModalPageInfo();
    }

    handleSave(e){
        e.stopPropagation();
        e.preventDefault();
        const opts = this.refs.formPageName.getOptions();
        const pageScript = this.refs.pageScriptEditor.getSourceCode();
        const pageProps = this.refs.pagePropsEditor.getSourceCode();
        this.props.saveModalPageInfo(opts.pageName, opts.pagePath, opts.pageTitle,  pageProps, pageScript);
    }

    render(){

        let tabPanes = [];
        tabPanes.push(
            <Tab
                key={tabPanes.length + 1}
                eventKey={tabPanes.length + 1}
                title='Page component'>

                <FormPageName
                    ref="formPageName"
                    pageName={this.props.pageName}
                    pagePath={this.props.pagePath}
                    pageTitle={this.props.pageTitle}  />
            </Tab>
        );

        tabPanes.push(
            <Tab
                key={tabPanes.length + 1}
                eventKey={tabPanes.length + 1}
                title='Meta info'>

                <AceEditor
                    ref='pagePropsEditor'
                    sourceCode={this.props.pageProps}
                    style={{marginTop: '1em', height: '400px', width: '100%'}}/>

            </Tab>
        );

        tabPanes.push(
            <Tab
                key={tabPanes.length + 1}
                eventKey={tabPanes.length + 1}
                title='Script (analytics, etc.)'>

                <AceEditor
                    ref='pageScriptEditor'
                    sourceCode={this.props.pageScript}
                    mode="ace/mode/html"
                    style={{marginTop: '1em', height: '400px', width: '100%'}}/>

            </Tab>
        );

        tabPanes.push(
            <Tab
                key={tabPanes.length + 1}
                eventKey={tabPanes.length + 1}
                title='Read Me'>

                <div style={{height: '400px', marginTop: '1em', width: '100%', overflow: 'auto'}}>
                    <div style={{width: '100%', padding: '0 2em 0 2em'}}>
                        <div dangerouslySetInnerHTML={{__html: pageHelpText}} >
                        </div>
                    </div>
                </div>
            </Tab>
        );

        //let wizardElement = this.props.isOpen ? <WizardGenerateComponent /> : null;
        return (
            <Modal show={this.props.isOpen}
                   onHide={this.props.hideModalPageInfo}
                   dialogClassName='umy-modal-overlay'
                   backdrop={true}
                   keyboard={true}
                   bsSize='medium'
                   ref='dialog'
                   animation={true}>
                {/*<Modal.Header closeButton={false} aria-labelledby='contained-modal-title'>
                 <Modal.Title id='contained-modal-title'>Generate component's source code</Modal.Title>
                 </Modal.Header>*/}
                <Modal.Body>
                    <Tabs defaultActiveKey={1}>
                        {tabPanes}
                    </Tabs>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.handleClose}>Cancel</Button>
                    <Button onClick={this.handleSave} bsStyle="primary">Save changes</Button>
                </Modal.Footer>
            </Modal>
        );
    }

}


ModalPageInfo.defaultProps = {
    onHide: null
};

function mapStateToProps(state) {
    return state.modalPageInfo;
}

export default connect(
    mapStateToProps,
    ModalPageInfoActions
)(ModalPageInfo);

