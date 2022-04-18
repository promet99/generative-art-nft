# * 인간
# 인간타투 55%
# 안경 25
# 악세사리 70
# 모자 30
# 가면 10


PATH = "Human"
COUNT = 1000
BASE = "Human"
CONFIG = [
    {
        'id': 1,
        'name': 'background',
        'directory': '1-background',
        'required': True,
        'rarity_weights': None,
    },
    {
        'id': 2,
        'name': 'weapon',
        'directory': '2-weapon',
        'required': False,
        'rarity_weights': 65,
    },
    {
        'id': 3,
        'name': 'body',
        'directory': '3-face',
        'required': True,
        'rarity_weights': None,
    },
    {
        'id': 4,
        'name': 'tattoo',
        'directory': '4-tattoo',
        'required': False,
        'rarity_weights': 55,
    },
    {
        'id': 5,
        'name': 'glow',
        'directory': '5-glow',
        'required': True,
        'rarity_weights': None,
    },
    {
        'id': 6,
        'name': 'eyes',
        'directory': '6-eyes',
        'required': True,
        'rarity_weights': None,
    },
    {
        'id': 7,
        'name': 'nose',
        'directory': '7-nose',
        'required': True,
        'rarity_weights': None,
    },
    {
        'id': 8,
        'name': 'hair',
        'directory': '8-hair',
        'required': True,
        'rarity_weights': None,
    },
    {
        'id': 9,
        'name': 'mouth',
        'directory': '9-mouth',
        'required': True,
        'rarity_weights': None,
    },
    {
        'id': 10,
        'name': 'body',
        'directory': '10-body',
        'required': True,
        'rarity_weights': None,
    },
    {
        'id': 10,
        'name': 'clothing',
        'directory': '11-clothing',
        'required': True,
        'rarity_weights': None,
    },
    {
        'id': 11,
        'name': 'glasses',
        'directory': '12-glasses',
        'required': False,
        'rarity_weights': 25,
    },
    {
        'id': 12,
        'name': 'accessory',
        'directory': '13-accessory',
        'required': False,
        'rarity_weights': 70,
    },
    {
        'id': 13,
        'name': 'headgear',
        'directory': '14-headgear',
        'required': False,
        'rarity_weights': 30,
    },
    {
        'id': 14,
        'name': 'mask',
        'directory': '15-mask',
        'required': False,
        'rarity_weights': 10,
    },
]
