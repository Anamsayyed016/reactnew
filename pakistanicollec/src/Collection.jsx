import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useNavigate } from 'react-router-dom';

const Collection=()=>{

        const navigatee = useNavigate()

            const gotocustable=()=>{
                navigatee('/cusdetails')
            }


    return(
        <>
        <div className="product-card">
        <Container>
      <Row>
        <Col>
        <img src="https://shristyles.com//wp-content/uploads/2025/03/Azure-ensemble-wedding-party-suits-for-women-Mossy-Charm-b.webp" alt="" style={{width:"50%"}}/>

            <h1>Azure Ensemble wedding party suits for women | Mossy Charm</h1>
                <p>💳 FLAT 5% Discount on Prepaid Orders!</p>
                <h5>₹4,699</h5>
                <button onClick={gotocustable}>Add to Card</button>
        </Col>

        <Col>
            <img src="https://shristyles.com//wp-content/uploads/2025/03/Azure-ensemble-wedding-party-suits-for-women-Ruby-Rose-b.webp" alt="" style={{width:"50%"}} />
            <h1>Azure Ensemble wedding party suits for women | Ruby Rose</h1>
            <p>💳 FLAT 5% Discount on Prepaid Orders!</p>
            <h5>₹3,699</h5>

            <button onClick={gotocustable}>Add to Card</button>

        </Col>
      </Row>
      <Row>
        <Col>
        <img src="https://shristyles.com//wp-content/uploads/2025/03/Azure-ensemble-wedding-party-suits-for-women-Dewy-Lavender-b.webp" alt=""style={{width:"80%"}} />
        <h1>Azure Ensemble wedding party suits for women | Dewy Lavender</h1>
        <p>💳 FLAT 5% Discount on Prepaid Orders!</p>
        <h5>₹5,699</h5>

            <button onClick={gotocustable}>Add to Card</button>
        </Col>
        <Col>
        <img src="https://shristyles.com//wp-content/uploads/2025/03/Azure-ensemble-wedding-party-suits-for-women-Rouge-b.webp" alt="" style={{width:"80%"}}/>
        <h1>Azure Ensemble wedding party suits for women | Rouge</h1>
        <p>💳 FLAT 5% Discount on Prepaid Orders!</p>
        <h5>₹10,699</h5>

        <button onClick={gotocustable}>Add to Card</button>
        </Col>
        <Col>
            <img src="https://shristyles.com//wp-content/uploads/2025/03/Azure-ensemble-wedding-party-suits-for-women-Raven-Drape-b.webp" alt="" style={{width:"80%"}}/>
            <h1>Azure Ensemble wedding party suits for women | Raven Drape</h1>
            <p>💳 FLAT 5% Discount on Prepaid Orders!</p>
            <h5>₹4,689</h5>

        <button onClick={gotocustable}>Add to Card</button>
        </Col>
      </Row>
    </Container>
        </div>
        
        </>
    )
}

export default Collection