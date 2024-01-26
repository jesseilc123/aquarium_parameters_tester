from config import db
from sqlalchemy_serializer import SerializerMixin

class Tank(db.Model, SerializerMixin):
    __tablename__ = "tanks"

    serialize_rules = (
        '-temperatures.tank', 
        '-ammonias.tank',
        '-nitrites.tank',
        '-nitrates.tank',
        '-phs.tank',
        '-alkalinities.tank',
        '-ghs.tank',
        '-phosphates.tank',
        '-calciums.tank',
        '-magnesiums.tank',
        '-iodines.tank',
        '-strontiums.tank',
    )

    id = db.Column(db.Integer, primary_key=True)

    name = db.Column(db.String, nullable=False)
    type = db.Column(db.String, nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)

    temperatures = db.relationship("Temperature", backref="tank")
    ammonias = db.relationship("Ammonia", backref="tank")
    nitrites = db.relationship("Nitrite", backref="tank")
    nitrates = db.relationship("Nitrate", backref="tank")
    phs = db.relationship("PH", backref="tank")
    alkalinities = db.relationship("Alkalinity", backref="tank")
    ghs = db.relationship("GH", backref="tank")
    phosphates = db.relationship("Phosphate", backref="tank")
    calciums = db.relationship("Calcium", backref="tank")
    magnesiums = db.relationship("Magnesium", backref="tank")
    iodines = db.relationship("Iodine", backref="tank")
    strontiums = db.relationship("Strontium", backref="tank")

    def __repr__(self):
        return f"Tank(id={self.id}, " + \
            f"name={self.name})"