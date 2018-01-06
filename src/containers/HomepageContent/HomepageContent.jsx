import "./style.scss";
import React, { Component } from 'react';
import { getProductsBySearchQuery } from "../../helpers/serviceHelper";
import Products from "./Products";

export default class HomepageContent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            products: {}
        }
    }

    getProducts = (searchQuery) => {
        getProductsBySearchQuery(searchQuery).then((response) => {
            this.setState({ products: response });
        })
    }

    handleSearch = () => {
        const { searchQuery } = this.state;
        this.getProducts(searchQuery);
    }

    handleChange = ({ target }) => {
        this.setState({ searchQuery: target.value });
    }

    handleKeyPress = (event) => {
        if (event.key === "Enter") {
            this.handleSearch();
        }
    }

    render() {
        const { products } = this.state;
        return (
            <div className="homepage-content container-fluid">
                <div className="row">
                    <div className="col-xs-8 col-lg-8">
                        <input type="text" className="form-control search-bar" placeholder="Search" aria-describedby="basic-addon1" onChange={this.handleChange} onKeyPress={this.handleKeyPress} />
                    </div>
                    <button type="button" className="btn btn-info text-field col-xs-4 col-lg-1" onClick={this.handleSearch}>Search</button>
                </div>
                <div className="row">
                    {products.length > 0 && <Products items={products} />}
                </div>
            </div>
        );
    }
}
