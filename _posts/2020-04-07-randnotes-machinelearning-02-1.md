---
title: "[02-1] Feature Scaling: Before or After Data Splitting?"
date:  2020-04-07 21:37:00 +0200
categories: [Random Notes, Machine Learning Theories]
tags: [random notes, machine learning]
pin: true
math: true
---

One common question that often arises in the machine learning process is whether to apply feature scaling before or after splitting the dataset into training and test sets. The choice between these two options can have a significant impact on the performance of your machine learning model. In this article, we'll explore the reasoning behind this decision and provide an example to illustrate the concept.

## **Understanding Feature Scaling**

Feature scaling is a crucial preprocessing step in machine learning. It ensures that the numerical features used in your model have a similar scale, preventing certain features from dominating the learning process due to their larger magnitude. Two common scaling techniques are Min-Max scaling and Standardization (Z-score scaling).

- **Min-Max Scaling:** Rescales features to a specified range, typically between 0 and 1. It's useful when you want to constrain feature values within a specific range.

  $$X_{\text{new}} = \frac{X - X_{\text{min}}}{X_{\text{max}} - X_{\text{min}}}$$

- **Standardization (Z-score Scaling):** Transforms features to have a mean (μ) of 0 and a standard deviation (σ) of 1. It's suitable when you want to give all features a standard normal distribution.

  $$X_{\text{new}} = \frac{X - \mu}{\sigma}$$

## **The Dilemma: Before or After Data Splitting?**

The decision of whether to apply feature scaling before or after splitting the dataset depends on the risk of data leakage and maintaining the integrity of the evaluation process.

### **1. Applying Feature Scaling Before Data Splitting**

In this approach, you first scale your entire dataset and then split it into training and test sets. While this might seem convenient, it can introduce data leakage, where information from the test set influences the scaling process based on the statistics of the entire dataset.

**Example:** Imagine you're building a machine learning model to predict housing prices. If you apply Min-Max scaling to the entire dataset (including the test set), the minimum and maximum values used for scaling are influenced by data points in both the training and test sets. This means your model could indirectly learn information from the test set, leading to overly optimistic performance estimates.

### **2. Applying Feature Scaling After Data Splitting**

In this approach, you split the dataset first and then independently scale the training and test sets. This method ensures that no information from the test set leaks into the scaling process.

**Example:** Using the housing price prediction example, you split the dataset into training and test sets before applying Min-Max scaling. The scaling parameters (minimum and maximum values) are computed only from the training set. This preserves the integrity of the test set and provides a more accurate evaluation of your model's performance.

## **So, Best Practice**

To avoid data leakage and ensure a fair evaluation of your machine learning model, it's recommended to apply feature scaling after splitting the dataset into training and test sets. This practice maintains the independence of the test set, allowing you to assess your model's performance accurately.

Remember that in the machine learning process, maintaining data integrity and preventing information leakage are essential principles for building reliable models.
