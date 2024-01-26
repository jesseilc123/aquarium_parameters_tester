from config import db
from sqlalchemy_serializer import SerializerMixin

class PH(db.Model, SerializerMixin):
    __tablename__ = "pHs"

    id = db.Column(db.Integer, primary_key=True)

    value = db.Column(db.Integer, nullable=False)
    created_at = db.Column(db.DateTime, server_default=db.func.now())

    tank_id = db.Column(db.Integer, db.ForeignKey("tanks.id"), nullable=False)

    def __repr__(self):
        return f"PH(id={self.id}, " + \
            f"value={self.name})"