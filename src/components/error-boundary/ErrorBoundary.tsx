import { Component } from "react";
import { QueryErrorResetBoundaryProps } from "react-query";

interface IErrorBoundaryProps {
  children: React.ReactNode;
  errorMsg?: string;
}

interface IErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends Component<
  IErrorBoundaryProps,
  IErrorBoundaryState
> {
  constructor(props: IErrorBoundaryProps) {
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
