import React, {Component} from "react";
export const MyContext=React.createContext();

export default class index extends Component{
    constructor(){
        super();
        this.state={
            book:[],
            currentlyReading:[],
            wantToRead:[],
            read:[]
        }
    }

    render(){
        return (
           <MyContext.Provide value={{...this.state}}>
            {this.props.children}

           </MyContext.Provide> )
    }
}