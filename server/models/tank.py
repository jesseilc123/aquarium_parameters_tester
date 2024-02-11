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
        '-salinities.tank',
        '-user',
    )

    id = db.Column(db.Integer, primary_key=True)

    name = db.Column(db.String, nullable=False)
    type = db.Column(db.String, nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)

    temperatures = db.relationship("Temperature", backref="tank", cascade="all, delete-orphan")
    ammonias = db.relationship("Ammonia", backref="tank", cascade="all, delete-orphan")
    nitrites = db.relationship("Nitrite", backref="tank", cascade="all, delete-orphan")
    nitrates = db.relationship("Nitrate", backref="tank", cascade="all, delete-orphan")
    phs = db.relationship("PH", backref="tank", cascade="all, delete-orphan")
    alkalinities = db.relationship("Alkalinity", backref="tank", cascade="all, delete-orphan")
    ghs = db.relationship("GH", backref="tank", cascade="all, delete-orphan")
    phosphates = db.relationship("Phosphate", backref="tank", cascade="all, delete-orphan")
    calciums = db.relationship("Calcium", backref="tank", cascade="all, delete-orphan")
    magnesiums = db.relationship("Magnesium", backref="tank", cascade="all, delete-orphan")
    iodines = db.relationship("Iodine", backref="tank", cascade="all, delete-orphan")
    strontiums = db.relationship("Strontium", backref="tank", cascade="all, delete-orphan")
    salinities = db.relationship("Salinity", backref="tank", cascade="all, delete-orphan")

    def __repr__(self):
        return f"Tank(id={self.id}, " + \
            f"name={self.name})"