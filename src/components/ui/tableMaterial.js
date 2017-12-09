import React, {Component} from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

/**
 * A simple table demonstrating the hierarchy of the `Table` component and its sub-components.
 */
class TableMaterial extends Component {

    renderTable(){
       let i = 0;
       return this.props.data.map( (ingrediente, i) => {
            return (
                <TableRow key={i}>
                    <TableRowColumn key={i}>{ingrediente}</TableRowColumn>
                </TableRow>
            );
        });
    }


  render() {
      return(
        <Table >
            <TableHeader displaySelectAll={false}>
                <TableRow >
                    <TableHeaderColumn>Ingrediente / Peso alla distribuzione</TableHeaderColumn>
                </TableRow>
            </TableHeader>
            <TableBody displayRowCheckbox={false}>
                {this.renderTable()}
            </TableBody>
        </Table>
      );
  }
}

export default TableMaterial;