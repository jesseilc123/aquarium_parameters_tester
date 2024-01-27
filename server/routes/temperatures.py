from flask_restful import Resource
from flask import request, session
from sqlalchemy.exc import IntegrityError 

from models.models import Temperature
from config import api, db
      
class Temperatures(Resource):
    def get(self):
        list = []

        for temp in Temperature.query.all():
            temp_obj = temp.to_dict(only=("id", "value", "created_at", "tank_id"))
            list.append(temp_obj)

        return list, 200

api.add_resource(Temperatures, "/temperatures")