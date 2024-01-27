from flask_restful import Resource
from flask import request, session
from sqlalchemy.exc import IntegrityError 

from models.models import Strontium
from config import api, db
      
class Strontiums(Resource):
    def get(self):
        list = []

        for strontium in Strontium.query.all():
            strontium_obj = strontium.to_dict(only=("id", "value", "created_at", "tank_id"))
            list.append(strontium_obj)

        return list, 200

api.add_resource(Strontiums, "/strontiums")