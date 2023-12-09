from flask import Flask, render_template, request, redirect, url_for
import sqlite3
from flask import jsonify

app = Flask(__name__)

# Инициализация базы данных
conn = sqlite3.connect('C:/Users/ali_t/Documents/WebKursovoi/anime_culture/users.db')
c = conn.cursor()
c.execute('''
    CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        login TEXT NOT NULL,
        message TEXT NOT NULL,
        secret INTEGER NOT NULL
    );
''')
conn.commit()
conn.close()

# Функция для выполнения запроса с защитой от SQL-инъекции
def execute_safe_query(query, params):
    conn = sqlite3.connect('C:/Users/ali_t/Documents/WebKursovoi/anime_culture/users.db')
    c = conn.cursor()
    try:
        result = c.execute(query, params).fetchall()
        conn.commit()
        return result
    except sqlite3.Error as e:
        print("SQLite error:", e)
        return None
    finally:
        conn.close()

# Функция для добавления нового пользователя
def add_user(login, message, secret):
    query = "INSERT INTO users (login, message, secret) VALUES (?, ?, ?)"
    params = (login, message, secret)
    execute_safe_query(query, params)

# Главная страница
@app.route('/')
def index():
    return render_template('index.html')

@app.route('/anime.html')
def anime():
    return render_template('anime.html')

# Обработка формы регистрации
@app.route('/register', methods=['POST'])
def register():
    login = request.form['login']
    message = request.form['message']
    secret = 123456  # Например, какое-то фиксированное значение, так как у вас нет поля для ввода secret в форме.

    add_user(login, message, secret)
    
    # Вместо возвращения строки 'User registered successfully!',
    # вы можете перенаправить пользователя на главную страницу.
    return redirect(url_for('index'))


@app.route('/get_users', methods=['GET'])
def get_users():
    query = "SELECT * FROM users"
    result = execute_safe_query(query, ())
    if result:
        users = [{'id': row[0], 'login': row[1], 'password': row[2], 'secret': row[3]} for row in result]
        return jsonify({'users': users})
    else:
        return jsonify({'error': 'Unable to fetch users'})

@app.route('/get_genres', methods=['GET'])
def get_genres():
    query = "SELECT * FROM genres"
    result = execute_safe_query(query, ())
    if result:
        genres = [{'id': row[0], 'genre': row[1]} for row in result]
        return jsonify({'genres': genres})
    else:
        return jsonify({'error': 'Unable to fetch genres'})
    
@app.route('/get_styles', methods=['GET'])
def get_styles():
    query = "SELECT * FROM styles"
    result = execute_safe_query(query, ())
    if result:
        styles = [{'id': row[0], 'style': row[1]} for row in result]
        return jsonify({'styles': styles})
    else:
        return jsonify({'error': 'Unable to fetch styles'})
    
@app.route('/get_communities', methods=['GET'])
def get_communities():
    query = "SELECT * FROM communities"
    result = execute_safe_query(query, ())
    if result:
        communities = [{'id': row[0], 'name': row[1], 'platform': row[2], 'members': row[3]} for row in result]
        return jsonify({'communities': communities})
    else:
        return jsonify({'error': 'Unable to fetch communities'})
    
@app.route('/get_cosplays', methods=['GET'])
def get_cosplays():
    query = "SELECT * FROM cosplays"
    result = execute_safe_query(query, ())
    if result:
        cosplays = [{'id': row[0], 'name': row[1]} for row in result]
        return jsonify({'cosplays': cosplays})
    else:
        return jsonify({'error': 'Unable to fetch cosplays'})

@app.route('/get_manga', methods=['GET'])
def get_manga():
    query = "SELECT * FROM manga"
    result = execute_safe_query(query, ())
    if result:
        manga = [{'id': row[0], 'name': row[1], 'rating': row[2], 'publisher': row[3]} for row in result]
        return jsonify({'manga': manga})
    else:
        return jsonify({'error': 'Unable to fetch manga'})
    
@app.route('/get_anime', methods=['GET'])
def get_anime():
    query = "SELECT * FROM anime"
    result = execute_safe_query(query, ())
    if result:
        anime = [{'id': row[0], 'name': row[1], 'rating': row[2], 'publisher': row[3]} for row in result]
        return jsonify({'anime': anime})
    else:
        return jsonify({'error': 'Unable to fetch anime'})

if __name__ == '__main__':
    app.run(debug=True)