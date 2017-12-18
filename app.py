# Flaskモジュールのインポート
# jsonify -> JSON形式で書き出す
from flask import Flask, render_template, request, jsonify

# データベースモジュールのインポート
from tinydb import TinyDB, Query

app = Flask(__name__)

# Javascriptからのajax通信を許す (クロスドメインを許可する)
from flask_cors import CORS, cross_origin
CORS(app)

# データベースの作成
db = TinyDB('task_db.json')

@app.route("/")
def index():
    # データベースに保存された全タスクをJSONに書き出す
    print(db.all())
    # JsonfyでJSONを書き出す -> これをJSがAjaxで受け取る
    return jsonify(db.all())

@app.route("/add")
def add():
    # /add にルーティングされた時に、GETで受け取ったリクエストをデータベースに保存していく
    # 保存が終わったら、indexを実行しJSONに出力
    pass

@app.route("/delete")
def delete():
    # /add にルーティングされた時に、GETで受け取ったリクエストをデータベースから削除
    # 保存が終わったら、indexを実行しJSONに出力
    return index()

@app.route("/reset")
def reset():
    # ここにアクセスすると、最初のダミーデータが生成される


    if db is not None:
        db.purge()

    # データの格納
    db.insert({'task': 'apple'})
    db.insert({'task': 'peach'})
    db.insert({'task': 'banana'})
    db.insert({'task': 'orenge'})

    db.all()

    return "reset"

if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0")
