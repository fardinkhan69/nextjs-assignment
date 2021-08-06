import { Container } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import tableStyle from '../styles/tablesection.module.css'
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { useState ,useEffect } from 'react';

const useStyles = makeStyles({
    table: {
      minWidth: 650,
      fontFamily:'Poppins'
    },
  });




function TableSection() {
    const [tableData,setTableData] = useState([])
    useEffect(()=>{
        fetch('https://raw.githubusercontent.com/akshita151199/Termmonitor-APIs/main/dashboard')
        .then(res => res.json())
        .then(data => setTableData(data.data))
    },[])

    console.log(tableData)

    const classes = useStyles();
    
    
    return (
        <div>
            
            <Container maxWidth="md">
                <div className={tableStyle.texts}>
                    <h3>The terms you are tracking</h3>
                    <p>The data will refresh every 5 min</p>
                </div>
                <div className={tableStyle.table}>
                <TableContainer component={Paper}>
                    <Table className={classes.table} aria-label="simple table">
                        <TableHead>
                        <TableRow>
                            <TableCell className={tableStyle.heading}> Keywords </TableCell>
                            <TableCell>  </TableCell>
                            <TableCell className={tableStyle.heading} align="center">Goal</TableCell>
                            <TableCell className={tableStyle.heading} align="center">Matches</TableCell>
                            <TableCell className={tableStyle.heading} align="center">Search Status</TableCell>
                            <TableCell className={tableStyle.heading} align="center">Delete Keyword</TableCell>
                        </TableRow>
                        </TableHead>
                        <TableBody>
                        {
                            tableData.map((singleData)=> (
                                <TableRow className={tableStyle.tdata} key={singleData.id}>
                                    <TableCell component="th" scope="row">
                                        {singleData.keyword}
                                    </TableCell>
                                    <TableCell>
                                        <IconButton>
                                            <SearchIcon />
                                        </IconButton>
                                    </TableCell>
                                    <TableCell align="center">{singleData.goal}</TableCell>
                                    <TableCell align="center">{singleData.matches}</TableCell>
                                    <TableCell align="center">{singleData.search_status}</TableCell>
                                    <TableCell align="center">
                                        <IconButton>
                                        <FiberManualRecordIcon fontSize="large" style={{"color":"#C4C4C4"}}/>
                                        </IconButton>
                                        </TableCell>
                                </TableRow>
                            ))
                        }
                        </TableBody>
                    </Table>
                    </TableContainer>
                </div>
            </Container>
        </div>
    )
}

export default TableSection


// export const getStaticProps = async () => {
//   const res = await fetch(
//     `https://jsonplaceholder.typicode.com/posts`
//   )

//   const article = await res.json()

//   return {
//     props: {
//       article,
//     },
//   }
// }


