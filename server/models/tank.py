from config import db
from sqlalchemy_serializer import SerializerMixin

class Tank(db.Model, SerializerMixin):
    __tablename__ = "tanks"

    id = db.Column(db.Integer, primary_key=True)

    name = db.Column(db.String, nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)

    def __repr__(self):
        return f"Tank(id={self.id}, " + \
            f"name={self.name})"