from flask_restful import Resource
from flask import request, session
from sqlalchemy.exc import IntegrityError 

from models.models import Phosphate
from config import api, db
      
class Phosphates(Resource):
    def get(self):
        list = []

        for phos in Phosphate.query.all():
            phos_obj = phos.to_dict(only=("id", "value", "created_at", "tank_id"))
            list.append(phos_obj)

        return list, 200

api.add_resource(Phosphates, "/phosphates")