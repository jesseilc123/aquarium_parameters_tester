from flask_restful import Resource
from flask import request, session
from sqlalchemy.exc import IntegrityError 

from models.models import Nitrate
from config import api, db
      
class Nitrates(Resource):
    def get(self):
        list = []

        for nitrate in Nitrate.query.all():
            nitrate_obj = nitrate.to_dict(only=("id", "value", "created_at", "tank_id"))
            list.append(nitrate_obj)

        return list, 200

api.add_resource(Nitrates, "/nitrates")