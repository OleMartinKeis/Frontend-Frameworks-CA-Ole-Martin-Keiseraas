import React, { useState } from "react";
import useAPI from "../../hooks/API/useAPI";
import btnStyles from "../../scss/button/Button.module.scss"
import styles from '../../scss/ProductCards/ProductCards.module.scss';
import { Card, Button, Row, Col } from "react-bootstrap";
import '../../App.scss';

function SearchBar() {
    
    const [userInput, setUserInput] = useState('');
    const { data: ApiData, isLoading, isError } = useAPI(`https://api.noroff.dev/api/v1/online-shop?query=${userInput}`);

    const handleInputChange = (e) => {
        const inputText = e.target.value;
        setUserInput(inputText);
    };

    const filteredData = ApiData.filter((item) => 
    item.title.toLowerCase().includes(userInput.toLowerCase())
    );
    const bootstrapClassesCard = "flex-fill";
    const cardClass = styles.cardington;

    const btnClassOne = styles['cardButtonClass'];
    const btnClassTwo = btnStyles['button-color'];

    const btnClasses = `${btnClassOne} ${btnClassTwo}`

    const combinedClasses = `${bootstrapClassesCard} ${cardClass}`


    return (
        
        <div>
            <input className="searchbar" type='text' value={userInput} placeholder='Search...' onChange={handleInputChange}></input>
            <div>
                {isLoading ? (
                    <p>Loading...</p>
                ) : isError ? (
                    <p>Error fetching data.</p>
                ) : (
                    <div className={styles.ProductHolder}>
                        <Row id="rowstyling">
                            {filteredData.map((item) => (
                                <Col className="d-flex" xs={12} sm={6} md={4} lg={3}>
                                    <Card style={{ width: '16rem' }} key={item.id} className={`w-100 ${combinedClasses}`}>   <div className={styles.cardImgContainer}>
                                            <Card.Img className={`${styles.shopimg}`} src={item.imageUrl} variant="top" alt={item.title} />
                                        </div>
                                        <div className={`card-content-wrapper d-flex flex-column ${styles.cardContainer}`}>
                                            <Card.Body className={styles.cardBodyClass}>   
                                                <Card.Title className={styles.cardTitleClass}>{item.title}</Card.Title>                                                
                                            </Card.Body>
                                            <Button className={btnClasses} href={`/product/${item.id}`}>View Product!</Button>
                                        </div>
                                    </Card>
                                </Col>
                            ))}
                         </Row>
                    </div>
                )}
            </div>
        </div>
    );
}

export default SearchBar;