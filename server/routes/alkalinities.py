from flask_restful import Resource
from flask import request, session
from sqlalchemy.exc import IntegrityError 

from models.models import Alkalinity
from config import api, db
      
class Alkalinities(Resource):
    def get(self):
        list = []

        for alkalinity in Alkalinity.query.all():
            alkalinity_obj = alkalinity.to_dict(only=("id", "value", "created_at", "tank_id"))
            list.append(alkalinity_obj)

        return list, 200

api.add_resource(Alkalinities, "/alkalinities")