from abc import ABC, abstractmethod
import enum

class VehicleType(enum.Enum):
    CAR = 1
    TRUCK = 2
    MOTORCYCLE = 3

class Level:
    def __init__(self, level_id, num_spots):
        pass
