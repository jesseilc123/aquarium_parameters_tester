from flask_restful import Resource
from flask import request, session
from sqlalchemy.exc import IntegrityError 

from models.models import Nitrite
from config import api, db
      
class Nitrites(Resource):
    def get(self):
        list = []

        for nitrite in Nitrite.query.all():
            nitrite_obj = nitrite.to_dict(only=("id", "value", "created_at", "tank_id"))
            list.append(nitrite_obj)

        return list, 200

api.add_resource(Nitrites, "/nitrites")