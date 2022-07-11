import { useParams } from "react-router-dom";
import { useEffect,useReducer } from 'react';
import axios from "axios";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';
import Rating from "../components/Rating";
import Button from "react-bootstrap/esm/Button";
import { Helmet } from "react-helmet-async";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";




const reducer = (state,action) =>{
    switch(action.type){
      case 'FETCH_REQUEST':
        return{...state,loading:true};
  
      case 'FETCH_SUCCESS':
        return{...state,product:action.payload,loading:false};
      
      case 'FETCH_FAIL':
        return{...state,loading: false, error:action.payload};
  
      default:
        return state;
    }
  };
  

function ProductScreen(){
    const params = useParams();
    const {slug} = params
    const [{loading,error,product},dispatch]= useReducer(reducer,{product:[],loading:true, error:''});  
      useEffect(() => {
        const fetchData = async() => {
          dispatch({type:'FETCH_REQUEST'});
          try{
            const result = await axios.get(`/api/products/slug/${slug}`);
            dispatch({type:'FETCH_SUCCESS',payload: result.data});
          }
          catch(err){
            dispatch({type:'FETCH_FAIL',payload:err.message});
          }
          // const result = await axios.get('/api/products');
          // setProducts(result.data);
        };
  
        fetchData();
  
      },[slug]); 

    return(
      loading?
      (<LoadingBox />) 
      : 
      error?(<MessageBox variant="danger">{error}</MessageBox>) 
        : (
            <div>
                <Row>
                    <Col md={6}>
                    <img className="img-large" src={product.image} 
                      alt={product.name}></img>
                    </Col>
                    <Col md={3}>
                      <ListGroup variant="flush">
                        <ListGroup.Item>
                          <Helmet>
                            {product.name}
                          </Helmet>
                        </ListGroup.Item>
                        <ListGroup.Item>
                          <Rating
                            rating={product.rating}
                            numReviews={product.numReviews}
                            ></Rating>
                        </ListGroup.Item>
                        <ListGroup.Item>Price: Rs{product.price}</ListGroup.Item>
                        <ListGroup.Item>Dscription: {product.description}</ListGroup.Item>
                      </ListGroup>
                    </Col>
                    <Col md={3}>
                      <Card>
                        <Card.Body>
                          <ListGroup variant="flush">
                          <ListGroup.Item>
                            <Row>
                              <Col>Price:</Col>
                              <Col>Rs{product.price}</Col>
                            </Row>
                          </ListGroup.Item>
                          <ListGroup.Item>
                            <Row>
                              <Col>Status:</Col>
                              <Col>{product.countStatus >0 ? (<Badge bg="success">In stock</Badge>) : (<Badge bg="danger">Currently Unavaliable</Badge>)}</Col>
                            </Row>
                          </ListGroup.Item>

                          {product.countStatus > 0 && (
                            <ListGroup.Item>
                              <div className="d-grid">
                                <Button variant="primary">Add to Cart</Button>
                              </div>
                            </ListGroup.Item>
                          )}

                          </ListGroup>
                        </Card.Body>

                      </Card>
                    </Col>
                </Row>
            </div>
    ));
}

export default ProductScreen;