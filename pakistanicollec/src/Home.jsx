import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const Home=()=>{
  const videos = [
    "https://cdn.shopify.com/videos/c/o/v/991fe17fefe4482ab8e39336764d5113.mp4",

    "https://cdn.shopify.com/videos/c/o/v/94291b4ddfd548f8b9e021fd1c2a49f3.mp4",
    
    "https://cdn.shopify.com/videos/c/o/v/ccea0378d6fa4621ad6be79d689b0380.mp4",

    "https://cdn.shopify.com/videos/c/o/v/05793e5abfb149ca87708f2340b64862.mp4",

    "https://cdn.shopify.com/videos/c/o/v/0aa0cd8644bb4aaba384f9b22da2c8c9.mp4"
  ];
    return(
        <>
        <Carousel>
      <Carousel.Item interval={1000}>
        <img src="https://www.yourlibaas.com/cdn/shop/files/1_3c5768ba-1248-4655-89a9-822fd6501d17_1463x.progressive.png.jpg?v=1741067084" alt="" style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
 />
        <Carousel.Caption>
          <h3>Drape Yourself in Royalty</h3>
          <p>Step into elegance with our beautifully crafted Pakistani dresses. Perfect for every occasion, our designs combine rich fabrics with intricate details. Find your perfect look today!!!!!!!</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
      <img src="https://cdn.shopify.com/s/files/1/0632/5528/1852/files/WhatsApp_Image_2025-03-10_at_1.41.52_PM.jpg?v=1741621382" alt="" style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
      />
        <Carousel.Caption>
          <h3>Drape Yourself in Royalty</h3>
          <p>Step into elegance with our beautifully crafted Pakistani dresses. Perfect for every occasion, our designs combine rich fabrics with intricate details. Find your perfect look today!"</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src="https://cdn.shopify.com/s/files/1/0632/5528/1852/files/WhatsApp_Image_2025-03-10_at_12.51.43_PM.jpg?v=1741616221" alt=""style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
 />
        <Carousel.Caption>
          <h3>Drape Yourself in Royalty</h3>
          <p>
          Step into elegance with our beautifully crafted Pakistani dresses. Perfect for every occasion, our designs combine rich fabrics with intricate details. Find your perfect look today!"
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

      {/* grid */}
      
      <div className="gri-gri-card">
      <Container>
        <Row xs={1} md={2} lg={5} className="g-4">
          {videos.map((src, index) => (
            <Col key={index}>
              <div className="video-editor">
                <video 
                  src={src}
                  loop
                  muted
                  autoPlay
                  playsInline
                  className="video"
                />
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
{/* ---------------card2--------------- */}
          <div className="card-card-cartw">
          <Container>
      <Row md={4}>
        <Col>
        <img src="https://www.awwalboutique.com/cdn/shop/files/formals.jpg?v=1741156762" alt="" style={{width:"100%"}}/>
          <h1>New Eid Collection</h1>
        </Col>

        <Col xs={6}><img src="/imgvid/slider5.jpeg" alt="" style={{width:"100%"}}/>
          <h1>Fresh Looks for a Fresh Season – <br />Shop Now!
          </h1>
        </Col>

        <Col><img src="/imgvid/slider6.jpg" alt="" style={{width:"180%", height:"100%"}}/>
          <h1>Limited Edition – <br />Grab It Before It’s Gone!</h1>
        </Col>
      </Row>
    </Container>

          </div>
            {/* blog */}
          <div className="blog-blog-blgpst">
            <h4>Blog posts</h4>

            <Container>
      <Row md={4} className="row-row">
        <Col><img src="/imgvid/blog.webp" alt="" style={{width:"100%"}} />
          <h2>Behind the Seams: A Collaboration with Top Fashion Designers
          </h2>
            <p>
            Take an exclusive look into our latest designer dress collection, created in collaboration with some of the biggest names in the fashion industry. Discover how each designer brought their unique touch to the collection – from the selection of fabrics to the intricate detailing and modern cuts. In this post, we’ll explore the creative process, inspirations, and the story behind each piece. Get ready to experience fashion artistry at its finest!


            </p>
        </Col>

        <Col xs={6}><img src="https://www.jdinstitute.edu.in/media/2024/04/Cultural-influnence-on-fashion2.webp" alt="" style={{width:"115%"}} />
          <h2>Behind the Seams: A Collaboration with Top Fashion Designers</h2>
          <p>Our new designer collection is a celebration of creativity and individuality. Featuring pieces designed by renowned fashion artists, this collection reflects a beautiful blend of traditional craftsmanship and modern flair. Each designer’s distinct style comes through, creating a rich tapestry of textures, colors, and patterns. This blog will take you through the inspiration behind the collection and highlight key pieces that reflect the artist’s signature style.

</p>
        </Col>
        <Col><img src="https://cdn.shopify.com/s/files/1/0522/7770/6926/files/Screenshot_2024-05-06_at_10.38.43_AM_480x480.png?v=1715007240" alt=""  style={{width:"100%"}}/>
        <h2>Designer Spotlight Series: Sarah Hargrave of The Collective Dallas
        </h2>
        <p>
        Our latest dress collection wouldn’t be complete without the incredible talent behind it. In this exclusive post, we sit down with the designers to explore their creative vision, their approach to blending tradition with modern trends, and their favorite pieces from the collection. From hand-stitched embellishments to bold, modern cuts, discover how each designer added their unique touch to this stunning line.


        </p>
        </Col>
        
      </Row>
    </Container>

          </div>
          <footer>
            <div className="">
                                    <nav>
                                        <ul>
                                            <li>Home</li>
                                            <li>Collection</li>
                                            <li>Sale</li>
                                        
                                            </ul>
                                            
                                    </nav>
                                    
                            </div>
          </footer>
        </>
    )
}

export default Home