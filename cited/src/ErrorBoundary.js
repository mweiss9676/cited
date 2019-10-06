import React, { Component } from 'react';
import { Alert } from 'antd';

class ErrorBoundary extends Component {
    state = {
        error: null,
        errorInfo: null,
    }

    componentDidCatch(error, errorInfo) {
        this.setState({
            error: error,
            errorInfo: errorInfo,
        });

        console.error(error);
        console.error(errorInfo);
    }

    onAlertClose = () => {
        this.setState({
            error: null,
            errorInfo: null,
        })
    }

    render() {
        const { error, errorInfo } = this.state;

        if (errorInfo) {
            return (
                <Alert 
                    message="Error"
                    description={
                        <div style={{ whiteSpace: 'pre-wrap' }}>
                            {error && error.toString()}
                            <br />
                            {errorInfo.componentStack}
                        </div>
                    }
                    type="error"
                    showIcon
                    onClose={this.onAlertClose}
                />
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;