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

api.add_resource(Tanks, "/tanks")