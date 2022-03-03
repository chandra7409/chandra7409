
class vehicle():
    def __init__(self,mileage,cost):
         self.mileage=mileage
         self.cost=cost
    def show_vehicle_details(self):
        print("mileage of vehicle is " , self.mileage)
        print("cost of vwhicle is ",self.cost) 
v1=vehicle(300,500000)
'''v1.show_vehicle_details()       
       
       
       
       
class car(vehicle):
    def show_car_details():
        print("I am a car")
c=car(250,600000)
c.show_vehicle_details()
c.show_car_details()'''


class car(vehicle):
    def __init__(self,mileage,cost,types ,hp):
        super().__init__(mileage,cost)
        self.types=types
        self.hp=hp
    def show_car_details(self):
       
        print("the number is types are",self.types)
        print("values of the hourse power",self.hp)
        print("the Tilak chandra is best is full stack web developement")
c1=car(2000,60000,687579)
c1.show_car_details()