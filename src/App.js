import React from "react";
import Table from "./components/Table";
import "./App.css";
import "./file.json";

const data = require("./file");

export default class App extends React.Component {
    constructor(props){
      super(props);
      this.state={
        tableData: data,
      }
    }

    render() {  
        return (
          <div className="App">
            <Table data={this.state.tableData}/>
          </div>
          
        );
    }
  }    
