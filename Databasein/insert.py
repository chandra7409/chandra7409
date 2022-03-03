import sqlite3
conn=sqlite3.connect("sqlite.db")
data='''insert into student ( st_id,st_name,st_class,st_email) values ( '283','Tilak','btechh',"tilakc3432@gmail.com")
    



'''
conn.execute(data)
conn.commit()
conn.close()