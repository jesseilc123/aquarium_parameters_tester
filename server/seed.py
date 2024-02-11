from random import randrange, choice as rc
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
            username = "testuser1",
            email = f"testuser1@gmail.com"
        )
        user.password_hash = "testuser1"

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
            {"name": "Temperature", "range": [68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82], "type": "all", "class": Temperature}, 
            {"name": "PH", "range": [6.0, 6.1, 6.2, 6.3, 6.4, 6.5, 6.6, 6.7, 6.8, 6.9, 7.0, 7.1, 7.2, 7.3, 7.4], "type": "all", "class": PH}, 
            {"name": "Nitrite", "range": [0.00, 0.25, 0.50, 0.75, 1.00, 1.25, 1.50], "type": "all", "class": Nitrite},
            {"name": "Nitrate", "range": [0.00, 0.25, 0.50, 0.75, 1.00, 1.25, 1.50], "type": "all", "class": Nitrate},
            {"name": "Ammonia", "range": [0.00, 0.25, 0.50, 0.75, 1.00, 1.25, 1.50], "type": "all", "class": Ammonia},
            {"name": "Alkalinity", "range": [4, 5, 6, 7, 8, 9, 10, 11, 12], "type": "all", "class": Alkalinity},
            {"name": "GH", "range": [4, 5, 6, 7, 8, 9, 10, 11, 12], "type": "fresh", "class": GH},
            {"name": "Calcium", "range": [300, 325, 350, 375, 400, 425, 450, 475, 500], "type": "salt", "class": Calcium},
            {"name": "Magnesium", "range": [1100, 1150, 1200, 1250, 1300, 1350, 1400], "type": "salt", "class": Magnesium},
            {"name": "Iodine", "range": [1100, 1150, 1200, 1250, 1300, 1350, 1400], "type": "salt", "class": Iodine},
            {"name": "Strontium", "range": [4, 5, 6, 7, 8, 9, 10, 11, 12], "type": "salt", "class": Strontium},
            {"name": "Salinity", "range": [0.019, 0.020, 0.021, 0.022, 0.023, 0.024, 0.025, 0.026], "type": "salt", "class": Salinity},
            {"name": "Phosphate", "range": [0.00, 0.01, 0.02, 0.03, 0.04, 0.05, 0.06, 0.07, 0.08, 0.09, 0.09], "type": "salt", "class": Phosphate},
        ]

        for i in params: 
            print(f"    Seeding {i['name']}")
            day = 1
            month = 10
            for days in range(1, 88):
                if day > 29:
                    day = 1
                    month+=1

                if i["type"] == "fresh":
                    obj = i["class"](
                        value = rc(i["range"]),
                        created_at = datetime(2023, month, day),
                        tank_id = tank_1.id
                    )
                    db.session.add(obj)
                    db.session.commit()
                elif i["type"] == "salt":
                    obj = i["class"](
                        value = rc(i["range"]),
                        created_at = datetime(2023, month, day),
                        tank_id = tank_2.id
                    )
                    db.session.add(obj)
                    db.session.commit()
                else:
                    obj_1 = i["class"](
                        value = rc(i["range"]),
                        created_at = datetime(2023, month, day),
                        tank_id = tank_1.id
                    )
                    db.session.add(obj_1)
                    db.session.commit()

                    obj_2 = i["class"](
                        value = rc(i["range"]),
                        created_at = datetime(2023, month, day),
                        tank_id = tank_2.id
                    )
                    db.session.add(obj_2)
                    db.session.commit()
                day+=1                  

        print("Seed complete!")