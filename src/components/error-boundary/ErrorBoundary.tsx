import { Component } from "react";
import { QueryErrorResetBoundaryProps } from "react-query";

interface ErrorBoundaryProps {
  children: any;
  errorMsg?: string;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h3>{this.props?.errorMsg || "Something went wrong!"}</h3>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
