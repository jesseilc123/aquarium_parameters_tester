from flask_restful import Resource
from flask import request, session
from sqlalchemy.exc import IntegrityError 

from models.models import Ammonia
from config import api, db
      
class Ammonias(Resource):
    def get(self):
        list = []

        for ammonia in Ammonia.query.all():
            ammonia_obj = ammonia.to_dict(only=("id", "value", "created_at", "tank_id"))
            list.append(ammonia_obj)

        return list, 200

api.add_resource(Ammonias, "/ammonias")