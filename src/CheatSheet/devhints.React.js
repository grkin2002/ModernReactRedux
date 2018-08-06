//------------------Components------------------------

import React from "react";
import ReactDOM from "react";

class Hello extends React.Component {
  render() {
    return <div className="message-box">
        Hello {this.props.name}
    </div>;
  }
}

const el = document.body;
ReactDOM.render(<Hello name='John' />, el);


//Properties
// <video fullscreen={true} />

render () {
    this.props.fullscreen
}


//Nesting 
class Info extends React.Component {
    render() {
        const { avatar, username } = this.props;

        return <div>
            <UserAvatar src={avatar} />
            <UserProfile username={username} />
        </div>
    }
}

//as of React v16.2.0 fragment can be used to 
//return multiple children without adding extra 
//wrapping nodes to the DOM.

class Info extends React.Component {
    render() {
        const { avatar, username } = this.props;

        return <React.Fragment>
            <UserAvatar src={avatar} />
            <UserProfile username={username} />
        </React.Fragment>
    }
}

//States
constructor(props) {
    super(props);
    this.state = {
        username: ''
    };
}

this.setState({ username: 'rstacruz'});

render () {
    this.state.username;
}

//Children
<AlertBox>
    <h1>You have pending notifications</h1>
</AlertBox>

class AlertBox extends React.Component {
    render() {
        return <div classname='alert-box'>
            {this.props.children}
        </div>
    }
}

//---------------Defaults----------------

//Setting default props
Hello.defaultProps = {
    color: 'blue'
}

//Setting default state
class Hello extends React.Component{
    constructor(props) {
        super(props)
        this.state = {visible: true}
    }
}

//----------------------Other components

//Fucntion components
//Functional components have no state. Also their props
//are passed as the first parameter to a function
function MyComponent({name}){
    return <div className="message-box">
        Hello {name}
    </div>
}

//Pure components
//Performance-optimized version of React.Component. 
//Doesn't rerender if props/state hasn't changed. 
class MessageBox extends React.PureComponent {
    
} 

//Component API
this.forceUpdate()

this.setState({name: gerg})

this.state;
this.props;

//-------------------------Lifecycle-----------------

//Mounting
//Set initial state on constructor(), Add DOM event handlers, timers
//on componentDidMount(), then remove them on componentWillUnmount().

constructor (props)  //before rendering 

componentWillMount() //don't use this

render() //Render

componentDidMount()  //After rendering (DOM available)

componentWillUnmount() //Before DOM removal

componentDidCatch() //Catch errors (16+)

//Updating 
//Called when parents change properties and setState(). 
//They are not called for initial renders.

componentWillReceiveProps(newProps)  //use setState() here 

shouldComponentUpdate(newProps, newState) //Skips render() if return false

componentWillUpdate(newProps, newState) //Can't use setState() here 

render() //Render

componentDidUpdate(prevProps, prevState) //Operate on the DOM here 


//----------------DOM nodes -----------------------
//References
class MyComponent extends React.Component {
    render() {
        return <div>
            <input ref={el => this.input = el} />
        </div>
    }

    componentDidMount(){
        this.input.focus()
    }
}

//DOM Events
//Pass function to attribute like onChange
class MyComponent extends React.Component {
    render() {
        <input type="text" 
            value={this.state.value}
            onChange={event => this.OnChange(event)} />
    }

    onChange (event) {
        this.setState({ value: event.target.value })
    }
}

//---------------------Other features-----------------
//Transferring Props
//Propagates src="..." down to the sub-component
<VideoPlayer src="video.mp4" />

class VideoPlayer extends React.Component { 
    render() {
        return <VideoEmbed {...this.props} />
    }
}

//Top-level API 
React.createClass({name: ''})
React.isValidElement(c)

ReactDOM.render(<Component />, dom-node, [callback])
ReactDOM.unmountComponentAtNode( dom-node )

ReactDOMServer.renderToString(<Component />)
ReactDOMServer.renderToStaticMarkup(<Component />)


//--------------------------JSX patterns-----------------------
//Sytle shorthand
//See inline style
var style = {height: 10}
return <div style={style}></div>
return <div style={{ margin: 0, padding: 0}}></div>

//Inner HTML
//See Dangerously set innerHTML
function markdownify() { return "<p>...</p>"; }
<div dangerouslySetInnerHTML={{__html: markdownify()}} />

//Conditionals
<div>
    {showMyComponent
    ? <MyComponent />
    : <OtherComponent />}
</div>

//Short-circuit evaluation
<div> 
    {showPopup && <Popup/>}
</div>

//Lists
class TodoList extends React.Component {
    render() {
        const { items } = this.props

        return <ul>
            {items.map(item => 
                <TodoItem item={item} key={item.key} />)}
        </ul>
    }
}

//---------------------------New features---------------------
 
//Returning multiple elements
//You can return multiple elements as arrays or fragments
//As Array
render() {
    //Don't forget the keys!
    return [
        <li key="A">First item</li>
        <li key="B">Second item</li>
    ]
}


//Fragments
render () {
    //Fragmetns don't require keys!
    return (
        <React.Fragment>
            <li>First item</li>
            <li>Second item</li>
        </React.Fragment>
    )
}

//Portals 
//This renders this.props.children into any location in the DOM. 
render() {
    return React.createPortal(
        this.props.children,
        document.getElementById('menu')
    )
}

//Errors
//Catch errors via componentDidCatch. (React 16+)
class MyComponent extends React.Component {
    componentDidCatch(error, info) {
        this.setState({ error })
    }
}

//Hydration
//Use ReactDOM.hydrate instead of using ReactDOM.render
//if you are rendering over the output of ReactDOMServer. 
const el = document.getElementById('app')
ReactDOM.hydrate(<App/>, el) 







