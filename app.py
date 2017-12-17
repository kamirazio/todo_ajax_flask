# Flaskモジュールのインポート
from flask import Flask, render_template, request
# データベースモジュールのインポート
from tinydb import TinyDB, Query

app = Flask(__name__)

@app.route("/")
def index():
    # データベースに保存された全タスクをJSONに書き出す
    return "データJSON"

@app.route("/add")
def add():
    # /add にルーティングされた時に、GETで受け取ったリクエストをデータベースに保存していく
    # 保存が終わったら、indexを実行しJSONに出力
    return index()

@app.route("/reset")
def reset():
    # ここにアクセスすると、最初のダミーデータが生成される

    # データベースの作成
    db = TinyDB('task_db.json')
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
