import filterStyle from '../styles/filtersection.module.css';
import Container from '@material-ui/core/Container';
import { useState } from 'react';

const FilterSection = () => {

    



    return (
        <div className={filterStyle.filter_container_main}>
            <Container maxWidth="md">
            <div className={filterStyle.heading_titles}>
                <div className={filterStyle.titles}>
                    <h3>Add Another keyword</h3>
                    <span>1/3</span>
                    <h4>Upgrade</h4>
                </div>
                <div className={filterStyle.search_btn}>
                    <h4>Advance Search</h4>
                </div>
            </div>
            <div className={filterStyle.filter_box} >
                <form action="">
                    <input type="text" placeholder="Enter your filters here" className={filterStyle.filter_input}/>
                    <button className="btn btn-primary">Save Filter</button>
                </form>
            </div>
            </Container>
            
        </div>
    );
};

export default FilterSection;