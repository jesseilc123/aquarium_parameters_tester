from flask_restful import Resource
from flask import request, session
from sqlalchemy.exc import IntegrityError 

from models.models import Salinity
from config import api, db
      
class Salinities(Resource):
    def get(self):
        list = []

        for salt in Salinity.query.all():
            salt_obj = salt.to_dict(only=("id", "value", "created_at", "tank_id"))
            list.append(salt_obj)

        return list, 200

api.add_resource(Salinities, "/salinities")