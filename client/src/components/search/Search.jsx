import React, { useState } from 'react';
import {
  Col, Container, Form, Row,
} from 'react-bootstrap';

const Search = () => {
  const [band, setBand] = useState('');
  const [date, setDate] = useState('');
  const [venue, setVenue] = useState('');
  const [genre, setGenre] = useState('');

  return (
    <div className="container-fluid" style={{ margin: 'auto' }}>
      <Container>
        <Row style={{ marginRight: '0px', marginLeft: '0px' }}>
          <Col lg={2}>
            <Row style={{ padding: '10px' }}>
              <div className="add-page-form">
                <Form>
                  <Form.Group as={Row} controlId="formBand">
                    <Col sm={11}>
                      <Form.Control
                        type="text"
                        placeholder="band name"
                        value={band}
                        onChange={(e) => setBand(e.target.value)}
                      />
                    </Col>
                  </Form.Group>
                  <Form.Group as={Row} controlId="formDate">
                    <Col sm={11}>
                      <Form.Control
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                      />
                    </Col>
                  </Form.Group>
                  <Form.Group as={Row} controlId="formVenue">
                    <Col sm={11}>
                      <Form.Control
                        type="text"
                        placeholder="Venue name"
                        value={venue}
                        onChange={(e) => setVenue(e.target.value)}
                      />
                    </Col>
                  </Form.Group>
                  <Form.Group as={Row} controlId="formGenre">
                    <Col sm={11}>
                      <Form.Control
                        type="text"
                        placeholder="Genre name"
                        value={genre}
                        onChange={(e) => setGenre(e.target.value)}
                      />
                    </Col>
                  </Form.Group>
                </Form>
              </div>
            </Row>
            <Row>
              <div style={{ border: 'solid 1px green', padding: '10px' }}>
                List of Shows goes here
              </div>
            </Row>
          </Col>
          <Col style={{ padding: '5px' }} lg={10}>
            <div style={{ display: 'block', height: '90vh', width: '50vw' }}>
              <iframe
                style={{ height: '90vh', width: '60vw' }}
                src="https://www.google.com/maps/embed/v1/place?key=AIzaSyAs8CFJJP5bgcxYTtXjOer-aCG686_-37U
    &q=NewOrleans+LA"
                allowFullScreen
                title="map"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Search;
