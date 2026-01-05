---
page_id: batchmailer
layout: page
title: BatchMaileR
description: A Shiny web application for sending batch emails with personalized content and attachments
img: assets/img/BatchMaileR.png
importance: 1
category: work
github: https://github.com/fransfela/BatchMaileR
related_publications: false
---

BatchMaileR is a professional **R Shiny web application** designed to streamline the process of sending batch emails with both common and personalized content and attachments. This tool is particularly useful for researchers, HR professionals, and anyone who needs to send customized emails to multiple recipients efficiently.

## Key Features

<div class="row mt-3">
    <div class="col-sm-6 mt-3 mt-md-0">
        <div class="card h-100">
            <div class="card-body">
                <h5 class="card-title">📧 Batch Email Processing</h5>
                <p class="card-text">Upload recipient data from CSV files and send personalized emails to multiple recipients simultaneously.</p>
            </div>
        </div>
    </div>
    <div class="col-sm-6 mt-3 mt-md-0">
        <div class="card h-100">
            <div class="card-body">
                <h5 class="card-title">✏️ Rich Text Editor</h5>
                <p class="card-text">Edit email content with various formatting options including bold, italic, lists, and more.</p>
            </div>
        </div>
    </div>
</div>

<div class="row mt-3">
    <div class="col-sm-6 mt-3 mt-md-0">
        <div class="card h-100">
            <div class="card-body">
                <h5 class="card-title">🎯 Dynamic Personalization</h5>
                <p class="card-text">Use placeholders like <code>[ColumnName]</code> to personalize email subjects and body content for each recipient.</p>
            </div>
        </div>
    </div>
    <div class="col-sm-6 mt-3 mt-md-0">
        <div class="card h-100">
            <div class="card-body">
                <h5 class="card-title">📎 Flexible Attachments</h5>
                <p class="card-text">Attach common files to all emails or include personalized attachments specific to each recipient.</p>
            </div>
        </div>
    </div>
</div>


## Technical Stack

The application is built using modern R technologies:

- **Shiny** - Interactive web application framework
- **readr** - Fast and friendly data import
- **RDCOMClient** - Windows COM interface for Outlook integration
- **Bootstrap** - Responsive UI components

## Use Cases

BatchMaileR has been particularly useful in several professional contexts:

1. **Research Studies**: Sending personalized invitations and materials to study participants
2. **HR Communication**: Distributing customized employment documents and onboarding materials
3. **Academic Administration**: Sending grade reports and feedback to students
4. **Business Operations**: Distributing personalized reports and certificates

The application follows a straightforward workflow:

1. **Upload Data**: Import a CSV file containing recipient information
2. **Compose Email**: Use the rich text editor to craft your message
3. **Add Placeholders**: Insert dynamic fields using the `[ColumnName]` syntax
4. **Attach Files**: Include common or personalized attachments
5. **Send**: Process and send all emails automatically

### Example Personalization

You can use placeholders to personalize both the subject and body of your emails:

```
Subject: Assessment Results for [AssessorName]

Dear [AssessorName],

Thank you for participating in our study. Your assessment ID is [AssessorID].
Please find your personalized report attached.

Best regards,
Research Team
```

Each recipient will receive an email with their specific information filled in automatically.

## Installation & Usage

To run BatchMaileR on your local machine:

```r
# Install required packages
install.packages("shiny")
install.packages("readr")
install.packages("RDCOMClient")

# Clone the repository
git clone https://github.com/fransfela/BatchMaileR.git

# Run the application
shiny::runApp('path_to_BatchMaileR')
```

<div class="row justify-content-sm-center mt-4">
    <div class="col-sm-8 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/BatchMaileR.png" title="BatchMaileR interface" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    The intuitive interface makes batch emailing accessible to users with varying technical backgrounds.
</div>

## Future Development

Planned enhancements for future versions include:

- Support for additional email clients beyond Outlook
- Email template library for common use cases
- Enhanced analytics and delivery tracking
- Multi-language support
- Cloud deployment options

## Project Background

BatchMaileR was developed to address a common challenge in research and professional environments: efficiently sending personalized communications to large groups while maintaining quality and accuracy. The tool has been successfully used in perceptual evaluation studies and administrative workflows at GN Audio A/S.

---

**Version**: v2.1  
**Status**: Active Development  
**License**: Open Source  
**GitHub**: [fransfela/BatchMaileR](https://github.com/fransfela/BatchMaileR)

For questions or support, feel free to reach out or open an issue on GitHub.
