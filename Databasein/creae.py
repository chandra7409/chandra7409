
import sqlite3
conn=sqlite3.connect("sqlite3.db")
conn.execute('''
             Create table Employee(
                 emp_id INT AUTO_INCREAMENT PRIMARY KEY,
                 emp_name VARCHAR(50),
                 emp_age  INT,
                 emp_salary numeric,
                 emp_gender varchar(20),
                 emp_email varchar(30)
                 
                 
                 
             );
             
             
             ''')
conn.close()
