from flask import Blueprint, request, jsonify
from app.models import Product
from app import db

admin_bp = Blueprint("admin", __name__)

@admin_bp.route("/api/admin/products", methods=["POST"])
def add_product():
    data = request.json

    new_product = Product(
        name=data["name"],
        price=data["price"],
        description=data.get("description", "")
    )

    db.session.add(new_product)
    db.session.commit()

    return jsonify({"message": "Product added"})