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
        'directory': '1-Background',
        'required': True,
        'rarity_weights': None,
    },
    {
        'id': 2,
        'name': 'weapon',
        'directory': '2-Weapon',
        'required': False,
        'rarity_weights': 65,
    },
    {
        'id': 3,
        'name': 'face',
        'directory': '3-Face',
        'required': True,
        'rarity_weights': None,
    },
    {
        'id': 4,
        'name': 'tattoo',
        'directory': '4-Tattoo',
        'required': False,
        'rarity_weights': 55,
    },
    {
        'id': 5,
        'name': 'glow',
        'directory': '5-Glow',
        'required': True,
        'rarity_weights': None,
    },
    {
        'id': 6,
        'name': 'eyes',
        'directory': '6-Eyes',
        'required': True,
        'rarity_weights': None,
    },
    {
        'id': 7,
        'name': 'nose',
        'directory': '7-Nose',
        'required': True,
        'rarity_weights': None,
    },
    {
        'id': 8,
        'name': 'hair',
        'directory': '8-Hair',
        'required': True,
        'rarity_weights': None,
    },
    {
        'id': 9,
        'name': 'mouth',
        'directory': '9-Mouth',
        'required': True,
        'rarity_weights': None,
    },
    {
        'id': 10,
        'name': 'body',
        'directory': '10-Body',
        'required': True,
        'rarity_weights': None,
    },
    {
        'id': 10,
        'name': 'clothing',
        'directory': '11-Clothing',
        'required': True,
        'rarity_weights': None,
    },
    {
        'id': 11,
        'name': 'glasses',
        'directory': '12-Glasses',
        'required': False,
        'rarity_weights': 25,
    },
    {
        'id': 12,
        'name': 'accessory',
        'directory': '13-Accessory',
        'required': False,
        'rarity_weights': 70,
    },
    {
        'id': 13,
        'name': 'headgear',
        'directory': '14-Headgear',
        'required': False,
        'rarity_weights': 30,
    },
    {
        'id': 14,
        'name': 'mask',
        'directory': '15-Mask',
        'required': False,
        'rarity_weights': 10,
    },
]
