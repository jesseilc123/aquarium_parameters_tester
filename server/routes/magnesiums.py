from flask_restful import Resource
from flask import request, session
from sqlalchemy.exc import IntegrityError 

from models.models import Magnesium
from config import api, db
      
class Magnesiums(Resource):
    def get(self):
        list = []

        for mag in Magnesium.query.all():
            mag_obj = mag.to_dict(only=("id", "value", "created_at", "tank_id"))
            list.append(mag_obj)

        return list, 200

api.add_resource(Magnesiums, "/magnesiums")