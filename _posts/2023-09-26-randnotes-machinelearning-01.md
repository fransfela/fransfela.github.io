---
title: "[01] General Machine Learning Process"
date:  2023-09-26 21:52:00 +0200
categories: [Random Notes, Machine Learning]
tags: [random notes, machine learning]
pin: true
math: true
---

Machine learning, often touted as the engine behind artificial intelligence, is a captivating realm that empowers computers to learn and make decisions from data. If you've ever been curious about how this fascinating technology works, you're in the right place. In this blog post, I'll try breaking down the steps and concepts into bite-sized, understandable pieces.

## **Understanding the Machine Learning Process**

Machine learning is like teaching a computer to recognize patterns and make predictions based on data. The process can be simplified into several key steps:

### **1. Data Collection**

The journey begins with data—lots of it. You need relevant, high-quality data to train and test your machine learning model. This data could be anything from customer reviews and sensor readings to images and text.

### **2. Data Preprocessing**

Raw data is often messy, incomplete, or inconsistent. Data preprocessing involves cleaning and transforming the data to make it suitable for analysis. This step includes handling missing values, removing outliers, and encoding categorical variables.

### **3. Data Splitting**

You don't want to use all your data to train the model; you need some left for testing. Data splitting is the process of dividing your dataset into two parts: a training set for model training and a testing set to evaluate its performance.

### **4. Feature Engineering**

In machine learning, data features are the attributes or characteristics used to make predictions. Feature engineering is the art of selecting, creating, or transforming these features to improve model accuracy.

### **5. Model Selection**

Now comes the heart of machine learning—choosing the right algorithm or model. There are various types, from linear regression for predicting numeric values to decision trees for classification tasks.

### **6. Model Training**

Training a model involves feeding it the training data and allowing it to learn patterns. The model adjusts its internal parameters during this process to minimize errors.

### **7. Model Evaluation**

Once trained, the model needs to be tested on unseen data to assess its generalization performance. Common evaluation metrics include accuracy, precision, recall, and F1 score for classification, and mean squared error for regression.

### **8. Model Tuning**

If your model isn't performing well, it's time for fine-tuning. This step involves adjusting hyperparameters to optimize the model's performance.

### **9. Model Deployment**

Once you have a well-performing model, it's ready to be deployed into real-world applications. Deployment can involve integrating the model into a website, mobile app, or other software systems.

### **10. Model Monitoring and Maintenance**

Machine learning models aren't static; they need ongoing monitoring and maintenance to ensure they remain accurate and relevant. This includes retraining the model with new data as it becomes available.

## **Data Splitting: The Key to Model Evaluation**

Data splitting is a crucial step that ensures an unbiased assessment of your machine learning model's performance. The most common split is the 70-30 or 80-20 ratio, with 70% or 80% of the data used for training and the remaining 30% or 20% for testing.

## **Feature Scaling Techniques**

In machine learning, the scale of features matters. Features with large values can dominate the learning process, leading to inaccurate models. Feature scaling techniques, such as Min-Max scaling and Standardization (Z-score scaling), normalize feature values to a common range, ensuring all features have an equal influence on the model.

### **Min-Max Scaling**

The Min-Max scaling formula transforms feature values to a specified range, typically between 0 and 1:

$$ X_{\text{new}} = \frac{X - X_{\text{min}}}{X_{\text{max}} - X_{\text{min}}} $$


### **Standardization (Z-score Scaling)**

Standardization rescales features to have a mean (μ) of 0 and a standard deviation (σ) of 1:

$$ X_{\text{new}} = \frac{X - X_{\text{min}}}{X_{\text{max}} - X_{\text{min}}} $$


### **Don't stop here!**

I found two FREE resources for us to read! Feel free to find it below:

1. James, G., Witten, D., Hastie, T., & Tibshirani, R. (2013). *An Introduction to Statistical Learning*. Springer. [Download](https://www.statlearning.com/)
2. Hastie, T., Tibshirani, R., & Friedman, J. (2009). *The Elements of Statistical Learning*. Springer. [Download](https://hastie.su.domains/Papers/ESLII.pdf)
