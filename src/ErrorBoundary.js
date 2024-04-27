import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {FontAwesomeIcon, faHouse} from './index'

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: '',
            errorInfo: ''
        };
    }

    componentDidCatch(error, errorInfo) {
        this.setState({
            error: error,
            errorInfo: errorInfo
        })
    }

    render() {
        if (this.state.errorInfo) {
            return (
                <div>
                    <Card>
                        <Card.Header>How can someone be so wrong ? </Card.Header>
                        <Card.Link as={Link}>Return to your home <FontAwesomeIcon icon={faHouse} /> </Card.Link>


                        <span className='fs-2 text-center fw-lg'> Whoa! You're on moon right now. How're you feeling ? </span>
                        <small className='text-muted text-center'>Wanna know what happened ? <br /> dig down little more then.</small>
                        <details style={{ whiteSpace: 'pre-wrap' }}>
                            {this.state.error && this.state.error.toString()}
                            <br />
                            {this.state.errorInfo.componentStack}
                        </details>
                    </Card>
                </div>
            );
        } else {
            return this.props.children;
        }
    }
}

ErrorBoundary.propTypes = {
    children: PropTypes.node,
    error: PropTypes.object,
    errorInfo: PropTypes.string
};

export default ErrorBoundary;
