import React, { Component } from "react";

class ErrorPage extends Component{
    state = {
        error: null,
    };

    static getDerivedStateFormError(error) {
        console.error(error);
        return { error };
    }

    render() {
        if (this.state.error) {
            return (
                <div class="ErrorPage">
                    <h1>Something went wrong</h1>
                    <p>Refresh the page</p>{" "}

                </div>
            );
        }
        return this.props.children || null;
    }
}

export default ErrorPage;