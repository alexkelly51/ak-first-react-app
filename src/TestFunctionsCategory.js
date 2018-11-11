import _ from 'lodash';
import React from 'react';
import './TestPageSeven.css';
import { Grid, Row, Col } from 'react-flexbox-grid';

let CategoryFilter = ({ categories, onSelectCategory, selectedCategory}) => {
  const links = categories.map(i => (
    <Col key={i.id} xs={6} md={3} lg={1} >
      <div key={i.id} className="categoryItem" onClick={() => onSelectCategory(i.id)}>
        <a key={i.id} href="#" className={selectedCategory === i.id ? "textBold" : "textNotBold"}>
          { i.title }
        </a>
      </div>
      </Col>

  ));
  return (
    <Grid>
      <Row>
        { links }
      </Row>
    </Grid>
  )
};

export default CategoryFilter

