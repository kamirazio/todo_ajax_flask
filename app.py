# Flaskモジュールのインポート
from flask import Flask, render_template, request
# データベースモジュールのインポート
from tinydb import TinyDB, Query
# データベースの作成
db = TinyDB('task_db.json')
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

if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0")
