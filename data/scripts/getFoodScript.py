text = """
Doro Wot.
Tender chicken marinated in lemon, ginger, garlic, onion & nutmeg & then sauteed in Ethiopian butter & red pepper sauce.
£8``
Doro Alicha Wot.
Tender chicken simmered in a mild blended sauce of Ethiopian butter, onion, ginger, garlic and cardamom.
£8``
Doro Firfir (Hot).
Dish number 34, mixed with Injera.
£8.5``
Doro Goulash.
Succulent cubes of chicken marinated with red pepper, garlic and simmered in chefs special sauce.
£8.5``
Dora Ingudai.
Tender cubes of chicken marinated in a delicious cream of mushroom sauce, ginger, garlic and then served on a sizzling dish fried onion.
£9``
Dora Gomen.
Tender cubes of chicken marinated and cooked with fresh spinach sauteed with onion. ginger. garlic, jalapeno, then served on a sizzling dish.
£9
"""

LIST = []


def format(food):
    food = food.split(".")
    return LIST.append({
        "name": food[0].strip("\n"),
        "description": food[1].strip("\n"),
        "price": food[1][1:].strip("\n"),
        "tag": ["Chicken"]
    })


result = list(map(format, text.split('``')))

print(LIST)
