from flask import request, jsonify

from config import app, db
from models import Product, Order


@app.route("/api/products", methods=["GET"])
def get_products():

    products = Product.query.all()

    result = []

    for p in products:
        result.append({
            "id": p.id,
            "name": p.name,
            "description": p.description,
            "price": p.price,
            "image_url": p.image_url,
            "category": p.category,
            "stock": p.stock,
            "size": p.size
        })

    return jsonify(result)


@app.route("/api/products", methods=["POST"])
def add_product():

    data = request.json

    product = Product(
        name=data["name"],
        description=data["description"],
        price=data["price"],
        image_url=data["image_url"],
        category=data["category"],
        stock=data["stock"],
        size=data["size"]
    )

    db.session.add(product)
    db.session.commit()

    return jsonify({
        "message": "Product added"
    })


@app.route("/api/orders", methods=["GET"])
def get_orders():

    orders = Order.query.all()

    result = []

    for o in orders:
        result.append({
            "id": o.id,
            "customer_name": o.customer_name,
            "phone": o.phone,
            "address": o.address,
            "city": o.city,
            "total_price": o.total_price,
            "status": o.status
        })

    return jsonify(result)


@app.route("/api/orders", methods=["POST", "OPTIONS"])
def create_order():

    data = request.json

    print("NEW ORDER:", data)

    order = Order(
        customer_name=data["customer_name"],
        phone=data["phone"],
        address=data["address"],
        city=data["city"],
        total_price=data["total_price"]
    )

    db.session.add(order)
    db.session.commit()

    return jsonify({
        "message": "Order created"
    })