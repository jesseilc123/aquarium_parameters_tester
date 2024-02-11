from flask_restful import Resource
from flask import request, session
from sqlalchemy.exc import IntegrityError 
from datetime import datetime

from models.models import Temperature
from config import api, db
      
class Temperatures(Resource):
    def get(self):
        list = []

        for temp in Temperature.query.all():
            temp_obj = temp.to_dict(only=("id", "value", "created_at", "tank_id"))
            list.append(temp_obj)

        return list, 200
    
    def post(self):
        # user_id = session.get("user_id")
        # print(user_id)
        # if not user_id:
        #     return {"message": "Unauthorized"}, 401
        print(request.get_json()["date"])
        new_temp = Temperature(
            value=request.get_json()["value"],
            created_at=datetime(int(request.get_json()["date"][0:4]), int(request.get_json()["date"][5:7]), int(request.get_json()["date"][8:10]) ),
            tank_id=request.get_json()["tankId"],
        )

        db.session.add(new_temp)
        db.session.commit()

        return new_temp.to_dict(), 201
    
    def delete(self):
        temp = Temperature.query.filter(Temperature.id == request.get_json()["id"]).first()
        db.session.delete(temp)
        db.session.commit()

        return {"message": "post successfully deleted"}, 200

api.add_resource(Temperatures, "/temperatures")