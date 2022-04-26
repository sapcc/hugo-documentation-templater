# Create a new documentation site from scratch

## Create a hugo site

```
hugo new site my-docu-site
cd  my-docu-site
```

## Turn your site into a Hugo Module

```
  hugo mod init github.com/cc/my-docu-site
```

## Declare the hugo-documentation-templater module as a dependency for your site

Normally you would add the module as following:

```
hugo mod get github.com/sapcc/hugo-documentation-templater
```

But if you are developing this module add the following config to the go.mod file and it will redirect to your local folder:

```
module github.com/me/my-docu-site

// just for local dev!
replace github.wdf.sap.corp/cc/hugo-documentation-templater => /Users/d063222/Documents/sap/monsoon/hugo-documentation-templater

go 1.17

require github.com/sapcc/hugo-documentation-templater v0.0.0-somegiberish // indirect
```

## Edit the Hugo config file as following to import the templater:

```
baseURL: "http://example.org/"
languageCode: "en-us"
title: "My New SAP CC Doc Site"

module:
  hugoVersion:
    extended: true
    min: 0.73.0
  imports:
    - path: github.com/sapcc/hugo-documentation-templater
      disable: false
```

# Content and Customization

## Landing page

Add a file named `_index.md` to the root of content folder with following content to customize the landing page:

```
---
heroTitle: "The best documentation ever"
heroSubtitle: "This is the subtitle of the hero section"
---
```

## Documentation

Just drop your documnentation well organized in folders under `content/docs/`. Each folder should contain a `_index.md` file containing following information:

```
---
title: "Main title of the section"
linkTitle: "Name on the side navigation"
weight: "integer number describing the deepness in the sidebar navigation"
description: >
  "Description that goes below the title of the section"
---

{{% pageinfo %}}
The CNMP project extends the Kubernetes API with [Custom Resources Definitions (CRDs)](https://kubernetes.io/docs/concepts/extend-kubernetes/api-extension/custom-resources/)
to allow management and configuration of ABAP, HANA, WebDispatcher and other components.
This section provides an overview of the custom resources used by the Cloud Native Management Platform.
{{% /pageinfo %}}
```
