---
title: "[02-2] Feature Scaling: Normalization or Standardization?"
date:  2020-04-14 08:37:00 +0200
categories: [Random Notes, Machine Learning Theories]
tags: [random notes, machine learning, feature scaling]
pin: true
math: true
---

This post is still about feature scaling stuff! Haha. I hope we're all okay with giving a bit more time to know it.

When it comes to feature scaling in machine learning, it's not a one-size-fits-all scenario. Picture this: you're about to bake a cake, and you have options like sugar, honey, and maple syrup to sweeten it. Each choice adds a different flavor profile to your cake. Similarly, feature scaling methods bring their own "flavors" to your machine learning model. 

In my [previous post](https://fransfela.github.io/posts/randnotes-machinelearning-02-1/), I talked about when we should do feature scaling, before or after data splitting. In this blog post, we'll explore the available methods, their implications, and when to use them.

## **Understanding Feature Scaling**

Before we delve into the methods, let's understand why feature scaling is essential. Machine learning algorithms often work with numerical features, and these features can have different scales. If one feature's values range from 1 to 10, while another spans from 1,000 to 10,000, the algorithm might give undue importance to the larger-scale feature. Feature scaling eliminates this bias, ensuring that each feature contributes equally to the model's learning process.

## **The Available Methods**

### **1. Standardization (Z-score Scaling)**

**Formula:**
$$X_{\text{new}} = \frac{X - \mu}{\sigma}$$

In standardization, also known as Z-score scaling, each feature is transformed to have a mean ($\mu$) of 0 and a standard deviation ($\sigma$) of 1. This method is ideal when your data follows a roughly Gaussian (normal) distribution.

### **2. Min-Max Scaling (Normalization)**

**Formula:**
$$X_{\text{new}} = \frac{X - X_{\text{min}}}{X_{\text{max}} - X_{\text{min}}}$$

Min-Max scaling, also called normalization, scales features to a specified range, typically between 0 and 1. It's useful when you want to constrain feature values within a specific range.

### **3. Robust Scaling**

Robust scaling is similar to standardization but is more resistant to outliers. It uses the median and the interquartile range (IQR) instead of the mean and standard deviation. This makes it suitable for datasets with outliers.

### **4. Log Transformation**

For data that follows a skewed distribution, log transformation can help normalize the distribution and make it more amenable to certain algorithms.

## **Implications of Each Method**

### **Standardization**

Standardization is a safe bet when you're unsure about your data's distribution. It's less affected by outliers than Min-Max scaling and works well with algorithms that assume a Gaussian distribution of features.

**Example:** In a dataset of student exam scores, where scores vary from 0 to 100, standardization would make sense. It ensures that all scores are on a similar scale, regardless of the exam difficulty.

### **Min-Max Scaling (Normalization)**

Use Min-Max scaling when you have a clear understanding of your data's range and want to preserve it. It's great for algorithms that require input features to be on the same scale, like neural networks and K-means clustering.

**Example:** If you're working with images and each pixel's value ranges from 0 to 255, Min-Max scaling ensures that pixel values are between 0 and 1, making them compatible with deep learning models.

### **Robust Scaling**

Robust scaling is your go-to method when dealing with datasets that contain outliers. It rescales features based on robust statistics, making it less sensitive to extreme values.

**Example:** In a dataset of monthly salaries, where most salaries are in the $40,000-$60,000 range but a few executives earn $1,000,000+, robust scaling helps maintain the integrity of the majority of data points while accommodating the outliers.

### **Log Transformation**

Log transformation is handy when your data follows a skewed distribution, such as income or population data. It can make the distribution more symmetric and closer to a normal distribution.

**Example:** In a dataset of company revenues, where the majority of companies have modest earnings but a few giants have astronomical revenues, log transformation can help in visualizations and analyses.

## **Choosing the Right Flavor**

So, which feature scaling method should you choose? It depends on your data and your machine learning algorithm. Here's a simple guideline:

- **If you're unsure about your data's distribution:** Start with standardization (Z-score scaling).
- **If you know your data's range and want to preserve it:** Opt for Min-Max scaling (Normalization).
- **If your dataset contains outliers:** Lean towards robust scaling.
- **If your data follows a skewed distribution:** Consider log transformation.

Remember, the choice of feature scaling is just one ingredient in the machine learning recipe. To create a delectable model, you'll need to carefully select other ingredients like algorithms, hyperparameters, and evaluation metrics. It's all part of the exciting culinary journey of data science!
