import React from 'react';
import styles from './style.module.css';

export class ErrorComponent extends React.Component {
    state = {
        hasError: false,
        message: '',
    }
    
    //static getDerivedStateFromError(error) // Se puede usar cualquiera de los 2, para interactuar con los errores
    // Para insectar errores
    componentDidCatch(error) { 
        this.setState({
            hasError: true,
            message: error.message,
        });
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className={styles.error}>
                    {this.state.message}
                </div>
            );
        }

        return this.props.children;
    }
}

// Esto es un HOC (High Order Component)
export const withError = (Component) => {
    class ErrorComponent extends React.Component {
        state = {
            hasError: false,
            message: '',
        }

        componentDidCatch(error) {
            this.setState({
                hasError: true,
                message: error.message,
            });
        }

        retry = () => {
            this.setState({
                hasError: false,
                message: '',
            });
        }

        render() {
            console.log(this.state);

            if (this.state.hasError) {
                return (
                    <div className={styles.error}>
                        {this.state.message}
                        <button
                            onClick={this.retry}
                        >
                            Retry
                        </button>
                    </div>
                );
            }

            return <Component {...this.props} />;
        }
    }

    // .displayName = Es para que salga el nombre correcto en las herramientas de desarrollo
    ErrorComponent.displayName = `withError(${Component.displayName || Component.name})`;

    return ErrorComponent;
};
