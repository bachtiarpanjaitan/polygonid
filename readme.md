> Initialize Install

Make sure you install all required package with <code>npm install</code>

> Export db from mysql to SQLite

<code>mysql2sqlite -f db.polygonid -d polygons -u root -t provinces districts sub_districts</code>

> Run APP

<code>PORT=5000 DEBUG=polygonid:* npm start</code> or <code> node app.js </code>

for Documentation see on wiki.
