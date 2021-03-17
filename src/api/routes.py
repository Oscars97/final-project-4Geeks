"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Profile, Post
from api.utils import generate_sitemap, APIException
from werkzeug.security import generate_password_hash, check_password_hash       ## Nos permite manejar tokens por authentication (usuarios)    
from flask_jwt_extended import JWTManager, create_access_token, jwt_required, get_jwt_identity   #from models import Person
import datetime

api = Blueprint('api', __name__)
#jwt = JWTManager(api)

@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():
    users = User.query.all()
    users = list(map(lambda x: x.serialize(), users))
    response_body = {
        "users": users
    }

    return jsonify(response_body), 200


@api.route('/posts', methods=['GET'])
def getPosts():
    posts = Post.query.all()
    posts = list(map(lambda x: x.serialize(), posts))
    response_body = {
        "posts": posts
    }

    return jsonify(response_body), 200


@api.route('/login', methods=['POST'])
def login():
    
    email = request.json.get("email")
    password = request.json.get("password")

    if not email:
        return jsonify({"msg":"Email required"}), 400

    if not password:
        return jsonify({"msg":"Password required"}), 400
    
    user = User.query.filter_by(email=email).first()
    if not user:
        return jsonify({"msg": "The email is not correct"}), 401
    if not check_password_hash(user.password, password):
         return jsonify({"msg": "The password is not correct"}), 401

    expiracion = datetime.timedelta(days=3)
    access_token = create_access_token(identity=user.email, expires_delta=expiracion)
    # user_profile = Profile.query.filter_by(user_id==user.id).first()
    profile = Profile.query.filter_by(user_id=user.id).first()
    if profile == None:
        profile_status = profile
    if profile != None:
        profile_status = profile.serialize()
    data = {
            "user": user.serialize(),
            "token": access_token,
            "expires": expiracion.total_seconds()*1000,
            "userId": user.id,
            "username": user.username,
            "profile_status": profile_status
        }


    return jsonify(data), 200

@api.route('/new-post', methods=['POST'])
def addPost():
    
    content = request.json.get("content")
    user_id = request.json.get("user_id")
    user = User.query.get(user_id)
    
    if not content:
        return jsonify({"msg":"Content required"}), 400
    
    post = Post()
    post.content = content
    post.user_id = user_id
    db.session.add(post)
    db.session.commit()

    data = {
            "user": user.username,
            "success": "Added",
            "post_id": post.id
        }


    return jsonify(data), 200




@api.route('/register', methods=['POST'])
def register():
 if request.method == 'POST':
    email = request.json.get("email", None)
    password = request.json.get("password", None)
    username = request.json.get("username", None)
    
    if not email:
        return "Email required", 401
    username = request.json.get("username", None)
    if not username:
        return "Username required", 401
    password = request.json.get("password", None)
    if not password:
        return "Password required", 401

    email_query = User.query.filter_by(email=email).first()
    if email_query:
        return "This email has been already taken", 401
    
    user = User()
    user.email = email
    user.is_active= True
    user.username = username
    hashed_password = generate_password_hash(password)
    user.password = hashed_password
    
    db.session.add(user)
    db.session.commit()

    response = {
        "msg": "Added successfully",
        "username": username
    }
    return jsonify(response), 200

@api.route('/profile', methods=['POST'])
def register_profile():
 if request.method == 'POST':
    name = request.json.get("name", None)
    last_name = request.json.get("last_name", None)
    about_me = request.json.get("about_me", None)
    github = request.json.get("github", None)
    linkedin = request.json.get("linkedin", None)
    twitter = request.json.get("twitter", None)
    user_id = request.json.get("user_id", None)
    
    if not name:
        return "Email required", 401
    username = request.json.get("username", None)
    if not last_name:
        return "Username required", 401
    password = request.json.get("password", None)
    if not about_me:
        return "Password required", 401
    
    if not github:
        return "Password required", 401

    # email_query = User.query.filter_by(user_id=user_id).first()
    # if email_query:
    #     return "This email has been already taken", 401
    
    profile = Profile()
    profile.name = name
    profile.last_name=last_name
    profile.twitter=twitter
    profile.github=github
    profile.linkedin=linkedin
    profile.user_id=user_id
    profile.about_me=about_me
    profile.status = True

    
    db.session.add(profile)
    db.session.commit()

    response = {
        "msg": "Added successfully",
        "github": github
    }
    return jsonify(response), 200


################################# get para obtener los datos guardados en profile
@api.route('/profile/<int:user_id>', methods=['GET'])
def traer_datos(user_id):
    if request.method == 'GET':
        profile_query = Profile.query.filter_by(user_id=user_id).first()
        print(profile_query)
        return jsonify( {"user": profile_query.serialize() }  ), 200