from flask_restful import Resource
from flask import request, session
from sqlalchemy.exc import IntegrityError 

from models.models import GH
from config import api, db
      
class Ghs(Resource):
    def get(self):
        list = []

        for gh in GH.query.all():
            gh_obj = gh.to_dict(only=("id", "value", "created_at", "tank_id"))
            list.append(gh_obj)

        return list, 200

api.add_resource(Ghs, "/ghs")