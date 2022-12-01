import React from "react";
import styled from "styled-components";
import { Container } from "react-bootstrap";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const Capital = () => {
  const Capitalsection = styled.section`
    padding-top: 100px;
    background: ${({ theme }) => theme.colors.text2};
    height: 100%;
    .parent{
        h1{
            color: white;
            font-size: 2rem;
            font-weight: 200;
            margin-bottom: 40px;
        }
        .tableContainer{
            max-height: calc(100vh - 205px);
            overflow: auto;
            position:relative;
            &::-webkit-scrollbar {
                width: .3rem;   
            }
            &::-webkit-scrollbar-track {
                background-color: #fff;
            }
            &::-webkit-scrollbar-thumb {
                background: #013A39;
                border-radius: 5rem;
            }
            table{
                thead{
                    position: sticky;
    width: 100%;
    left: 0px;
    right: 0px;
    top: 0px;
    background-color: #f3f3f3;
                }
                th{
                    font-weight: bold;
                    text-transform: uppercase;
                    font-size: 1rem;
                    color: #00568f;               
                }
            }

        }

    }
  `;

  function createData(large: string, mid: string, small: string) {
    return { large, mid, small };
  }

  const rows = [
    createData("Reliance","ABCAPITAL", "AEGIS LOGISTICS"),
    createData("TCS", "LUPIN", "COFORGE"),
    createData("HDFC Bank", "MAXHEALTH", "DEEPAK NITRITE"),
    createData("Infosys", "GODREJIND", "KAJARIA CERAMICS"),
    createData("ICICI Bank", "JINDALSTEL", "METROPOLIS HEALTHCARE"),
    createData("HUL"),
    createData("SBI"),
    createData("HDFC" ),
    createData("Bharti Airtel"),
    createData("Adani Enterpris"),
  ];

  return (
    <Capitalsection>
      <Container>
        <div className="parent">
          <h1>capital section</h1>
          <TableContainer className="tableContainer" component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Large Cap 50%</TableCell>
                  <TableCell align="right">Mid Cap 50%</TableCell>
                  <TableCell align="right">Small Cap 50%</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell  scope="row">
                      {row.large}
                    </TableCell>
                    <TableCell align="right">{row.mid}</TableCell>
                    <TableCell align="right">{row.small}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </Container>
    </Capitalsection>
  );
};

export default Capital;
