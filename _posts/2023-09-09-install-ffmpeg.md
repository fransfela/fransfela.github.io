---
title: "[02] Installing FFmpeg: Your Guide for Windows and Mac"
date:  2023-09-09 22:35:00 +0200
categories: [Audio-video Programming with FFmpeg]
tags: [ffmpeg, audiovisual programming]
---

Are you ready to unlock the powerful world of FFmpeg? Whether you're a budding multimedia creator, a tech enthusiast, or simply looking to explore the magic of multimedia manipulation, FFmpeg is your go-to tool. In this blog, I'll walk you through the step-by-step process of installing FFmpeg on both Windows and Mac, making sure you're equipped to dive into audio and video wizardry!

## **Installing FFmpeg on Windows**

### **Step 1: Downloading FFmpeg**

1. Go to the official FFmpeg website at [https://www.ffmpeg.org/download.html](https://www.ffmpeg.org/download.html).

2. Scroll down to the "Windows" section and click on the link that says "Windows Builds by shiro" (or any other suitable option).

3. You'll be redirected to a download page with several versions available. Choose the one that suits your needs. If you're not sure, the "Latest Git" version is usually a safe bet.

4. Download the ZIP file corresponding to your system architecture (32-bit or 64-bit). If you're unsure, go with the 64-bit version for better performance.

### **Step 2: Extracting FFmpeg**

1. Once the download is complete, navigate to the location where you saved the ZIP file.

2. Right-click on the ZIP file and select "Extract All..." to unzip the contents.

3. Choose a destination folder for the extracted files and click "Extract."

### **Step 3: Adding FFmpeg to PATH**

1. Now that FFmpeg is extracted, you need to add it to your system's PATH so that you can use it from the command line.

2. Search for "Environment Variables" in the Windows search bar and click "Edit the system environment variables."

3. In the "System Properties" window, click the "Environment Variables..." button at the bottom.

4. In the "System Variables" section, find and select "Path," then click "Edit."

5. Click "New" and add the path to the "bin" folder of the extracted FFmpeg files (e.g., `C:\path\to\ffmpeg\bin`). Click "OK" to save the changes.

6. Click "OK" to close all the windows.

### **Step 4: Verifying the Installation**

1. Open the command prompt (you can search for "cmd" in the Windows search bar).

2. Type `ffmpeg -version` and press Enter. You should see information about your FFmpeg installation, confirming that it's successfully installed.

## **Installing FFmpeg on Mac**

### **Step 1: Using Homebrew (Recommended)**

1. Open the Terminal app. You can find it in the "Utilities" folder within the "Applications" folder.

2. If you don't have Homebrew installed, you can install it by running the following command:
   
   ```
   /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
   ```

3. Once Homebrew is installed, you can easily install FFmpeg by running the following command:
   
   ```
   brew install ffmpeg
   ```

### **Step 2: Verifying the Installation**

1. After the installation is complete, you can verify it by running:
   
   ```
   ffmpeg -version
   ```

   You should see information about your FFmpeg installation, indicating that it's ready to use.

## **Ready to explore!**

Congratulations! You've successfully installed FFmpeg on both your Windows and Mac machines. Now you're armed with a versatile multimedia tool that can handle a wide range of audio and video tasks. Whether you're editing videos, converting audio formats, or exploring the world of multimedia, FFmpeg has got your back.

In the next blog post, we will start exploring the world of multimedia manipulation. But don't only wait for me! Go ahead yourself, find other references, and start experimenting!

*Note (or actually my wise advice): Make sure to respect copyright laws and terms of use when working with multimedia files.*
