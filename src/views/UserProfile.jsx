import React, { Component } from "react";
import { Grid, Row, Col, Table } from "react-bootstrap";

import Card from "components/Card/Card.jsx";
import { thArray, tdArray } from "variables/Variables.jsx";
import axios from 'axios';


class UserProfil extends Component {

  constructor(){
      super();
      this.state = {
         isLoaded : false,
         items    : [],
         page     : 1,
         start    : 0,
         limit    : 10,
         search   : "",
         message  : ""
      }
  }
  
  componentDidMount(){
      this.loadData();
  }

  loadData(){
      var url = "http://103.103.192.211:3210/data";
      fetch(url).then(res=>res.json()).then(
          (result)=>{
              this.setState({
                isLoaded : true,
                items : result,
                message : "Data Loaded Success"
              })            
          },(error)=>{
              this.setState({
                  isLoaded:true,
                  message : "Error Loaded Data"
              });
          }
      )
  }

  render() {
    let items = this.state.items;

    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col md={12}>
              <Card
                title="Data User"
                category="List Data User"
                ctTableFullWidth
                ctTableResponsive
                content={
                  <Table striped hover>
                    <thead>
                      <tr>
                          <td>USER ID</td>
                          <td>USERNAME</td>
                          <td>LOGIN START</td>
                          <td>LOGIN END</td>
                          <td>KETERANGAN</td>
                      </tr>
                    </thead>
                    <tbody>
                      {items.map(item => {
                        return (
                          <tr>
                            <td>{item.USER_IDXX}</td>
                            <td>{item.USER_NAME}</td>
                            <td>{item.LOGN_STRT}</td>
                            <td>{item.LOGN_ENDX}</td>
                            <td>{item.KETX_USER}</td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </Table>
                }
              />
            </Col>

            {/* <Col md={12}>
              <Card
                plain
                title="Striped Table with Hover"
                category="Here is a subtitle for this table"
                ctTableFullWidth
                ctTableResponsive
                content={
                  <Table hover>
                    <thead>
                      <tr>
                        {thArray.map((prop, key) => {
                          return <th key={key}>{prop}</th>;
                        })}
                      </tr>
                    </thead>
                    <tbody>
                      {tdArray.map((prop, key) => {
                        return (
                          <tr key={key}>
                            {prop.map((prop, key) => {
                              return <td key={key}>{prop}</td>;
                            })}
                          </tr>
                        );
                      })}
                    </tbody>
                  </Table>
                }
              />
            </Col> */}
            
          </Row>
        </Grid>
      </div>
    );
  }
}

export default UserProfil;
