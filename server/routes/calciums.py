from flask_restful import Resource
from flask import request, session
from sqlalchemy.exc import IntegrityError 

from models.models import Calcium
from config import api, db
      
class Calciums(Resource):
    def get(self):
        list = []

        for calcium in Calcium.query.all():
            calcium_obj = calcium.to_dict(only=("id", "value", "created_at", "tank_id"))
            list.append(calcium_obj)

        return list, 200

api.add_resource(Calciums, "/calciums")