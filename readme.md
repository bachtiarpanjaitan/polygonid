> Initialize Install

Make sure you install all required package with <code>npm install</code>

> Export db from mysql to SQLite

<code>mysql2sqlite -f db.polygonid -d polygons -u root -t provinces districts sub_districts</code>

> Run APP

<code>PORT=5000 DEBUG=polygonid:* npm start</code> or <code> node app.js </code>

# Project: POLIGONID

## End-point: Get Provinces
> Response

| **Attribute** | **Type** |
| --- | --- |
| code | String |
| name | String |
| shape_area | Double |
| shape_leng | Double |
| adm0 | String |
| adm0_code | String |
| x | Double |
| y | Double |
### Method: GET
>```
>{{HOST}}/province
>```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Get Province Detail
> Query URL

| **Query** | **Type** | **Description** |
| --- | --- | --- |
| id | String | Province ID |

> Response

| **Attribute** | **Type** |
| --- | --- |
| code | String |
| name | String |
| coordinates | JSON |
| shape_area | Double |
| shape_leng | Double |
| adm0 | String |
| adm0_code | String |
| x | Double |
| y | Double |
### Method: GET
>```
>{{HOST}}/province/detail/{{PROVINCEID}}
>```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Get Districts By Province ID
> Query URL

| **Query** | **Type** | **Description** |
| --- | --- | --- |
| id | String | Province ID |

> Response

| **Attribute** | **Type** |
| --- | --- |
| code | String |
| name | String |
| shape_area | Double |
| shape_leng | Double |
| adm0 | String |
| adm0_code | String |
| x | Double |
| y | Double |
### Method: GET
>```
>{{HOST}}/district/{{PROVINCEID}}
>```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Get Districts Detail
> Query URL

| **Query** | **Type** | **Description** |
| --- | --- | --- |
| id | String | District ID |

> Response

| **Attribute** | **Type** |
| --- | --- |
| code | String |
| name | String |
| coordinates | JSON |
| shape_area | Double |
| shape_leng | Double |
| adm0 | String |
| adm0_code | String |
| adm1 | String |
| adm1_code | String |
| x | Double |
| y | Double |
### Method: GET
>```
>{{HOST}}/district/detail/{{DISTRICTID}}
>```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Get Sub Districts By District ID
> Query URL

| **Query** | **Type** | **Description** |
| --- | --- | --- |
| id | String | District ID |

> Response

| **Attribute** | **Type** |
| --- | --- |
| code | String |
| name | String |
| shape_area | Double |
| shape_leng | Double |
| adm0 | String |
| adm0_code | String |
| adm1 | String |
| adm1_code | String |
| adm2 | String |
| adm2_code | String |
| x | Double |
| y | Double |
### Method: GET
>```
>{{HOST}}/sub-district/{{DISTRICTID}}
>```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Get Sub Districts Detail
> Query URL

| **Query** | **Type** | **Description** |
| --- | --- | --- |
| id | String | Sub District ID |

> Response

| **Attribute** | **Type** |
| --- | --- |
| code | String |
| name | String |
| coordinates | JSON |
| shape_area | Double |
| shape_leng | Double |
| adm0 | String |
| adm0_code | String |
| adm1 | String |
| adm1_code | String |
| adm2 | String |
| adm2_code | String |
| x | Double |
| y | Double |
### Method: GET
>```
>{{HOST}}/sub-district/detail/{{SUBDISTRICTID}}
>```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Get Villages By Sub District ID
> Query URL

| **Query** | **Type** | **Description** |
| --- | --- | --- |
| id | String | Sub District ID |

> Response

| **Attribute** | **Type** |
| --- | --- |
| code | String |
| name | String |
| shape_area | Double |
| shape_leng | Double |
| adm0 | String |
| adm0_code | String |
| adm1 | String |
| adm1_code | String |
| adm2 | String |
| adm2_code | String |
| adm3 | String |
| adm3_code | String |
| x | Double |
| y | Double |
### Method: GET
>```
>{{HOST}}/village/{{SUBDISTRICTID}}
>```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Get Village Detail
> Query URL

| **Query** | **Type** | **Description** |
| --- | --- | --- |
| id | String | Village ID |

> Response

| **Attribute** | **Type** |
| --- | --- |
| code | String |
| name | String |
| coordinates | JSON |
| shape_area | Double |
| shape_leng | Double |
| adm0 | String |
| adm0_code | String |
| adm1 | String |
| adm1_code | String |
| adm2 | String |
| adm2_code | String |
| adm3 | String |
| adm3_code | String |
| x | Double |
| y | Double |
### Method: GET
>```
>{{HOST}}/village/detail/{{VILLAGEID}}
>```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃
_________________________________________________
Powered By: [postman-to-markdown](https://github.com/bautistaj/postman-to-markdown/)
