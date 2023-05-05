import React, { useEffect, useState } from 'react'
import { Col, Nav } from 'react-bootstrap'
import {Link} from 'react-router-dom'
import { dashboard } from '../../config/routeConstances'
import listIcon from "../../assets/images/icons/list-icon.png";

 const CategoryList = () => {
    const[category, setCategory] =useState([])
    const[subcategory, setSubCategory] =useState([])
    
    useEffect(()=>{
         fetch("http://localhost:6060/categories")
         .then((res) => {
           return res.json();
         })
         .then((data) => {
            setCategory(data)
         });
     },[])
  return (
        <>
        {
                category?.map((cat,i)=>{
                    return(
                        <Col xs={12} md={6} lg={4} className="px-lg-5 my-3">
                        <div className="category-list" key={cat.id}>
                        <h4>{cat.name}</h4>
                        <Nav className="flex-column">
                          <Nav.Item>
                    {
                       cat?.subcategory?.map((subcat,i)=>{
                             return(
                        <Nav.Link as={Link} to={dashboard} key={subcat.id}><img src={listIcon} alt="" className="img-fluid me-2" width="18px"></img>
                              {subcat.name}</Nav.Link> 
                             )   
                       }) 
                    }     
                      </Nav.Item>            
                        </Nav>
                      </div>
                      </Col>
                    )
                })
        }
          
        </>
  )
}

export default CategoryList