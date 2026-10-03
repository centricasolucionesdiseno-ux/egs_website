import { Component } from 'react';

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-azul-profundo mb-4">Algo salió mal</h1>
            <p className="text-gray-600 mb-6">Ha ocurrido un error inesperado al cargar la página.</p>
            <button
              onClick={() => window.location.reload()}
              className="bg-cyan-acento text-white px-6 py-2 rounded-md font-semibold"
            >
              Recargar página
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}