import React from 'react';


const logErrorToMyService = () => console.warn('Ошибка (Сработал предохранитель)');


class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
      }

      static getDerivedStateFromError(error) {    
              
        return { hasError: true };  
    }

    componentDidCatch(error, errorInfo){
        logErrorToMyService(error, errorInfo)
    }

    render(){
        if (this.state.hasError){
            return <h1>Ошибка (Сработал предохранитель)</h1>;
        }
        return this.props.children;
    }
}

export default ErrorBoundary;