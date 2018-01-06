import React from "react"
import PropTypes from "prop-types";

class Item extends React.Component {
    static propTypes = {
        details: PropTypes.object
    }

    render() {
        const { details } = this.props;
        const { product_image, product_title } = details;
        return (
            <div className="col-xs-6 col-lg-2 item">
                <img src={product_image} />
                <div>{product_title}</div>
            </div>
        );
    }
}

export default class Products extends React.Component {
    static propTypes = {
        items: PropTypes.array
    }

    render() {
        const { items } = this.props;
        return items.map((item) => {
            return (
                <Item details={item} />
            );
        })
    }
}