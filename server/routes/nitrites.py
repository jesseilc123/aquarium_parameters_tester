from flask_restful import Resource
from flask import request, session
from sqlalchemy.exc import IntegrityError 
from datetime import datetime

from models.models import Nitrite
from config import api, db
      
class Nitrites(Resource):
    def get(self):
        list = []

        for nitrite in Nitrite.query.all():
            nitrite_obj = nitrite.to_dict(only=("id", "value", "created_at", "tank_id"))
            list.append(nitrite_obj)

        return list, 200
    
    def post(self):
        # user_id = session.get("user_id")
        # print(user_id)
        # if not user_id:
        #     return {"message": "Unauthorized"}, 401
        print(request.get_json()["date"])
        new_nitrite = Nitrite(
            value=request.get_json()["value"],
            created_at=datetime(int(request.get_json()["date"][0:4]), int(request.get_json()["date"][5:7]), int(request.get_json()["date"][8:10]) ),
            tank_id=request.get_json()["tankId"],
        )

        db.session.add(new_nitrite)
        db.session.commit()

        return new_nitrite.to_dict(), 201
    
    def delete(self):
        temp = Nitrite.query.filter(Nitrite.id == request.get_json()["id"]).first()
        db.session.delete(temp)
        db.session.commit()

        return {"message": "post successfully deleted"}, 200

api.add_resource(Nitrites, "/nitrites")