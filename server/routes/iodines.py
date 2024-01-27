from flask_restful import Resource
from flask import request, session
from sqlalchemy.exc import IntegrityError 

from models.models import Iodine
from config import api, db
      
class Iodines(Resource):
    def get(self):
        list = []

        for iodine in Iodine.query.all():
            iodine_obj = iodine.to_dict(only=("id", "value", "created_at", "tank_id"))
            list.append(iodine_obj)

        return list, 200

api.add_resource(Iodines, "/iodines")