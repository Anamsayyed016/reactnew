import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Collection = () => {
  const navigate = useNavigate();
  const [quantities, setQuantities] = useState({});

  const handleQuantityChange = (index, value) => {
    setQuantities({ ...quantities, [index]: parseInt(value) });
  };

  const goToCusTable = (product, index) => {
    const quantity = quantities[index] || 1;
    navigate('/cusdetails', { state: { ...product, quantity } });
  };

  const products = [
    {
      name: "Azure Ensemble wedding party suits for women | Mossy Charm",
      price: "₹4,699",
      image:
        "https://shristyles.com//wp-content/uploads/2025/03/Azure-ensemble-wedding-party-suits-for-women-Mossy-Charm-b.webp",
    },
    {
      name: "Azure Ensemble wedding party suits for women | Ruby Rose",
      price: "₹3,699",
      image:
        "https://shristyles.com//wp-content/uploads/2025/03/Azure-ensemble-wedding-party-suits-for-women-Ruby-Rose-b.webp",
    },
    {
      name: "Azure Ensemble wedding party suits for women | Dewy Lavender",
      price: "₹5,699",
      image:
        "https://shristyles.com//wp-content/uploads/2025/03/Azure-ensemble-wedding-party-suits-for-women-Dewy-Lavender-b.webp",
    },
    {
      name: "Azure Ensemble wedding party suits for women | Rouge",
      price: "₹10,699",
      image:
        "https://shristyles.com//wp-content/uploads/2025/03/Azure-ensemble-wedding-party-suits-for-women-Rouge-b.webp",
    },
    {
      name: "Azure Ensemble wedding party suits for women | Raven Drape",
      price: "₹4,689",
      image:
        "https://shristyles.com//wp-content/uploads/2025/03/Azure-ensemble-wedding-party-suits-for-women-Raven-Drape-b.webp",
    },
  ];

  return (
    <div className="product-card">
      <Container>
        <Row>
          {products.map((product, index) => (
            <Col key={index}>
              <img src={product.image} alt="" style={{ width: "80%" }} />
              <h1>{product.name}</h1>
              <p>💳 FLAT 5% Discount on Prepaid Orders!</p>
              <h5>{product.price}</h5>

              <label>Quantity:</label>
              <input
                type="number"
                min="1"
                value={quantities[index] || 1}
                onChange={(e) => handleQuantityChange(index, e.target.value)}
              />

              <button type="button" onClick={() => goToCusTable(product, index)}>
                Add to Cart
              </button>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Collection;
