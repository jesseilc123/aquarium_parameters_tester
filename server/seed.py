from random import randint, randrange, choice as rc
from datetime import datetime

from faker import Faker

from app import app
from config import db
from models.models import *

if __name__ == '__main__':
    fake = Faker()
    with app.app_context():
        print("Beginning Seed...")
        print("Seeding User and Tanks...")

        User.query.delete()
        Tank.query.delete()
        Temperature.query.delete()
        PH.query.delete()
        Nitrate.query.delete()
        Nitrite.query.delete()
        Ammonia.query.delete()
        Alkalinity.query.delete()
        GH.query.delete()
        Calcium.query.delete()
        Iodine.query.delete()
        Magnesium.query.delete()
        Phosphate.query.delete()
        Salinity.query.delete()
        Strontium.query.delete()

        print("    Seeding User")
        user = User(
            username = fake.unique.first_name(),
            email = f"{fake.unique.first_name()}@gmail.com"
        )
        user.password_hash = user.username

        db.session.add(user)
        db.session.commit()

        print("    Seeding Tanks")
        tank_1 = Tank(
            name = "First Tank",
            type = "Freshwater",
            user_id = user.id
        )
        db.session.add(tank_1)
        db.session.commit()

        tank_2 = Tank(
            name = "Second Tank",
            type = "Saltwater",
            user_id = user.id
        )
        db.session.add(tank_2)
        db.session.commit()

        print("Seeding Parameters...")
        params = [
            {"name": "Temperature", "min": 70, "max": 90, "type": "all", "class": Temperature}, 
            {"name": "PH", "min": 6.0, "max": 8.0, "type": "all", "class": Temperature}, 
            {"name": "Nitrite", "min": 0.00, "max": 1.00, "type": "all", "class": Temperature},
            {"name": "Nitrate", "min": 0.00, "max": 1.00, "type": "all", "class": Temperature},
            {"name": "Ammonia", "min": 0.00, "max": 1.00, "type": "all", "class": Temperature},
            {"name": "Alkalinity", "min": 1, "max": 14, "type": "all", "class": Temperature},
            {"name": "GH", "min": 1, "max": 14, "type": "fresh", "class": Temperature},
            {"name": "Calcium", "min": 300, "max": 500, "type": "salt", "class": Temperature},
            {"name": "Magnesium", "min": 1100, "max": 1400, "type": "salt", "class": Temperature},
            {"name": "Iodine", "min": 1100, "max": 1400, "type": "salt", "class": Temperature},
            {"name": "Strontium", "min": 1, "max": 14, "type": "salt", "class": Temperature},
        ]

        for i in params: 
            print(f"    Seeding {i['name']}")
            for day in range(1, 31):
                if i["type"] == "fresh":
                    obj = i["class"](
                        value = randrange(i["min"], i["max"]),
                        created_at = datetime(2023, 12, day),
                        tank_id = tank_1.id
                    )
                    db.session.add(obj)
                    db.session.commit()
                elif i["type"] == "salt":
                    obj = i["class"](
                        value = randrange(i["min"], i["max"]),
                        created_at = datetime(2023, 12, day),
                        tank_id = tank_2.id
                    )
                    db.session.add(obj)
                    db.session.commit()
                else:
                    obj_1 = i["class"](
                        value = randrange(i["min"], i["max"]),
                        created_at = datetime(2023, 12, day),
                        tank_id = tank_1.id
                    )
                    db.session.add(obj_1)
                    db.session.commit()

                    obj_2 = i["class"](
                        value = randrange(i["min"], i["max"]),
                        created_at = datetime(2023, 12, day),
                        tank_id = tank_2.id
                    )
                    db.session.add(obj_2)
                    db.session.commit()                  

        print("Seed complete!")