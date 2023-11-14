---
title: "[Project-001] Band Name Generator"
date:  2021-10-18 00:00:00 +0200
categories: [Practical Programming, 100 Days of Code Projects (Python)]
tags: [python]
math: true
---

### Level: Beginner

This Python code is a simple Band Name Generator program that interacts with the user to create a unique band name based on the city they grew up in and the name of their pet. Here's a breakdown of each part:

1. **Create a Greeting:**
    ```python
    print("Hello, welcome to the Band Name Generator.")
    ```
   This line prints a welcoming message to the user, informing them that they are about to use the Band Name Generator.

2. **Ask for the City:**
    ```python
    city = input("Please type the city that you grew up in.\n")
    ```
   This line uses the `input` function to prompt the user to enter the name of the city they grew up in. The entered value is stored in the variable `city`.

3. **Ask for the Pet Name:**
    ```python
    pet = input("Please type the name of your pet.\n")
    ```
   Similar to the previous step, this line prompts the user to enter the name of their pet, and the entered value is stored in the variable `pet`.

4. **Combine and Display the Band Name:**
    ```python
    print(("Your Band Name is ") + city + " " + pet)
    ```
   Finally, this line combines the user's city and pet names and prints out the generated band name. The band name is displayed in the format "Your Band Name is [city] [pet]".

So, when the user runs this program, they'll be greeted, and asked for their city and pet names, and the Band Name Generator will unveil their unique band name based on these inputs. It's a fun and interactive way to create imaginative band names!
