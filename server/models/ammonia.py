from config import db
from sqlalchemy_serializer import SerializerMixin

class Ammonia(db.Model, SerializerMixin):
    __tablename__ = "ammonias"

    id = db.Column(db.Integer, primary_key=True)

    value = db.Column(db.Integer, nullable=False)
    created_at = db.Column(db.DateTime, server_default=db.func.now())

    tank_id = db.Column(db.Integer, db.ForeignKey("tanks.id"), nullable=False)

    def __repr__(self):
        return f"Ammonia(id={self.id}, " + \
            f"value={self.name})"