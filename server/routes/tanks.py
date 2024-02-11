from flask_restful import Resource
from flask import request, session
from sqlalchemy.exc import IntegrityError 

from models.models import Tank
from config import api, db
      
class Tanks(Resource):
    def get(self):
        list = []
        for tank in Tank.query.all():
            tank_obj = tank.to_dict()
            list.append(tank_obj)

        return list, 200
    
    def delete(self):
        tank = Tank.query.filter(Tank.id == request.get_json()["id"]).first()
        print(tank)
        db.session.delete(tank)
        db.session.commit()

        return {"message": "post successfully deleted"}, 200
    
    def post(self):
        user_id = session.get("user_id")
        print(user_id)
        # if not user_id:
        #     return {"message": "Unauthorized"}, 401
        new_tank = Tank(
            name=request.get_json()["name"],
            type=request.get_json()["type"],
            user_id=request.get_json()["userId"],
        )

        db.session.add(new_tank)
        db.session.commit()

        return new_tank.to_dict(), 201
    
    def patch(self):
        # user_id = session.get("user_id")
        # if not user_id:
        #     return {"message": "Unauthorized"}, 401
        id = request.get_json()["id"]
        
        tank = Tank.query.filter(Tank.id == id).first()
        setattr(tank, "name", request.get_json()["name"])
        
        db.session.add(tank)
        db.session.commit()

        return tank.to_dict(), 201

api.add_resource(Tanks, "/tanks")