from flask_restful import Resource
from flask import request, session
from sqlalchemy.exc import IntegrityError 

from models.models import PH
from config import api, db
      
class Phs(Resource):
    def get(self):
        list = []

        for ph in PH.query.all():
            ph_obj = ph.to_dict(only=("id", "value", "created_at", "tank_id"))
            list.append(ph_obj)

        return list, 200

api.add_resource(Phs, "/phs")