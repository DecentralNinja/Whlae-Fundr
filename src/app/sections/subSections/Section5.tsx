import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(
  name: string,
  option1: string,
  option2: string,
  option3: string,
  option4: string,
  option5: string
) {
  return { name, option1, option2, option3, option4, option5 };
}

const rows = [
  createData(
    "Account balance",
    "$10,000",
    "$25,000",
    "$50,000",
    "$100,000",
    "$200,000"
  ),
  createData(
    "Trading Period",
    "unlimited",
    "unlimited",
    "unlimited",
    "unlimited",
    "unlimited"
  ),
  createData(
    "Minimum trading days",
    "4 days",
    "4 days",
    "4 days",
    "4 days",
    "4 days"
  ),
  createData("Maximum Loss", "$500", "$500", "$1,000", "$1,000", "$1,000"),
  createData("Profit Target", "$1,000", "$1,000", "$1,000", "$1,000", "$1,000"),
  createData("Refundable Fee", "$250", "$250", "$250", "$250", "$250"),
];

function Section5() {
  return (
    <section id="section5">
      <div id="sec5Content">
        <h4>Step: 1</h4>
        <h4>WhaleFundr Challenge</h4>
      </div>
      <TableContainer sx={{ background: "transparent", minWidth: "710" , maxWidth: 1400, overflowX: "auto" }} component={Paper}>
        <Table aria-label="simple table">
          <TableBody>
            {rows.map((row, index) => (
              <TableRow
                key={row.name}
                sx={{
                  "&:last-child td, &:last-child th": { border: 0 },
                  backgroundColor: index % 2 === 0 ? "#2b3237" : "transparent",
                  borderRadius: "100px",
                  "& td, & th": {
                    borderBottom: "none",
                    color: "white",
                  },
                  "&:nth-of-type(odd)": {
                    backgroundColor: "#2b3237",
                    borderRadius: "100px",
                  },
                }}
              >
                <TableCell component="th" scope="row" sx={{ color: "white" }}>
                  {row.name}
                </TableCell>
                <TableCell align="right" sx={{ color: "white" }}>
                  {row.option1}
                </TableCell>
                <TableCell align="right" sx={{ color: "white" }}>
                  {row.option2}
                </TableCell>
                <TableCell align="right" sx={{ color: "white" }}>
                  {" "}
                  {row.option3}
                </TableCell>
                <TableCell align="right" sx={{ color: "white" }}>
                  {row.option4}
                </TableCell>
                <TableCell align="right" sx={{ color: "white" }}>
                  {row.option5}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </section>
  );
}

export default Section5;
