import sqlite3
conn=sqlite3.connect("sqlite.db")
ins='''
       insert into Employee( emp_id,emp_name,emp_age,emp_salary,emp_email)  values
       ( 132,'Tialk',20,50000,'Tialkc434@gmail.com')
            
'''
conn.execute(ins)
conn.commit()
conn.close()