**Initialize Install**

make sure you install all required package with <code>npm install</code>

**Export db from mysql**

<code>mysql2sqlite -f db.polygonid -d polygons -u root -t provinces districts sub_districts</code>

**Run APP**

<code>DEBUG=polygonid:* npm start</code> or <code> node app.js </code>