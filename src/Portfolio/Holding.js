import React from "react";
import styled from "styled-components";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const Holding = () => {
  const Holdingsection = styled.section`
    table {
      thead {
        position: sticky;
        width: 100%;
        left: 0px;
        right: 0px;
        top: 0px;
        tr {
          th {
            font-size:.8rem;
            color:#161414;
            padding: 10px;
            &:nth-child(1),&:nth-child(4),&:nth-child(7){
                border-right:1px solid rgba(224, 224, 224, 1)!important;
            }
          }
        }
      }
      tbody {
        tr {
            td{
                padding: 10px;
                font-size: .8rem;
                &:nth-child(1){
                    font-size:.8rem;
                    color:#161414;
                    text-transform:uppercase; 
                    font-weight:600;
                    letter-spacing:2;
                }
                &:nth-child(1),&:nth-child(4),&:nth-child(7){
                border-right:1px solid rgba(224, 224, 224, 1)!important;
                }

            }
            &:hover{
                background-color:#ede7e7;
            }
        }
      }
    }
    .MuiPaper-root{
        box-shadow:unset;
    }
  `;

  function createData(
    stock: string,
    qty: number,
    avg: number,
    ltp: number,
    cur: number,
    pl: number,
    net: number,
    day: number
  ) {
    return { stock, qty, avg, ltp, cur, pl, net, day };
  }

  const customHighlight = ["#51B480","#e32636","#51B480","#e32636","#e32636","#51B480","#e32636","#51B480","#e32636","#e32636"]

  const rows = [
    createData("Reliance", 5, 34, 12, 5, 23, 63, 111),
    createData("TCS", 5, 34, 12, 5, -23, -63, 11),
    createData("HDFC Bank", 5, 34, 12, 5, 23, 63, 11),
    createData("Infosys", 5, 34, 12, 5, -23, -63, 11),
    createData("ICICI Bank", 5, 34, 12, 5, -23, -63, 11),
    createData("Reliance", 5, 34, 12, 5, 23, 63, 111),
    createData("TCS", 5, 34, 12, 5, -23, -63, 11),
    createData("HDFC Bank", 5, 34, 12, 5, 23, 63, 11),
    createData("Infosys", 5, 34, 12, 5, -23, -63, 11),
    createData("ICICI Bank", 5, 34, 12, 5, -23, -63, 11),
  ];

  return (
    <Holdingsection>
      <TableContainer className="tableContainer" component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell style={{width:'200px'}}>Stocks</TableCell>
              <TableCell align="right">Qty</TableCell>
              <TableCell align="right">Avg cost</TableCell>
              <TableCell align="right">LTP</TableCell>
              <TableCell align="right">Cur. val</TableCell>
              <TableCell align="right">P&L</TableCell>
              <TableCell align="right">Net chg</TableCell>
              <TableCell align="right">Day chg</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row,idx) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell scope="row" style={{color:customHighlight[idx]}}>{row.stock}</TableCell>
                <TableCell align="right">{row.qty}</TableCell>
                <TableCell align="right">{row.avg}</TableCell>
                <TableCell align="right">{row.ltp}</TableCell>
                <TableCell align="right">{row.cur}</TableCell>
                <TableCell align="right" style={{color:customHighlight[idx]}}>{row.pl}</TableCell>
                <TableCell align="right" style={{color:customHighlight[idx]}}>{row.net}</TableCell>
                <TableCell align="right">{row.day}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Holdingsection>
  );
};

export default Holding;
