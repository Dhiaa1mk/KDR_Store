from config import db

class Product(db.Model):
    id = db.Column(db.Integer, primary_key=True)

    name = db.Column(db.String(100))
    description = db.Column(db.Text)

    price = db.Column(db.Float)

    image_url = db.Column(db.String(500))

    category = db.Column(db.String(50))

    stock = db.Column(db.Integer)

    size = db.Column(db.String(20))


class Order(db.Model):
    id = db.Column(db.Integer, primary_key=True)

    customer_name = db.Column(db.String(100))

    phone = db.Column(db.String(20))

    address = db.Column(db.String(255))

    city = db.Column(db.String(100))

    total_price = db.Column(db.Float)

    status = db.Column(
        db.String(50),
        default="Pending"
    )