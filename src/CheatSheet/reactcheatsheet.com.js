import React from 'react';

class CheatSheet {

    render() {
        return <div/>;
    }


    constructor (props) {
        super(props);
        this.state = {
            list: props.initialList
        };
    }

    // where props aren't used in constructor
    constructor () {
        super();
        this.state = {
            list: []
        };
    }

    componentWillMount() {
        //invoke once, fires before initial 'render'
    }

    componentDidMount() {
        //good for Ajax: fetch, ajax, or subscriptions. 
        //invoke once (client side only).
        //fires after initial render the DOM, but before actually render to Browser. 
    }

    componentWillReceiveProps(nextProps) {
        //invoked every time component receives new props.
        //does not before initial render
    }

    shouldComponentUpdate(nextProps, nextState) {
        //invoke before every update (new props or state).
        //does not fire before initial 'render'
    }

    componentWillUpdate(nextProps, nextState) {
        //invoke immediately before update (new props or state).
        //does not fire before initial 'render'.

        //(see componentWillReceiveProps if you need to call setState)
        //don't call setState here
    }

    componentDidUpdate(prevProps, prevState){
        //invoked immediately after DOM updates
        //does not fire after initial 'render'
    }

    componentWillUnmount(){
        //invoked immediately before a component is unmounted
    }

    
    func() {
        // setState(function)
        //good for state transitions
        this.setState( (prevState, props) => {
            return {count: preState.count + props.step};
        });

        //setState(object)
        //good for static values
        this.setState({mykey: 'my new value'});

        //fire after setState
        //prefer componentDidUpdate
        this.setState(
            (prevState, props) => ({count: prevState.count + props.step }),
            () => console.log(this.state.count)
        );

        //forces a re-render; AVOID is possible
        this.forceUpdate();
    }

}

//defaultProps-----------------------------------
class CustomButton extends React.Component{
    //...
}

CustomButton.defaultProps = {
    color: 'blue'
}

//If props.color is not provided, it will be set by default to 'blue'
render() {
    return <CustomButton />  //props.color will be set to blue
}

//Children.map
React.Children.map(this.props.children, (child, i) => {
    return child;
})

//Children.forEach
React.Children.forEach(this.props.children, (child, i) => {
    console.log(child + ' at index: ' + i);
})

//Children.count
React.Children.count(this.props.children);

//Children.only
React.Children.only(this.props.children);

//Children.toArray
React.Children.toArray(this.props.children);

//Context ??????


//render
import {render} from "react-dom"; 
render(
    <MyComponent />,
    document.getElementById("component-root"),
    () => console.log("MyComponent mounted.")
);

//hydrate
import { hydrate } from "react-dom";
hydrate(
    <MyComponent />,
    document.getElementById("component-root"),
    () => console.log("MyComponent hydrate")
);

//unmountComponentAtNode
import { unmountComponentAtNode } from "react-dom";
unmountComponentAtNode(document.getElementById('MyComponent'))

//findDOMNode
import { findDOMNode } from "react-dom"; 
findDOMNode(componentRef);

//createPortal
import { createPortal } from "react-dom";
class MyPortalComponent extends React.Component {
    render() {
        return createPortal(
            this.props.children, 
            document.getElementById("portal-element"),
        );
    }
}

//renderToString
import { renderToString } from "react-dom/server";
ReactDOMServer.renderToString(<MyComponent/>);


//renderToStaticMarkup
import { renderToStaticMarkup } from "react-dom/server";
renderToStaticMarkup(<MyComponent/>);

//renderToNodeStream
import { renderToNodeStream } from "react-dom/server";
renderToNodeStream(<MyComponent/>);

//renderToStaticNodeStream
import { renderToStaticNodeStream } from "react-dom/server";
renderToStaticNodeStream(<MyComponent/>);




